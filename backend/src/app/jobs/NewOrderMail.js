import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class NewOrderMail {
  get Key() {
    return 'NewOrderMail';
  }

  async handle({ data }) {
    console.log('data', data);
    console.log('typeof', typeof data.createdAt);

    await Mail.sendMail({
      to: `${data.deliveryman.name} <${data.deliveryman.email}>`,
      subject: 'Nova encomenda',
      template: 'order',
      context: {
        deliveryman: data.deliveryman.name,
        recipient: data.recipient.name,
        date: format(parseISO(data.date), "'dia' dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        }),
        product: data.product,
      },
    });
  }
}

export default new NewOrderMail();
