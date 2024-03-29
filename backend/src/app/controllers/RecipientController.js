import { Op } from 'sequelize';
import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { page = 1, name } = req.query;

    const { count: total, rows: records } = await Recipient.findAndCountAll({
      where: name && {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      order: ['name'],
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
    const recipient = await Recipient.findByPk(id);
    return res.json(recipient);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().integer(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zipcode: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Validation fails');
    }

    const { id, name } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.number().integer(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      zipcode: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Validation fails');
    }

    const { id } = req.params;
    const recipient = await Recipient.findByPk(id);
    if (!recipient) {
      return res.status(400).json('Recipient does not exists');
    }
    const { name } = await recipient.update(req.body);
    return res.json({
      id,
      name,
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    const recipient = await Recipient.findByPk(id);
    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    await recipient.destroy();
    return res.json({
      id,
      name: recipient.name,
    });
  }
}

export default new RecipientController();
