import type { Metadata } from "next";
import "@/styles/globals.css";
import { Syne } from "next/font/google";

export const metadata: Metadata = {
	title: "misch",
	description: "Typescript, shadcn/ui, Framer Motion, GSAP, Next.js 15",
};

const font = Syne({ subsets: ["latin"] });

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body className={`${font.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
