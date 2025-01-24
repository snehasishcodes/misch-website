import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
    return (
        <nav className={cn("absolute top-10 left-0 right-0 w-full flex flex-row justify-between items-center gap-6 px-4 md:px-20", className)}>
            <Link href="/">
                <h2 className="text-lg text-[rgba(255,255,255,0.6)] hover:text-white cursor-pointer duration-700 uppercase">home</h2>
            </Link>

            <Link href="https://instagram.com/laceritycom">
                <h2 className="text-lg text-[rgba(255,255,255,0.6)] hover:text-white cursor-pointer duration-700 uppercase">instagram</h2>
            </Link>

            <Link href="https://discord.gg/PGSMXHBCEP">
                <h2 className="text-lg text-[rgba(255,255,255,0.6)] hover:text-white cursor-pointer duration-700 uppercase">discord</h2>
            </Link>

            <Link href="#">
                <h2 className="text-lg text-[rgba(255,255,255,0.7)] cursor-pointer uppercase hover:text-white duration-700">soon</h2>
            </Link>
        </nav>
    )
}