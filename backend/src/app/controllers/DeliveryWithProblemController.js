import Delivery from '../models/Delivery';
import DeliveryProblem from '../models/DeliveryProblem';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

class DeliveryWithProblem {
  async index(req, res) {
    const { page = 1 } = req.query;

    const deliveries = await Delivery.findAll({
      // attributes: ['id', 'product', 'created_at'],
      include: [
        {
          model: DeliveryProblem,
          as: 'problems',
          required: true,
          // attributes: ['id', 'description'],
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
      order: ['created_at'],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(deliveries);
  }
}

export default new DeliveryWithProblem();
