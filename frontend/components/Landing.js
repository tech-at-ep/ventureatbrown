import {motion, AnimatePresence} from "framer-motion";
import Link from 'next/link';

export default function(){
    return <AnimatePresence className="block md:pt-10 md:pt-10 md:flex md:justify-center mb-6">
        <motion.div className="font-display max-w-screen-sm" initial={{ y: -25, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: {
                                ease: "easeOut", duration: 0.75
                            } }}
                        exit={{ y: 100, opacity: 0, transition: {
                                ease: "easeOut", duration: 0.75
                            } }}> 
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-left">About Venture@Brown</h1>
            <div className="text-justify">
                Venture@Brown serves a quick guide to useful resources for aspiring entrepreneurs. Answer some quick 
                questions and access resources geared towards your needs! 
            </div>
            <div className="mt-5"><Link href="/survey"><a className="text-blue-400 transition rounded-sm duration-500 ease-in-out hover:bg-gray-300"> Start Survey &rarr; </a></Link></div>
        </motion.div>
    </AnimatePresence>
}