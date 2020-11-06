import fb from "../lib/firebase-config";
import {useEffect, useState} from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Resources = () => {
    const [isLoading, toggleLoading] = useState(true)
    const [trees, setTrees] = useState({surveyQuestions: undefined, resources: undefined})

    useEffect(() => {
        fb.firestore().collection('ventureAtBrown').doc('trees').get()
            .then(doc => {
                setTrees(doc.data())
                toggleLoading(false)
            })
    }, [])

    if (isLoading) {
        return null
    }

    const sorted = Object.values(trees.resources).sort((a, b) => (a.title > b.title) ? 1 : -1)

    return <>
        <Head>
            <title>Resources | Venture@Brown</title>
        </Head>
        <div className="max-w-3xl mx-auto px-4 my-16 md:my-24">
            <Navbar/>
            <h1 className="text-5xl font-bold text-gray-900 font-display">Resources</h1>
            <section className="my-6">
                <h2 className="font-display text-2xl font-semibold mb-4 text-gray-800">Categories</h2>
                {sorted.map(resTree => <a className="py-1 hover:bg-red-50 hover:border-red-300 hover:text-red-600
            focus:bg-red-50 focus:border-red-300 focus:text-red-600
            transition-all duration-200
             px-2 text-sm md:text-base border rounded-full inline-block mb-2 mr-2"
                                          href={`#${resTree.id}`}>{resTree.title}</a>)}
            </section>
            {sorted.map(resourceTree => (<section key={resourceTree.id} id={resourceTree.id} className="mt-8">
                    <h2 className="font-display text-2xl font-semibold text-gray-800">{resourceTree.title}</h2>
                    <ul className="divide-y divide-gray-300 mt-2">
                        {resourceTree.resources.map(resource => (
                            <li key={resource.id} className="py-3">
                                <a className="group" href={resource.url} target="_blank">
                                    <h2 className="text-base font-medium text-gray-800 group-hover:text-red-600 group-focus:text-red-600">
                                        {resource.name}
                                    </h2>
                                    <p className="text-gray-500 group-hover:text-red-600 group-focus:text-red-600 text-sm">
                                        {resource.description}
                                    </p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}


        </div>
    </>


}

export default Resources