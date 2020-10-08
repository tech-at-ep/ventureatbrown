import {resourceTrees} from "../data/resourceTrees";

export default function ({item, onResetSurvey}) {
    const resource = resourceTrees[item]

    if (!resource) return (<>
        <h1>There aren't any resources yet to display. Create the <span className="p-1 bg-gray-100 font-mono">{item}</span> resource!</h1>
    </>)

    return <div>
                <h1 className="text-5xl flex font-bold text-gray-900 block w-auto ">
                    <div className="m-7 mt-2 p-3 pt-5">
                        <svg className="fill-current text-brown-700 w-5 h-4">
                                <path d="M0 0 L20 0 L20 20 L0 20 Z"/>
                        </svg> 
                    </div>
                    <div>{resource.title}</div>
                </h1>

            {resource.resources.map((item, index) => <div key={`resourceItem_${index}`}>
                <a href={item.url}>
                    <span className="group block p-0 hover:text-red-700 focus:underline p-3
                    bg-gradient-to-r  hover:from-red-50
                    text-gray-800 rounded-lg text-xl font-medium">
                        <div className="inline-block ml-3 mr-3">
                            <svg className="fill-current text-red-700 w-5 h-5">
                                <path d="M0 0 L15 10 L0 20 Z"/>
                            </svg>
                        </div>
                            {item.name}
                    </span>
                    </a>
            </div>)}
    </div>
}