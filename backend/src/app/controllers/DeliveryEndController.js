import * as Yup from 'yup';
import Order from '../models/Order';

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
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(400).json({ error: 'Order not found' });
    }

    order.signature_id = req.body.signature_id;
    order.end_date = new Date();
    await order.save();

    return res.json(order);
  }
}

export default new DeliveryEndController();
