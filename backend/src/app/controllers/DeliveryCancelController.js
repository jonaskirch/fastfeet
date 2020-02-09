import Delivery from '../models/Delivery';
import DeliveryProblem from '../models/DeliveryProblem';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

import CancelDeliveryMail from '../jobs/CancelDeliveryMail';
import Queue from '../../lib/Queue';

class DeliveryCancel {
  async store(req, res) {
    const { id } = req.params;
    const problem = await DeliveryProblem.findByPk(id);
    if (!problem) {
      return res
        .status(400)
        .json({ error: 'Delivery problem does not exists' });
    }

    const delivery = await Delivery.findByPk(problem.delivery_id, {
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });
    delivery.canceled_at = new Date();
    await delivery.save();

    await Queue.add(CancelDeliveryMail.key, {
      date: delivery.canceled_at,
      recipient: delivery.recipient,
      deliveryman: delivery.deliveryman,
    });

    return res.json(delivery);
  }
}

export default new DeliveryCancel();
