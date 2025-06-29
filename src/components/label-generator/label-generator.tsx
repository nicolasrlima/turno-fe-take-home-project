"use client";
import { useState } from "react";
import { GenerationForm } from "../generation-form";
import { PrintableLabel } from "../printable-label";

export function LabelGenerator() {
	const [labelImgUrl, setLabelImgUrl] = useState<string | null>(
		"https://easypost-files.s3.us-west-2.amazonaws.com/files/postage_label/20250629/e8a54a99a5e63545b5a34533b7a678ee69.png",
	);

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
