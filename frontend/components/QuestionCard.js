import {resourceTrees} from "../data/resourceTrees";

export default function ({item, onNavigateForward, onBack}) {

    return <div>
        <p className="text-xl font-medium text-center">{item.question}</p>
        <div className="md:space-x-4 mt-4 flex-row md:flex justify-center space-y-4 md:space-y-0">
            {item.choices.map(choice =>
                <button className="p-1 px-3 border border-gray-300 rounded-full text-sm block"
                        onClick={() => onNavigateForward(choice)}>{choice.content}</button>)}
        </div>
        {item.question !== "Pick a starting point 👇" && <button onClick={onBack}>← Go back</button>}

    </div>
}