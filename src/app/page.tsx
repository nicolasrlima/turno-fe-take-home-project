import { GenerationForm } from "@/components/generation-form";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div className="flex flex-col items-center gap-2">
					<h1 className="text-4xl font-bold text-center sm:text-left">
						USPS Label Generator
					</h1>
					<p className="text-lg text-center sm:text-left">
						Generate USPS shipping labels with ease
					</p>
				</div>
				<GenerationForm />
			</main>
		</div>
	);
}
