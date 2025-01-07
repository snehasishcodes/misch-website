import type { Metadata } from "next";
import "@/styles/globals.css";
import { Syne } from "next/font/google";
import Loading from "@/components/loading";

export const metadata: Metadata = {
	title: "misch",
	description: "we provide low-cost, high-performance websites for your businesses.",
};

const font = Syne({ subsets: ["latin"] });

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body className={`${font.className} antialiased`}>
				{children}

				<Loading />
			</body>
		</html>
	);
}
