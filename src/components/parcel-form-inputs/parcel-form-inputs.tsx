import { Input } from "../ui/input";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import type { Control } from "react-hook-form";
import type { GenerationFormSchema } from "../generation-form/generation-form.schema";

type ParcelFormInputsProps = {
	control: Control<GenerationFormSchema>;
};

export function ParcelFormInputs({ control }: ParcelFormInputsProps) {
	return (
		<div className="flex flex-col gap-2 w-full">
			<FormField
				control={control}
				name="parcel.weight"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Weight</FormLabel>
						<FormControl>
							<Input
								type="number"
								placeholder="Weight"
								{...field}
								onChange={(e) => field.onChange(Number(e.target.value))}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="parcel.length"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Length</FormLabel>
						<FormControl>
							<Input
								type="number"
								placeholder="Length"
								{...field}
								onChange={(e) => field.onChange(Number(e.target.value))}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="parcel.width"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Width</FormLabel>
						<FormControl>
							<Input
								type="number"
								placeholder="Width"
								{...field}
								onChange={(e) => field.onChange(Number(e.target.value))}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name="parcel.height"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Height</FormLabel>
						<FormControl>
							<Input
								type="number"
								placeholder="Height"
								{...field}
								onChange={(e) => field.onChange(Number(e.target.value))}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
}
