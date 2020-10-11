import {motion, AnimatePresence} from "framer-motion";
import ResourceCard from "./ResourceCard";

export default function({currentItem, resetSurvey}){
    return <AnimatePresence>
        <motion.div className="font-display mt-10 pt-24 px-12" initial={{ y: -25, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: {
                                ease: "easeOut", duration: 0.75
                            } }}
                        exit={{ y: 100, opacity: 0, transition: {
                                ease: "easeOut", duration: 0.75
                            } }}> 
            <div className="flex flex-col">
                <img className="place-self-center" src="https://via.placeholder.com/728x350" alt=""/>
                
                <div className="flex flex-col md:flex-row">
                    {currentItem.map((item, index) => <ResourceCard item={item} key={`resourceCard_${index}`}/>)}
                </div> 
            </div>
            <button onClick={resetSurvey} className="text-blue-400 mt-4">Start over</button>
        </motion.div>
    </AnimatePresence>
}