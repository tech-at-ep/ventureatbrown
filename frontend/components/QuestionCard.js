export default function ({item, onNavigateForward, onBack}) {

    return <div className="font-display">
        <p className="text-5xl font-bold text-gray-900">{item.question}</p>
        <div className="mt-4">
            {item.choices.map(choice =><div>
                    <button className="hover:bg-red-100 hover:text-red-800 focus:bg-red-100 p-3 -ml-3 text-gray-800 rounded-lg text-xl block w-full text-left"
                            onClick={() => onNavigateForward(choice)}>{choice.content}</button>
                </div>
                )}
        </div>
        {item.question !== "Pick a starting point 👇" && <button onClick={onBack} className="font-bold text-red-600 mt-8 hover:text-red-500 focus:text-red-500 focus:underline">← Go back</button>}

    </div>
}