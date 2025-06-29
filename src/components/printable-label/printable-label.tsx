import Image from "next/image";
import { Button } from "@/components/ui/button";

export interface PrintableLabelProps {
	src: string;
}

export function PrintableLabel({ src }: PrintableLabelProps) {
	const handlePrint = () => {};

	return (
		<div className="flex flex-col items-center gap-4">
			<div className="flex gap-2">
				<Button onClick={handlePrint}>Print</Button>
			</div>
			<Image src={src} alt="Shipping Label" width={600} height={800} />
		</div>
	);
}
