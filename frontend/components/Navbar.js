import Link from "next/link";

export default function Navbar({isLanding}) {
    const linkStyling = `text-gray-500 hover:text-red-600 focus:text-red-500 ${!isLanding && "hidden sm:inline"}`

    return <div className="absolute top-0 right-0 p-4 w-full flex justify-between items-center font-display">
        <Link href="/">
            <a className="font-medium text-gray-800 text-xl">
                Venture<span className="font-sans text-gray-400 font-light">@</span>Brown
            </a>
        </Link>
        <div className="space-x-4">
            <Link href="/about">
                <a className={linkStyling}>About</a>
            </Link>
            <Link href="/resources">
                <a className={linkStyling}>Resources</a>
            </Link>
            {!isLanding && <Link href="/survey">
                <a className="text-red-600 hover:text-red-500 focus:text-red-400 font-bold">Take the survey &rarr;</a>
            </Link>}

        </div>

    </div>
}