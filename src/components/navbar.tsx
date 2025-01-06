import { PiEquals } from "react-icons/pi";

export default function Navbar() {
    return (
        <nav className="absolute top-10 left-0 right-0 w-full flex flex-row justify-between items-center gap-6 px-4 md:px-20">
            <h2 className="text-lg text-[rgba(255,255,255,0.6)] hover:text-white cursor-pointer duration-700"><PiEquals size={"2rem"} /></h2>

            <h2 className="text-lg text-[rgba(255,255,255,0.7)] cursor-pointer uppercase hover:text-white duration-700">pricing</h2>
        </nav>
    )
}