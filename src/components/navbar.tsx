import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="absolute top-10 left-0 right-0 w-full flex flex-row justify-between items-center gap-6 px-4 md:px-20">
            <Link href="https://instagram.com/try.misch">
                <h2 className="text-lg text-[rgba(255,255,255,0.6)] hover:text-white cursor-pointer duration-700 uppercase">home</h2>
            </Link>

            <Link href="https://instagram.com/try.misch">
                <h2 className="text-lg text-[rgba(255,255,255,0.6)] hover:text-white cursor-pointer duration-700 uppercase">instagram</h2>
            </Link>

            <Link href="/pricing">
                <h2 className="text-lg text-[rgba(255,255,255,0.7)] cursor-pointer uppercase hover:text-white duration-700">pricing</h2>
            </Link>
        </nav>
    )
}