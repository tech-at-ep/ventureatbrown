import {useState} from "react";
import {surveyQuestions} from "../data/surveyQuestions";
import {resourceTrees} from "../data/resourceTrees";

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

    if (displayMode === "question") {
        // Renderer for displaying a question
        return <div>
            <p className="text-xl font-medium text-center">{item.question}</p>
            <div className="space-x-4 mt-4 flex justify-center">
                {item.choices.map(choice =>
                    <button className="p-1 px-3 border border-gray-300 rounded-full text-sm" onClick={() => navigateForward(choice)}>{choice.content}</button>)}
            </div>
        </div>
    } else {

        // Renderer for displaying resources
        return <div>
            {currentItem.map(item => {
                const resourceObject = resourceTrees[item]
                return <div>
                    <h2 className="font-bold text-2xl">{resourceObject.title}</h2>
                    {resourceObject.resources.map(resource => (<h2>{resource.name}</h2>))}
                </div>
            })}
        </div>
    }

}