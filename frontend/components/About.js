import {motion} from "framer-motion";
import Link from 'next/link';

export default function(){
    return <motion.div className="font-display max-w-screen-sm mx-5 sm:mx-auto mt-4" initial={{y: -25, opacity: 0}}
        animate={{
            y: 0, opacity: 1, transition: {
                ease: "easeOut", duration: 0.75
            }
        }}>
        <h1 className="text-3xl font-bold text-gray-900 px-4">Venture<span className="font-sans text-gray-400 font-light">@</span>Brown was Created By:</h1>
        <div class="flex flex-col px-4">

            <div class="flex flex-col text-black py-2 m-2">
                <div className="flex-shrink-0"><span className="flex-shrink-0 font-semibold text-xl">Nathan Luu</span></div>
                <div className="flex flex-row">
                    <div className="flex-shrink-0 p-3"><img className="inline-block" src="https://via.placeholder.com/150x180"></img></div>
                    <div className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>

            <div class="flex flex-col text-black py-2 m-2">
                <div className="flex-shrink-0"><span className="flex-shrink-0 font-semibold text-xl">Jasper Chen</span></div>
                <div className="flex flex-row">
                    <div className="flex-shrink-0 p-3"><img className="inline-block" src="https://via.placeholder.com/150x180"></img></div>
                    <div className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>

            <div class="flex flex-col text-black py-2 m-2">
                <div className="flex-shrink-0"><span className="flex-shrink-0 font-semibold text-xl">Abby Powell</span></div>
                <div className="flex flex-row">
                    <div className="flex-shrink-0 p-3"><img className="inline-block" src="https://via.placeholder.com/150x180"></img></div>
                    <div className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>

            <div class="flex flex-col text-black py-2 m-2">
                <div className="flex-shrink-0"><span className="flex-shrink-0 font-semibold text-xl">Aaron Wang</span></div>
                <div className="flex flex-row">
                    <div className="flex-shrink-0 p-3"><img className="inline-block" src="https://via.placeholder.com/150x180"></img></div>
                    <div className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>


        </div>
        <Link href="\">
            <a className="text-center bg-red-600 block md:inline-block rounded-lg py-3
                        font-display transition-all duration-200 font-medium hover:bg-red-400 focus:bg-red-400 px-12 mt-8 text-white" >&larr; Go Back</a>
        </Link>
        </motion.div>
}
