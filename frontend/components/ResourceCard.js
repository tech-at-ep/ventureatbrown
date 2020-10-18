import {resourceTrees} from "../data/resourceTrees";

export default function ({item, onResetSurvey}) {
    const resource = resourceTrees[item]

    if (!resource) return (<>
        <h1>There aren't any resources yet to display. Create the <span className="p-1 bg-gray-100 font-mono">{item}</span> resource!</h1>
        <button onClick={onResetSurvey} className="text-blue-400 mt-4">Start over</button>
    </>)

    return <div>
        <h1 className="text-2xl font-bold">{resource.title}</h1>
        <div class="divide-y-2 divide-red-500 divide-dashed">
            {resource.resources.map((item, index) => <div key={`resourceItem_${index}`}>
                <a href={item.url}><span class="transition duration-500 ease-in-out bg-transparent hover:bg-yellow-300">{item.name}</span></a>
            </div>)}
        </div>
    </div>
}