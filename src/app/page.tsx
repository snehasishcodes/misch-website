import Navbar from "@/components/navbar";
import Particles from "@/components/ui/particles";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import { FaBagShopping } from "react-icons/fa6";

export default function Landing() {
	return (
		<main className="relative flex justify-center items-center h-full w-full max-h-screen max-w-screen min-h-screen min-w-screen bg-black text-white p-4 md:p-8 overflow-hidden">
			<Navbar />

			<h2
				className="w-full text-center text-[6rem] sm:text-[10rem] md:text-[16rem] font-bold absolute bottom-32 md:bottom-2 leading-none bg-gradient-to-r from-white to-transparent text-transparent bg-clip-text"
			>
				misch
			</h2>

			<p className="absolute top-[25%] text-[clamp(0.8rem,3vw,1.125rem)] uppercase w-[325px] sm:w-[450px] md:w-[600px] text-justify">
				we provide low-cost, high-performance, hassle-free <span className="border">websites</span> for your business. websites that do everything you need it to. websites that look exactly how you want them to. <span className="text-transparent select-none">filler filler filler</span>
			</p>

			<Link href="/ecommerce">
				<span className="text-sm sm:text-base border border-white/25 bg-white/10 cursor-pointer px-4 py-1 rounded-full flex items-center gap-2 uppercase">
					<FaBagShopping /> e-commerce website @ ₹1499
				</span>
			</Link>

			<Spotlight
				className="absolute top-60"
				fill={"#fff"}
			/>
			<Particles
				className="absolute w-[150px] md:w-[400px] h-[200px] left-0 bottom-32 md:bottom-auto z-0"
				quantity={15}
				ease={80}
				color={"#fff"}
				vx={0.1}
				vy={0.1}
				refresh
			/>
		</main>
	)
}