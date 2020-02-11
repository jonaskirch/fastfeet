import * as Yup from 'yup';
import { isBefore } from 'date-fns';
import Delivery from '../models/Delivery';

class DeliveryEndController {
  async store(req, res) {
    const schema = Yup.object().shape({
      date: Yup.number().required(),
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

    const date = Number(req.body.date);
    if (isBefore(date, delivery.start_date)) {
      return res
        .status(401)
        .json({ error: 'The delivery end does not can be before start' });
    }

    delivery.end_date = date;
    delivery.signature_id = req.body.signature_id;
    await delivery.save();

    return res.json(delivery);
  }
}

export default new DeliveryEndController();
