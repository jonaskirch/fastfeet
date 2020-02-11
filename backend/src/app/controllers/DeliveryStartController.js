import { Op } from 'sequelize';
import {
  setSeconds,
  setMinutes,
  setHours,
  startOfDay,
  endOfDay,
  isBefore,
  isAfter,
} from 'date-fns';
import * as Yup from 'yup';
import Delivery from '../models/Delivery';

class DeliveryStart {
  async store(req, res) {
    const schema = Yup.object().shape({
      date: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);
    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    if (delivery.start_date) {
      return res.status(401).json({ error: 'Delivery already is start' });
    }

    const date = Number(req.body.date);
    const startValidTime = setSeconds(setMinutes(setHours(date, 8), 0), 0);
    const endValidTime = setSeconds(setMinutes(setHours(date, 18), 0), 0);
    if (isBefore(date, startValidTime) || isAfter(date, endValidTime)) {
      return res
        .status(401)
        .json({ error: 'The delivery can only start in comercial time' });
    }

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
        .json({ error: 'Permitted only do 5 deliveries per day' });
    }

    delivery.start_date = date;
    await delivery.save();
    return res.json(delivery);
  }
}

export default new DeliveryStart();
