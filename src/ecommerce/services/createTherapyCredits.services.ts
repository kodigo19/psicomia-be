import { MercadopagoPreferenceModel } from "../entity/models/mercadopago.models";
import { ClientModel } from "../../user/entity/models/client.models";

export const createTherapyCreditsService = async(params: any): Promise<void> => {

  try {
    const {preference_id, user_id} = params;
    //Check if user has already created credits for this therapy, else create credit
    const preference = await MercadopagoPreferenceModel.findOne({preference_id});

    // Check if preference exist    
    if (!preference) throw new Error(`Error preference does not exist`);
    
    const therapy_code = preference.therapy_code;
    const credits = preference.credits;
    
    // Check if user_id is valid
    const client = await ClientModel.findOne({user_id});

    let has_this_therapy_code = false;
    let current_credits = 0;

    if (client) {
      const therapy_credits_data = client.appointment_credits
      if (therapy_credits_data.length > 0) {
        // Check if ther is appointment credit for this therapy_code
        therapy_credits_data.forEach((item) => {
          if (item.therapy_code === therapy_code) {
            has_this_therapy_code = true;
            current_credits = item.credits;
          }
        })
      }
    } else {
      throw new Error(`Error user does not exist`);
    }

    if (has_this_therapy_code) {
      // Update credit for therapy_code
      const updated_client = await ClientModel.updateOne(
        { 'user_id': user_id, 'appointment_credits.therapy_code' : therapy_code },
        { '$set': {
          'appointment_credits.$.therapy_code': therapy_code,
          'appointment_credits.$.credits': current_credits + credits,
        }}
      );
      console.log('updated_client HAS THIS THERAPY CODE', updated_client);
    } else {
      // Add therapy code and credits
      const appointment_credits_to_update = {
        therapy_code,
        credits,
      }
      const updated_client = await ClientModel.updateOne(
        { 'user_id': user_id }, 
        { '$push': { 'appointment_credits': {'therapy_code': therapy_code, 'credits' : credits} } },
      );
    }

  } catch (error: any) {
    throw new Error(`Error in CreateTherapyCreditsService: ${error.message}`);
  }
}