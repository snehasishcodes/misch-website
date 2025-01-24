import type { Metadata } from "next";
import "@/styles/globals.css";
import { Syne } from "next/font/google";
import Loading from "@/components/loading";

export const metadata: Metadata = {
	title: "lacerity",
	description: "genz developers building genz stuff.",
	icons: {
		icon: "/icon.png",
		shortcut: "/icon.png",
		apple: "/icon.png"
	},
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
