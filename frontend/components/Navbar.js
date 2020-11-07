import Link from "next/link";

export default function Navbar({isLanding}) {
    const linkStyling = `text-gray-500 hover:text-red-600 focus:text-red-500 ${!isLanding && "hidden sm:inline"}`

    return <div className="absolute top-0 right-0 p-4 w-full flex justify-between items-center font-display bg-white z-50">
        <Link href="/">
            <a className="font-semibold text-gray-700 text-xl">
                Venture<span className="font-sans text-gray-300 font-light">@</span>Brown
            </a>
        </Link>
        <div className="space-x-4 md:space-x-6">
            <Link href="/about">
                <a className={linkStyling}>About</a>
            </Link>
            <Link href="/resources">
                <a className={linkStyling}>Resources</a>
            </Link>
            {!isLanding && <Link href="/survey">
                <a className="red-link">Take the survey &rarr;</a>
            </Link>}

        </div>

    </div>
}