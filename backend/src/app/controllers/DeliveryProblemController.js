import * as Yup from 'yup';
import { Op } from 'sequelize';

import Order from '../models/Order';
import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryProblemController {
  async index(req, res) {
    const { id } = req.params;

    const orders = await DeliveryProblem.findAll({
      include: [
        {
          model: Order,
          as: 'order',
          where: { id, start_date: { [Op.not]: null } },
        },
      ],
    });

    return res.json(orders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      deliveryman_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails!' });
    }

    const { id } = req.params;
    const { deliveryman_id } = req.body;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(401).json({ error: 'Order not found!' });
    }

    if (order.deliveryman_id !== deliveryman_id) {
      return res.status(401).json({
        error:
          'You cannot register a problem with an order that is not associated with you!',
      });
    }

    if (order.start_date === null) {
      return res.status(401).json({
        error: 'You cannot register a problem for an not withdraw order!',
      });
    }

    const deliveryProblem = await DeliveryProblem.create({
      ...req.body,
      delivery_id: id,
    });

    return res.json(deliveryProblem);
  }
}

export default new DeliveryProblemController();
