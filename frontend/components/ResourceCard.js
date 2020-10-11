import {resourceTrees} from "../data/resourceTrees";

export default function ({item, onResetSurvey}) {
    const resource = resourceTrees[item]

    if (!resource) return (<>
        <h1>There aren't any resources yet to display. Create the <span className="p-1 bg-gray-100 font-mono">{item}</span> resource!</h1>
    </>)

    return <div className="font-display mb-3 mr-5">
            {/* the resource title */}
            <h1 className="text-3xl sm:text-4xl flex align-middle font-bold text-gray-900 block w-auto ">
                <div className="m-7 mt-2 p-3 pt-5">
                    <svg className="fill-current text-brown-700 w-5 h-4">  
                            {/* brown square */}
                            <path d="M0 0 L20 0 L20 20 L0 20 Z"/>
                    </svg> 
                </div>
                <div>{resource.title}</div>
            </h1>

            {resource.resources.map((item, index) => <div key={`resourceItem_${index}`}>
                                                        <a className="flex items-center hover:text-red-700 p-3
                                                                                bg-gradient-to-r  hover:from-red-50" href={item.url}>
                                                            <div className="align-center pr-3">
                                                                <svg className="fill-current text-red-700 w-5 h-5">
                                                                        {/* red triangle */}
                                                                        <path d="M0 0 L15 10 L0 20 Z"/>
                                                                </svg>
                                                            </div>
                                                            
                                                            <span className="block p-0 text-gray-800 rounded-lg text-xl font-medium">
                                                                    {item.name}
                                                            </span>
                                                            </a>
                                                    </div>)}
    </div>
}