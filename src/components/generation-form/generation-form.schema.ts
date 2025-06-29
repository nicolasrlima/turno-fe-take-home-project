import { z } from "zod";

export const addressFormSchema = z.object({
  name: z.string().min(2).max(100),
  street1: z.string().min(2).max(100),
  street2: z.string().max(100).optional(),
  city: z.string().min(2).max(100),
  state: z.string().length(2),
  zip: z.string().length(5),
  phone: z.string().min(10).max(15),
  email: z.string().email(),
});
export type AddressFormSchema = z.infer<typeof addressFormSchema>;

export const parcelFormSchema = z.object({
  weight: z.number(),
  length: z.number(),
  width: z.number(),
  height: z.number(),
});
export type ParcelFormSchema = z.infer<typeof parcelFormSchema>;

export const addressPrefixes = z.enum(["fromAddress", "toAddress"]);
export type AddressPrefixes = z.infer<typeof addressPrefixes>;

export const generationFormSchema = z.object({
  fromAddress: addressFormSchema,
  toAddress: addressFormSchema,
  parcel: parcelFormSchema,
});
export type GenerationFormSchema = z.infer<typeof generationFormSchema>;
