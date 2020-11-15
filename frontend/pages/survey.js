import {SwitchTransition} from "react-transition-group";
import {CSSTransition} from "react-transition-group";
import {useEffect, useState} from "react";
import fb from "../lib/firebase-config";
import Navbar from "../components/Navbar";
import {resourceTrees} from "../data/resourceTrees";
import {surveyQuestions} from "../data/surveyQuestions";

const Survey = () => {
    const trees = {surveyQuestions: surveyQuestions, resources: resourceTrees}
    const [displayMode, setDisplayMode] = useState("question")
    const [currentItem, setCurrentItem] = useState("INTRO")
    const item = (trees.surveyQuestions && displayMode === "question") ? trees.surveyQuestions[currentItem] : {id: 10}
    const resource = (displayMode === "resource") ? currentItem.map(resource => trees.resources[resource].resources).flat() : null
    const sorted = resource && resource.sort((a, b) => (a.name > b.name) ? 1 : -1)

    const [sequence, setSequence] = useState([])

    function navigateForward(choice) {

        const newSequence = [...sequence, {question: item.question, answer: choice.content}]
        setSequence(newSequence)

        if (choice.segue === "resource") {
            setDisplayMode("resource")
            setCurrentItem(choice.leadsTo)

            fb.firestore().collection('ventureAtBrown').doc('userSequences').collection(process.env.NODE_ENV || 'production').add({
                completedAt: new Date(),
                sequence: newSequence
            })
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
        setSequence([])
    }

    useEffect(() => {
        setTimeout(() => {
            resetSurvey()
        }, 50)
    }, [])

    return (
        <div className="full-height">
            <Navbar isLanding/>
            <SwitchTransition>
                <CSSTransition
                    key={item.id}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    classNames='fade'
                >
                    <div className={`h-full flex ${displayMode === "question" ? "items-center" : "items-start"} px-4`}>
                        {displayMode === "question" ? <div className="w-full mx-auto max-w-7xl text-center">
                            <img src={item && item.bearImage} className="rounded-lg mb-6 h-64 mx-auto"/>
                            <h1 className="text-2xl lg:text-4xl font-bold font-display">
                                {item && item.question}
                            </h1>
                            <div className="lg:space-x-4 space-y-4 lg:space-y-0 mt-6">
                                {item.choices.map(choice => <button
                                    className="text-lg py-1 px-4 font-medium text-gray-800 lg:border border-gray-200 lg:shadow-sm rounded-full
                                transition-all duration-200
                                hover:bg-red-50 hover:text-red-600 hover:border-red-200
                                focus:bg-red-50 focus:text-red-600 focus:border-red-200
                                "
                                    key={choice.content} onClick={() => {
                                    navigateForward(choice)
                                }}>
                                    {choice.content}
                                </button>)}
                            </div>
                        </div> : <div className="w-full mx-auto max-w-4xl text-center mt-24 mb-32 lg:my-32">
                            <div className="text-left mb-2">
                                <button onClick={resetSurvey} className="uppercase red-link">&larr; Start Over</button>
                            </div>
                            <h1 className="text-2xl lg:text-4xl font-bold mb-6 font-display">
                                Based on your answers, these are the resources we think will be most helpful
                            </h1>
                            <ul className="divide-y divide-gray-200 w-full">
                                {sorted.map(item => <li className="flex group justify-start items-center" key={item.name}>
                                        <img src={item.image}
                                             className="w-12 h-12 rounded-lg object-cover border group-hover:border-red-300 group-focus:border-red-300 shadow-sm mr-4 transition-all duration-150"/>
                                        <a className="block py-4 w-full text-left" href={item.url} target="_blank">
                                            <h2 className="lg:text-xl font-semibold text-gray-800 group-hover:text-red-600 group-focus:text-red-600 transition-all duration-150 inline-flex items-center">
                                                {item.name}
                                            </h2>
                                            <p className="text-sm lg:text-lg text-gray-600 group-hover:text-red-500 transition-all duration-200">
                                                {item.description}
                                            </p>
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>}
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )


}

export default Survey