import * as Yup from 'yup';
import Delivery from '../models/Delivery';

class DeliveryEndController {
  async store(req, res) {
    const schema = Yup.object().shape({
      signature_id: Yup.number()
        .integer()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);
    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    if (delivery.end_date) {
      return res.status(401).json({ error: 'Delivery already is finish' });
    }

    if (!delivery.start_date) {
      return res.status(401).json({ error: 'Delivery not already start' });
    }

    delivery.signature_id = req.body.signature_id;
    delivery.end_date = new Date();
    await delivery.save();

    return res.json(delivery);
  }
}

export default new DeliveryEndController();
