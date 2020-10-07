import {useState} from "react";
import {surveyQuestions} from "../data/surveyQuestions";
import ResourceCard from "./ResourceCard";
import QuestionCard from "./QuestionCard";

export default function () {
    const [displayMode, setDisplayMode] = useState("question")
    const [currentItem, setCurrentItem] = useState("1A")
    const item = surveyQuestions[currentItem]

    function navigateForward(choice) {
        if (choice.segue === "resource") {
            setDisplayMode("resource")
            setCurrentItem(choice.leadsTo)
        } else {
            setDisplayMode("question")
            setCurrentItem(choice.leadsTo)
        }
    }

    function navigateBackwards() {
        setCurrentItem(item.derivesFrom)
    }

    function resetSurvey() {
        setCurrentItem("1A")
        setDisplayMode("question")
    }

    if (displayMode === "question") {
        // Renderer for displaying a question
        return <QuestionCard item={item} onNavigateForward={navigateForward} onBack={navigateBackwards}/>
    } else {
        // Renderer for displaying resources
        return <div>
            {currentItem.map((item, index) => <ResourceCard item={item} key={`resourceCard_${index}`}/>)}
            <button onClick={resetSurvey} className="text-blue-400 mt-4">Start over</button>
        </div>
    }

}