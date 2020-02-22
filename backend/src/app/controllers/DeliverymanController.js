import { Op } from 'sequelize';
import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Validation fails');
    }

    const { id, name } = await Deliveryman.create(req.body);

    return res.json({
      id,
      name,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Validation fails');
    }

    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);
    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    await deliveryman.update(req.body);
    return res.json({
      id,
      name: deliveryman.name,
    });
  }

  async index(req, res) {
    const { name } = req.query;

    const deliverymen = await Deliveryman.findAll({
      attributes: ['id', 'name', 'email'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'name', 'path', 'url'],
        },
      ],
      where: name && {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      order: ['name'],
    });

    return res.json(deliverymen);
  }

  async delete(req, res) {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);
    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    await deliveryman.destroy();
    return res.json({
      id,
      name: deliveryman.name,
    });
  }
}

export default new DeliverymanController();
