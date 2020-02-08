import * as Yup from 'yup';
import Order from '../models/Order';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

import NewOrderMail from '../jobs/NewOrderMail';
import Queue from '../../lib/Queue';

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
      return res.status(400).json({ error: 'Recipient does not exists' });
    }
    const deliveryman = await Deliveryman.findByPk(deliveryman_id);
    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const order = await Order.create(req.body);

    if (deliveryman.email) {
      await Queue.add(NewOrderMail.key, {
        date: order.createdAt,
        product: order.product,
        recipient,
        deliveryman,
      });
    }

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

    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    /**
     * check exists recipient and deliveryman
     */
    const { recipient_id, deliveryman_id } = req.body;

    if (recipient_id) {
      const recipient = await Recipient.findByPk(recipient_id);
      if (!recipient) {
        return res.status(400).json({ error: 'Recipient does not exists' });
      }
    }

    if (deliveryman_id) {
      const deliveryman = await Deliveryman.findByPk(deliveryman_id);
      if (!deliveryman) {
        return res.status(400).json({ error: 'Deliveryman does not exists' });
      }
      // const newDeliveryman = deliveryman_id !== order.deliveryman_id;
    }

    await order.update(req.body);

    // if (newDeliveryman && deliveryman.email) {
    //   await Queue.add(NewOrderMail.key, {
    //     date: order.createdAt,
    //     product: order.product,
    //     recipient: recipient || order.recipient,
    //     deliveryman: deliveryman || order.deliveryman,
    //   });
    // }

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
