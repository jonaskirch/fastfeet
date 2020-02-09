import { Op } from 'sequelize';
import { startOfDay, endOfDay } from 'date-fns';
import Order from '../models/Order';

class DeliveryStart {
  async store(req, res) {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(400).json({ error: 'Order not found' });
    }
    const date = new Date();
    const orderCount = await Order.count({
      where: {
        deliveryman_id: order.deliveryman_id,
        start_date: {
          [Op.between]: [startOfDay(date), endOfDay(date)],
        },
      },
    });

    if (orderCount >= 5) {
      return res
        .status(401)
        .json({ error: 'You can only do 5 deliveries per day' });
    }

    order.start_date = date;
    await order.save();
    return res.json(order);
  }
}

export default new DeliveryStart();
