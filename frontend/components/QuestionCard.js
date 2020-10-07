import QuestionExplainationCard from "./QuestionExplainationCard";

export default function ({item, onNavigateForward, onBack}) {

    const isFirstQuestion = item.question === "Pick a starting point 👇"

    return <div className="font-display max-w-xl">
        <img src="https://via.placeholder.com/728x350"/>
        <div className="mt-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">{item.question}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">

                {item.choices.map(choice => <button className="surveyButton" onClick={() => onNavigateForward(choice)}>{choice.content}</button>)}

            </div>

        </div>

       <button onClick={onBack}
               className={`font-bold text-red-600 mt-8 text-lg hover:text-red-500 focus:text-red-500 focus:underline 
               ${isFirstQuestion ? "invisible" : "visible"}`} disabled={isFirstQuestion}>
            ← BACK</button>

            {/*<QuestionExplainationCard item={item}/>*/}

    </div>
}