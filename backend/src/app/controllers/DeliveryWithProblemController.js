import Delivery from '../models/Delivery';
import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryWithProblem {
  async index(req, res) {
    const { page = 1 } = req.query;

    const {
      count: total,
      rows: records,
    } = await DeliveryProblem.findAndCountAll({
      include: [
        {
          model: Delivery,
          as: 'delivery',
          required: true,
          attributes: [],
          where: {
            canceled_at: null,
            end_date: null,
          },
        },
      ],
      order: [['created_at', 'DESC']],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json({
      total,
      records,
    });
  }
}

export default new DeliveryWithProblem();
