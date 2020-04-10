import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class CancelDeliveryMail {
  get key() {
    return 'CancelDeliveryMail';
  }

  async handle({ data }) {
    await Mail.sendMail({
      to: `${data.deliveryman.name} <${data.deliveryman.email}>`,
      subject: 'Entrega cancelada',
      template: 'cancelDelivery',
      context: {
        deliveryman: data.deliveryman.name,
        recipient: data.recipient.name,
        date: format(parseISO(data.date), "'dia' dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        }),
      },
    });
  }
}

export default new CancelDeliveryMail();
