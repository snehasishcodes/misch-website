import Navbar from "@/components/navbar";
import SparklesText from "@/components/ui/sparkles-text";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import GridPattern from "@/components/ui/grid-pattern";

const inter = Inter({ subsets: ["latin"], weight: "600" });

export default function Pricing() {
    return (
        <main className="flex flex-col md:flex-row justify-evenly items-center h-full w-full max-w-screen min-h-screen min-w-screen bg-black text-white p-4 md:p-8">
            <Navbar className="static md:absolute w-full" />

            <div className="w-full flex flex-col justify-center items-start px-2 md:px-8 gap-4 my-20 md:my-2">
                <h2 className="text-2xl md:text-5xl font-bold leading-relaxed">
                    Grab An E-Commerce <span className="border">Website</span> For Your Business
                </h2>

                <div className="flex gap-4 items-end">
                    <h2 className="text-white/75 text-2xl md:text-6xl font-medium">@</h2>
                    <SparklesText className="text-3xl md:text-6xl font-medium" text="₹1499" sparklesCount={8} />
                    <h2 className="text-white/75">/ year</h2>
                </div>

                <InteractiveHoverButton text="Contact Us" className="text-black mt-6" />

                <h2 className="text-white/75">* Only available for first 50 clients who contact us.</h2>

                <h2>* Websites will be live from <span className={inter.className}>15th April 2025</span></h2>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-4">
                <div className="flex relative flex-col gap-2 rounded-2xl bg-white text-black p-6 shadow-white h-full w-[300px] md:w-[350px] z-50">
                    <h2 className="text-2xl md:text-4xl font-semibold leading-none">E-Commerce</h2>
                    <h2 className="text-base md:text-xl font-medium leading-none text-black/60">For Your Business</h2>

                    <div className="flex gap-2 justify-start items-center">
                        <h2 className={cn("text-4xl md:text-5xl font-semibold leading-none", inter.className)}>₹1499</h2>
                        <h2 className="text-sm md:text-base font-medium leading-none uppercase">per <br /> year</h2>
                    </div>

                    <div className="flex flex-col my-4">
                        <h2 className="text-base md:text-xl font-medium uppercase">benefits</h2>

                        <ul className="list-inside list-disc text-sm md:text-base">
                            <li>Full featured online store</li>
                            <li>Unlimited Products</li>
                            <li>24/7 Free Web Hosting</li>
                            <li>Free Custom Domain Name</li>
                            <li>All Indian Payment Methods</li>
                            <li>Complete Store Analytics</li>
                        </ul>

                        <Drawer>
                            <DrawerTrigger asChild>
                                <InteractiveHoverButton text="Show All" className="text-black w-full mt-2" />
                            </DrawerTrigger>
                            <DrawerContent className="flex flex-col justify-center items-center bg-black text-white border-white/10 p-4">
                                <DrawerHeader className="hidden">
                                    <DrawerTitle>All Benefits</DrawerTitle>
                                </DrawerHeader>

                                <div className="flex flex-col justify-center items-center gap-4 py-10">
                                    <h2 className="text-2xl">All Benefits</h2>

                                    <ul className="list-inside list-disc text-sm md:text-base">
                                        <li>Full featured online store</li>
                                        <li>Unlimited Products</li>
                                        <li>24/7 Free Web Hosting</li>
                                        <li>Free Custom Domain Name</li>
                                        <li>All Indian Payment Methods</li>
                                        <li>Supports Cash On Delivery Mode</li>
                                        <li>No Platform Fees or Extra Charges</li>
                                        <li>Complete Store Analytics</li>
                                        <li>Create Custom Pages</li>
                                        <li>Free Themes and Templates</li>
                                        <li>Resposive and Custom Design</li>
                                        <li>Up To 20 Collaborators</li>
                                    </ul>
                                </div>
                            </DrawerContent>
                        </Drawer>

                    </div>

                    <DotPattern
                        width={25}
                        height={25}
                        cx={1}
                        cy={1}
                        cr={1}
                        className={cn(
                            "[mask-image:linear-gradient(to_bottom_right,white,transparent,white)] rounded-2xl",
                        )}
                    />
                </div>
            </div>

            <GridPattern
                width={100}
                height={100}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,white)] ",
                )}
            />
        </main>
    )
}