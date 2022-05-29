import { MercadopagoPreferenceModel } from "../entity/models/mercadopago.models";
import { createAny } from "../../shared/factory/createAny";

const mercadopago =require('mercadopago');

export const createPreferenceService = async(quantity: string, product_code: string, user_id: string) => {
  console.log('inside createPreferenceservice');
  // Cita Individual - Única Cita
  let title = '';
  let description = '';
  let unit_price = 9999999;
  console.log('product_code');
  console.log(product_code);
  if (product_code === 'CIU01') {
    title = 'Cita Individual';
    description = '1 cita por videollamada de 50 min. para 1 persona';
    unit_price = 90;
  } else if (product_code === 'CPU01') {
    // Cita de Pareja - Única Cita
    title = 'Cita de Pareja';
    description = '1 cita por videollamada de 50 min. para 2 persona';
    unit_price = 120;
  } else if (product_code === 'CIP01') {
    // Cita Individual - Paquete 5 citas
    title = 'Paquete de Citas Individual';
    description = '5 cita por videollamada de 50 min. para 1 persona';
    unit_price = 427.50;
  } else if (product_code === 'CPP01') {
    // Cita de Pareja - Paquete 5 Citas
    title = 'Paquete de Citas de Pareja';
    description = '5 cita por videollamada de 50 min. para 2 persona';
    unit_price = 570;
  } else {
    throw new Error(`Invalid Product Code`);
  }

  try {
    mercadopago.configure({
      access_token: `${process.env.MP_ACCESS_TOKEN}`,
    });

    let preference = {
      items: [
        {
          product_code,
          title,
          unit_price: Number(unit_price),
          quantity: Number(quantity),
          description,
          user_id,
        }
      ],
      // TODO Create Back URLS Redirect
      back_urls: {
        
        "success": `${process.env.CLIENT_URI}/client/checkout/redirect`,
        "failure": `${process.env.CLIENT_URI}/client/checkout/redirect`,
        "pending": `${process.env.CLIENT_URI}/client/checkout/redirect`,
      },
      auto_return: "approved",
    };
    console.log('antes de crear mpPreference');
    const mpPreference = await mercadopago.preferences.create(preference);
    console.log('antes de crear bdPreferenceToCreate');
    const bdPreferenceToCreate = {
      product_code,
      title,
      unit_price: Number(unit_price),
      quantity: Number(quantity),
      description,
      user_id,
      preference_id: mpPreference.body.id,
    }
    console.log('antes de crear bdPreference  ');
     const bdPreference = await createAny(MercadopagoPreferenceModel)(bdPreferenceToCreate);
     return mpPreference;
  } catch (error: any) {
    console.log('error in mercadopago.preferences.create')
    throw new Error(`Error creating preference in mercadopago: ${error.message}`);
  }
}