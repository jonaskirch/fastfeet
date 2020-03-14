import * as Yup from 'yup';
import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';

class DeliveryProblemController {
  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);
    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    const problem = await DeliveryProblem.create({
      ...req.body,
      delivery_id: id,
    });
    return res.json(problem);
  }

  async index(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);
    if (!delivery) {
      return res.status(400).json({ error: 'Delivery does not exists' });
    }

    const problems = await DeliveryProblem.findAll({
      attributes: ['id', 'description', 'created_at'],
      where: {
        delivery_id: id,
      },
    });

    return res.json(problems);
  }
}

export default new DeliveryProblemController();
