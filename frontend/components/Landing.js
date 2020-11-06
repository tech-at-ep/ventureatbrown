import {motion} from "framer-motion";
import Link from 'next/link';

export default function () {
    return <motion.div className="font-display max-w-screen-sm" initial={{y: -25, opacity: 0}}
                       animate={{
                           y: 0, opacity: 1, transition: {
                               ease: "easeOut", duration: 0.75
                           }
                       }}>
        <div className="absolute top-0 right-0 m-5 text-gray-400 hover:text-red-600"><Link href="/about"><a>About</a></Link></div>
        <img src="/placeholder_bear.svg" className="rounded-lg mb-6"/>
        <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900">Venture<span className="font-sans text-gray-400 font-light">@</span>Brown</h1>
            <p className="text-xl text-gray-500">A guide to help Brown and RISD navigate the entrepreneurial resources on College Hill.</p>
            <div className="mt-4">
                <Link href="/survey">
                    <a className="bg-red-600 block md:inline-block rounded-lg py-3 font-display transition-all duration-200 font-medium hover:bg-red-400 focus:bg-red-400 px-12 mt-8 text-white">
                        Let's get started &rarr;
                    </a>
                </Link>
            </div>
        </div>
    </motion.div>
}