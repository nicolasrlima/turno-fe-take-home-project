"use client";
import { useForm } from "react-hook-form";
import { AddressFormInputs } from "../address-form-inputs";
import {
	addressPrefixes,
	type GenerationFormSchema,
} from "./generation-form.schema";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

export function GenerationForm() {
	const form = useForm<GenerationFormSchema>();

	return (
		<Form {...form}>
			<h2 className="text-2xl font-semibold">Generate Shipping Label</h2>
			<p className="text-sm text-gray-500">
				Fill out the form below to generate your USPS shipping label.
			</p>
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
			</div>
			<Button type="submit">Generate Label</Button>
		</Form>
	);
}
