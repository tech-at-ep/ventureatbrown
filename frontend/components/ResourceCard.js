import {resourceTrees} from "../data/resourceTrees";

export default function ({item}) {
    const resource = resourceTrees[item]

    if (!resource) return <h1>There aren't any resources yet to display. Create the <span className="p-1 bg-gray-100 font-mono">{item}</span> resource!</h1>
    return <div>
        <h1 className="text-2xl font-bold">{resource.title}</h1>
        <ul>
            {resource.resources.map((item, index) => <li key={`resourceItem_${index}`}>
                <h2>{item.name}</h2>
                <a>{item.url}</a>
            </li>)}
        </ul>
    </div>
}