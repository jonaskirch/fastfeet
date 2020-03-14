import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import File from '../models/File';

class DeliverymanDelivered {
  async index(req, res) {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);
    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const { page = 1 } = req.query;
    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id: id,
        end_date: {
          [Op.ne]: null,
        },
      },
      attributes: ['id', 'product', 'start_date', 'end_date', 'status'],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'street',
            'number',
            'complement',
            'state',
            'city',
            'zipcode',
          ],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'path', 'url'],
        },
      ],
      order: [['created_at', 'DESC']],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(deliveries);
  }
}

export default new DeliverymanDelivered();
