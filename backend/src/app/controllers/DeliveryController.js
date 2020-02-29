import * as Yup from 'yup';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

import NewDeliveryMail from '../jobs/NewDeliveryMail';
import Queue from '../../lib/Queue';

const { Op } = require('sequelize');

class DeliveryController {
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

    const delivery = await Delivery.create(req.body);

    // await Queue.add(NewDeliveryMail.key, {
    //   date: delivery.createdAt,
    //   product: delivery.product,
    //   recipient,
    //   deliveryman,
    // });

    return res.json(delivery);
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
    const delivery = await Delivery.findByPk(id);
    if (!delivery) {
      return res.status(400).json({ error: 'Delivery does not exists' });
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
    }

    await delivery.update(req.body);

    return res.json(delivery);
  }

  async index(req, res) {
    const { page = 1, product } = req.query;

    const { count: total, rows: records } = await Delivery.findAndCountAll({
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
      where: product && {
        product: {
          [Op.iLike]: `%${product}%`,
        },
      },
      order: [['created_at', 'DESC']],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json({
      total,
      records,
    });
  }

  async show(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id, {
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
    });
    return res.json(delivery);
    // return res.json({
    //   recipient_id: delivery.recipient.id,
    //   deliveryman_id: delivery.deliveryman.id,
    //   product: delivery.product,
    // });
  }

  async delete(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);
    if (!delivery) {
      return res.status(400).json({ error: 'Delivery does not exists' });
    }

    if (delivery.end_date) {
      return res.status(400).json({
        error: 'Delivery does not can be delete because already was end',
      });
    }

    if (delivery.start_date) {
      return res.status(400).json({
        error: 'Delivery does not can be delete because already was start',
      });
    }

    await delivery.destroy();

    return res.json({ id: delivery.id });
  }
}

export default new DeliveryController();
