import { Op } from 'sequelize';
import { startOfDay, endOfDay } from 'date-fns';
import Delivery from '../models/Delivery';

class DeliveryStart {
  async store(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);
    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    if (delivery.start_date) {
      return res.status(401).json({ error: 'Delivery already is start' });
    }

    const date = new Date();
    const deliveryCount = await Delivery.count({
      where: {
        deliveryman_id: delivery.deliveryman_id,
        start_date: {
          [Op.between]: [startOfDay(date), endOfDay(date)],
        },
      },
    });

    if (deliveryCount >= 5) {
      return res
        .status(401)
        .json({ error: 'You can only do 5 deliveries per day' });
    }

    delivery.start_date = date;
    await delivery.save();
    return res.json(delivery);
  }
}

export default new DeliveryStart();
