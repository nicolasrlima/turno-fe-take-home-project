"use client";
import { useState } from "react";
import { GenerationForm } from "../generation-form";
import { PrintableLabel } from "../printable-label";

export function LabelGenerator() {
	const [labelImgUrl, setLabelImgUrl] = useState<string | undefined>();

	const handleGenerate = (url: string) => {
		setLabelImgUrl(url);
	};

	return (
		<div className="flex md:flex-row flex-col gap-4 md:gap-8 items-center justify-center p-4">
			<GenerationForm onGenerate={handleGenerate} />
			{labelImgUrl && <PrintableLabel src={labelImgUrl} />}
		</div>
	);
}
