import {motion, AnimatePresence} from "framer-motion"

export default function ({item, onNavigateForward, onBack}) {

    const isFirstQuestion = (item.question === "Pick a starting point 👇")


    return <AnimatePresence>
        <div>
            <motion.div key={item.question} className="font-display max-w-xl" initial={{ y: -25, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: {
                                ease: "easeOut", duration: 0.75
                            } }}
                        exit={{ y: 100, opacity: 0, transition: {
                                ease: "easeOut", duration: 0.75
                            } }}>
                <img src="https://via.placeholder.com/728x350" alt=""/>
                <div className="mt-4">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">{item.question}</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2" layout>
                        {item.choices.map(choice => <button className="surveyButton"
                                                            onClick={() => onNavigateForward(choice)}>{choice.content}</button>)}
                    </div>
                </div>

                <button onClick={onBack}
                        className={`font-bold text-red-600 mt-8 text-lg hover:text-red-500 focus:text-red-500 focus:underline 
               ${isFirstQuestion ? "invisible" : "visible"}`} disabled={isFirstQuestion}>
                    ← BACK
                </button>

                {/*<QuestionExplainationCard item={item}/>*/}

            </motion.div>
        </div>

    </AnimatePresence>
}