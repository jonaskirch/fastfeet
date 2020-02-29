import Sequelize, { Model } from 'sequelize';

class Delivery extends Model {
  static init(sequelize) {
    super.init(
      {
        // recipient_id: Sequelize.INTEGER,
        deliveryman_id: Sequelize.INTEGER,
        signature_id: Sequelize.INTEGER,
        product: Sequelize.STRING,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
        status: {
          type: Sequelize.VIRTUAL,
          get() {
            console.log('start date', this.start_date);
            if (this.end_date) return 'ENTREGUE';
            if (this.canceled_at) return 'CANCELADA';
            if (this.start_date) return 'RETIRADA';
            return 'PENDENTE';
          },
        },
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Recipient, {
      foreignKey: 'recipient_id',
      as: 'recipient',
    });
    this.belongsTo(models.Deliveryman, {
      foreignKey: 'deliveryman_id',
      as: 'deliveryman',
    });
    this.belongsTo(models.File, {
      foreignKey: 'signature_id',
      as: 'signature',
    });
    this.hasMany(models.DeliveryProblem, {
      foreignKey: 'delivery_id',
      as: 'problems',
    });
  }
}

export default Delivery;
