import * as Yup from 'yup';
import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

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
    const { page = 1 } = req.query;

    const deliveries = await Delivery.findAll({
      attributes: ['id', 'product'],
      include: [
        {
          model: DeliveryProblem,
          as: 'problem',
          attributes: ['id', 'description'],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name'],
        },
      ],
      // where: {
      //   delivery_id: id,
      // },
      order: ['created_at'],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(deliveries);
  }

  async show(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);
    if (!delivery) {
      return res.status(400).json({ error: 'Delivery does not exists' });
    }

    const problems = await DeliveryProblem.findAll({
      attributes: ['id', 'description'],
      where: {
        delivery_id: id,
      },
    });

    return res.json(problems);
  }
}

export default new DeliveryProblemController();
