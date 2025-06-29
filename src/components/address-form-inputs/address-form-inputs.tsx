import { Input } from "../ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import type { Control } from "react-hook-form";
import type {
	AddressPrefixes,
	GenerationFormSchema,
} from "../generation-form/generation-form.schema";

type AddressFormInputsProps = {
	control: Control<GenerationFormSchema>;
	addressPrefix: AddressPrefixes;
};

export function AddressFormInputs({
	control,
	addressPrefix,
}: AddressFormInputsProps) {
	return (
		<div className="flex flex-col gap-2 w-full">
			<FormField
				control={control}
				name={`${addressPrefix}.name`}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Name</FormLabel>
						<FormControl>
							<Input placeholder="Full Name" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name={`${addressPrefix}.street1`}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Street Address</FormLabel>
						<FormControl>
							<Input placeholder="Street 1 Address" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name={`${addressPrefix}.city`}
				render={({ field }) => (
					<FormItem>
						<FormLabel>City</FormLabel>
						<FormControl>
							<Input placeholder="City" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<div className="flex gap-4">
				<FormField
					control={control}
					name={`${addressPrefix}.state`}
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>State</FormLabel>
							<FormControl>
								<Select
									onValueChange={field.onChange}
									value={field.value}
									defaultValue={field.value}
								>
									<SelectTrigger>
										<SelectValue placeholder="State" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="AL">Alabama</SelectItem>
										<SelectItem value="AK">Alaska</SelectItem>
										<SelectItem value="AZ">Arizona</SelectItem>
										<SelectItem value="AR">Arkansas</SelectItem>
										<SelectItem value="CA">California</SelectItem>
										{/* Add more states as needed */}
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name={`${addressPrefix}.zip`}
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>ZIP Code</FormLabel>
							<FormControl>
								<Input placeholder="ZIP Code" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
			<FormField
				control={control}
				name={`${addressPrefix}.phone`}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Phone</FormLabel>
						<FormControl>
							<Input placeholder="Phone" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name={`${addressPrefix}.email`}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Email</FormLabel>
						<FormControl>
							<Input placeholder="Email" type="email" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
}
