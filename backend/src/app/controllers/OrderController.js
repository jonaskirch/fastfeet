import * as Yup from 'yup';
import Order from '../models/Order';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class OrderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number()
        .integer()
        .required(),
      deliveryman_id: Yup.number()
        .integer()
        .required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Validation fails');
    }

    /**
     * check exists recipient and deliveryman
     */
    const { recipient_id, deliveryman_id } = req.body;
    const recipient = await Recipient.findByPk(recipient_id);
    if (!recipient) {
      res.status(400).json({ error: 'Recipient does not exists' });
    }
    const deliveryman = await Recipient.findByPk(deliveryman_id);
    if (!deliveryman) {
      res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const order = await Order.create(req.body);
    return res.json(order);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().integer(),
      deliveryman_id: Yup.number().integer(),
      signature_id: Yup.number().integer(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Validation fails');
    }

    const { id } = req.query.params;
    const order = await Order.findByPk(id);
    if (!order) {
      res.status(400).json({ error: 'Recipient does not exists' });
    }

    /**
     * check exists recipient and deliveryman
     */
    const { recipient_id, deliveryman_id } = req.body;
    const recipient = await Recipient.findByPk(recipient_id);
    if (!recipient) {
      res.status(400).json({ error: 'Recipient does not exists' });
    }
    const deliveryman = await Recipient.findByPk(deliveryman_id);
    if (!deliveryman) {
      res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    await order.update(req.body);
    return res.json(order);
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const orders = await Order.findAll({
      attributes: ['id', 'product'],
      include: [
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

    return res.json(orders);
  }

  async delete(req, res) {
    res.json({ type: 'delete' });
  }
}

export default new OrderController();
