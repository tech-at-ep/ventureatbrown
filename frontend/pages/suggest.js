import Head from "next/head";
import Navbar from "../components/Navbar";
import fb from "../lib/firebase-config";
import {useState} from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

const Suggest = () => {

    const categories = ['Academics 📚',  'Conferences and Trips ✈️', 'Early Idea Competitions 💡', 'Early Stage Accelerators and Support 👟', 'Large Grants 🤑', 'Small Grants 💸', 'Startup Internships 💻', 'Student Groups 👩‍🎓', 'Student VC Fellowships 💰', 'Student VCs 💵', 'VC\'s 💵']
    const inputStyle = "p-4 text-lg md:text-xl border rounded-lg focus:outline-none w-full polyfill-button"

    const [isLoading, toggleLoading] = useState(false)
    const [submitted, toggleSubmitted] = useState(false)
    const [capcha, toggleCapcha] = useState(false)

    function submitSuggestion(event)  {
        if (capcha) {
            event.preventDefault()
            toggleLoading(true)

            fb.firestore().collection('ventureAtBrown').doc('suggestions').collection(process.env.NODE_ENV).add({
                createdAt: new Date(),
                name: event.target.name.value,
                url: event.target.url.value,
                category: event.target.category.value,
                description: event.target.desc.value
            })
                .then(() => toggleSubmitted(true))
                .catch(() => toggleLoading(false))
        }
    }

    return <>
        <Head>
            <title>Suggest a resouce | Venture@Brown</title>
        </Head>
        <div className="max-w-3xl mx-auto px-4 my-24">
            <Navbar/>
            <h1 className="text-5xl font-bold text-gray-900 font-display leading-tight">Suggest a resource</h1>

            {submitted ? <section>
                <section className="my-4">
                    <h2 className="font-display text-2xl font-semibold mb-4 text-gray-800">Resource submitted successfully!</h2>
                    <p className="text-xl text-gray-400">
                        We'll take a look at your submission as soon as possible. Thanks again ✌️
                    </p>
                    <Link href="/resources">
                        <a className="red-link mt-8 text-xl block">
                            &larr; Back to resources
                        </a>
                    </Link>

                </section>

            </section> : <>
                <section className="my-4">
                    <p className="text-xl text-gray-400">
                        Thanks for taking time to help extend our resource listings! Once you submit this form, we'll review your suggestion as soon as possible.
                    </p>
                </section>
            <form className="w-full pt-4 space-y-4" onSubmit={submitSuggestion}>
                <input placeholder="Name" id="name" className={inputStyle} required/>
                <input placeholder="URL"  id="url" className={inputStyle} required/>
                <select id="category" className={inputStyle} required>
                    {categories.map((category) => <option key={category} value={category}>{category}</option>)}
                </select>
                <textarea  id="desc" placeholder="Description" className={inputStyle} required/>
                <ReCAPTCHA
                    sitekey="6LeXKuAZAAAAAOX7TJcFaKuBy0ipIHsRlpmTagMZ"
                    onChange={() => toggleCapcha(true)}
                />
                <button type="submit" disabled={isLoading || !capcha}
                        className="px-6 float-right py-3 text-white bg-red-600 font-semibold rounded-lg hover:bg-red-500 focus:bg-red-500 transition-all duration-200">
                    {isLoading && <i className="fas fa-circle-notch mr-2 fa-spin"/>}Submit
                </button>
            </form>
            </>}


        </div>
    </>


}

export default Suggest