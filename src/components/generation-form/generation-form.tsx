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
import { generateShippingLabelUrl } from "@/server/shipments/actions";

export interface GenerationFormProps {
	onGenerate: (labelUrl: string) => void;
}

export function GenerationForm({ onGenerate }: GenerationFormProps) {
	const form = useForm<GenerationFormSchema>();

	const onSubmit = async (values: GenerationFormSchema) => {
		try {
			const labelUrl = await generateShippingLabelUrl(values);
			onGenerate(labelUrl);
		} catch {
			alert(
				"Failed to generate shipping label. Please try again or contact support.",
			);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
				<h2 className="text-2xl font-semibold">Generate Shipping Label</h2>
				<div className="flex flex-col gap-2 w-full">
					<h3 className="text-lg font-medium">From Address</h3>
					<AddressFormInputs
						addressPrefix={addressPrefixes.Enum.from_address}
						control={form.control}
					/>
					<h3 className="text-lg font-medium mt-6">To Address</h3>
					<AddressFormInputs
						addressPrefix={addressPrefixes.Enum.to_address}
						control={form.control}
					/>
					<h3 className="text-lg font-medium mt-6">Parcel Details</h3>
					<ParcelFormInputs control={form.control} />
				</div>
				<Button type="submit">Generate Label</Button>
			</form>
		</Form>
	);
}
