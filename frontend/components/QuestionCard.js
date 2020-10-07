import QuestionExplainationCard from "./QuestionExplainationCard";

export default function ({item, onNavigateForward, onBack}) {

    const isFirstQuestion = item.question === "Pick a starting point 👇"

    return <div className="font-display">
        <div className="text-5xl font-bold text-gray-900 block w-auto ">{item.question}</div>
        <div className="mt-4 w-screen">
            {item.choices.map(choice =><div className="group max-w-2xl">
                    <button className=" hover:text-red-700 focus:underline p-3
                   bg-gradient-to-r  hover:from-red-50
                    -ml-3 text-gray-800 rounded-lg text-xl block w-full text-left flex justify-between items-center"
                            onClick={() => onNavigateForward(choice)}>

                        <span>
                            {choice.content}
                        </span>

                            <div className="-rotate-90 transform group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                                <svg className="animate-bounce w-6 h-6 text-red-700" fill="none" strokeLinecap="round"
                                     strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                                </svg>
                            </div>


                    </button>
                </div>
                )}
        </div>
       <button onClick={onBack}
               className={`font-bold text-red-600 mt-8 hover:text-red-500 focus:text-red-500 focus:underline 
               ${isFirstQuestion ? "invisible" : "visible"}`} disabled={isFirstQuestion}>
            ← Go back</button>

            {/*<QuestionExplainationCard item={item}/>*/}

    </div>
}