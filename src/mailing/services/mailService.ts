import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import { logger } from '../../shared/logger/appLogger';
import {mailDomain, mailConfig} from './mailConfig';

export const sendMailService = async (recipientData: any, message: any, attachment:string) => {
  const mailgun = new Mailgun(FormData);
  const username = 'api';
  const key = `${process.env.MAILGUN_API_KEY}`;
  const mailDomain = `${process.env.MAILGUN_DOMAIN}`;

  const mg= mailgun.client({username,key});
  try {
    const {
      recipientFirstName,
      recipientEmail,
      orderNumber,
      billingAmount,
    } = recipientData
    const data = {
      from: 'Natalia de Psicologia Mia <info@psicologiamia.pe>',
      to: recipientEmail,
      subject: `${recipientFirstName}! Tu compra fue un éxito :D`,
      text: message.text,
      inline: attachment,
      template: 'checkout_confirmation_template_psmia',
      'h:X-Mailgun-Variables': JSON.stringify({ // be sure to stringify your payload
        orderNumber,
        billingAmount,
      }),
    };
    console.log('mg data',data)
    const msg = await mg.messages.create(mailDomain,data);
  } catch (error: any) {
    logger.error(error);
    console.log('error in sendmail');
    console.log(error);
    throw new Error(`Error sending email: ${error.message}`);
  }
}