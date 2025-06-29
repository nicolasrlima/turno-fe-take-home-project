"use server";
import EasyPostClient from "@easypost/api";
import type { GenerationFormSchema } from "@/components/generation-form/generation-form.schema";

if (!process.env.API_KEY) {
  throw new Error("API_KEY is not defined in the environment variables.");
}

const client = new EasyPostClient(process.env.API_KEY);

export async function generateShippingLabelUrl(
  formData: GenerationFormSchema
): Promise<string> {
  try {
    const shipment = await client.Shipment.create(formData);
    const boughtShipment = await client.Shipment.buy(
      shipment.id,
      shipment.lowestRate(["USPS"])
    );
    return boughtShipment.postage_label.label_url;
  } catch {
    throw new Error("Failed to generate shipping label URL.");
  }
}
