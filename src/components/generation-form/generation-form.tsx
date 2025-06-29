"use client";
import { useForm } from "react-hook-form";
import { AddressFormInputs } from "../address-form-inputs";
import {
	addressPrefixes,
	type GenerationFormSchema,
} from "./generation-form.schema";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { ParcelFormInputs } from "../parcel-form-inputs";

export function GenerationForm() {
	const form = useForm<GenerationFormSchema>();

	return (
		<Form {...form}>
			<h2 className="text-2xl font-semibold">Generate Shipping Label</h2>
			<div className="flex flex-col gap-2 w-full">
				<h3 className="text-lg font-medium">From Address</h3>
				<AddressFormInputs
					addressPrefix={addressPrefixes.Enum.fromAddress}
					control={form.control}
				/>
				<h3 className="text-lg font-medium mt-6">To Address</h3>
				<AddressFormInputs
					addressPrefix={addressPrefixes.Enum.toAddress}
					control={form.control}
				/>
				<h3 className="text-lg font-medium mt-6">Parcel Details</h3>
				<ParcelFormInputs control={form.control} />
			</div>
			<Button type="submit">Generate Label</Button>
		</Form>
	);
}
