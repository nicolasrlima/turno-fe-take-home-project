import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface PrintableLabelProps {
	src: string;
}

export function PrintableLabel({ src }: PrintableLabelProps) {
	return (
		<div className="flex flex-col items-center gap-4">
			<div className="flex gap-2">
				<Button asChild>
					<Link
						href={`/printable?src=${encodeURIComponent(src)}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						Print
					</Link>
				</Button>
			</div>
			<Image src={src} alt="Shipping Label" width={600} height={800} />
		</div>
	);
}
