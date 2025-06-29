"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function PrintablePage() {
	const searchParams = useSearchParams();
	const src = searchParams.get("src");
	const hasPrinted = useRef(false);

	if (!src) {
		window.close();
		return null;
	}

	return (
		<div className="flex items-center justify-center h-screen">
			<Image
				src={src}
				alt="Printable Label"
				width={600}
				height={800}
				onLoad={() => {
					if (!hasPrinted.current) {
						window.print();
						hasPrinted.current = true;
					}
				}}
			/>
		</div>
	);
}
