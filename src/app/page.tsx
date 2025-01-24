import Navbar from "@/components/navbar";
import Particles from "@/components/ui/particles";
import { Spotlight } from "@/components/ui/spotlight";
import GridPattern from "@/components/ui/grid-pattern";
import Link from "next/link";
import { SiDiscord } from "react-icons/si";
import { cn } from "@/lib/utils";

export default function Landing() {
	return (
		<main className="relative flex justify-center items-center h-full w-full max-h-screen max-w-screen min-h-screen min-w-screen bg-black text-white p-4 md:p-8 overflow-hidden">
			<Navbar />

			<h2
				className="w-full text-center text-[6rem] sm:text-[10rem] md:text-[12rem] lg:text-[16rem] font-bold absolute bottom-32 md:bottom-2 leading-none bg-gradient-to-r from-white to-transparent text-transparent bg-clip-text"
			>
				lacerity
			</h2>

			<p className="absolute top-[25%] text-[clamp(1.4rem,3vw,1.8rem)] uppercase w-[325px] sm:w-[450px] md:w-[600px] text-center">
				genz developers building genz stuff. 
			</p>

			<Link href="/discord">
				<span className="text-sm sm:text-base border border-white/25 bg-white/10 cursor-pointer px-4 py-1 rounded-full flex items-center gap-2 uppercase">
					<SiDiscord /> join the community
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

			<GridPattern
				width={100}
				height={100}
				x={-1}
				y={-1}
				className={cn(
					"[mask-image:linear-gradient(to_bottom_right,rgba(255,255,255,0.5),transparent,transparent)] ",
				)}
			/>
		</main>
	)
}