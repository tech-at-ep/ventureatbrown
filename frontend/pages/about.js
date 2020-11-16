import Head from "next/head";
import Navbar from "../components/Navbar";

const team = [{
    name: "Nathan Luu",
    role: "Frontend/Backend Developer",
    image: "https://images.unsplash.com/photo-1604599339387-51694a05fb91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
    linkedIn: "https://www.linkedin.com/in/nathan-benavides-luu-18a51b68/",
    github: "https://github.com/nthnluu",
    website: "https://nthnluu.com"
}, {
    name: "Jasper Chen",
    role: "Frontend Designer/Developer",
    image: "https://ventureatbrown.com/bears/smiling_red_bear.svg",
    linkedIn: "https://www.linkedin.com/in/jasper-chen-1b8b98197",
    github: "https://github.com/Jasch3n",
    website: "https://jasch3n.github.io/mySite"
}, {
    name: "Abby Powell",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1604550930068-e6723f4ab2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
    linkedIn: "https://www.linkedin.com/in/abigail-powell-75705b173",
    github: "https://github.com/abigail-powell",
    website: "https://nthnluu.com"
}, {
    name: "Aaron Wang",
    role: "Project Manager",
    image: "https://ventureatbrown.com/bears/experienced_green.svg",
    linkedIn: "https://linkedin.com/in/aaronjwang",
    github: "https://github.com/aaronwangj",
    website: "https://aaronjwang.com"
}]

const About = () => {
    const buttonStyle = "text-gray-400 hover:text-gray-300 focus:text-gray-200 transition-all duration-200"
    return <>
        <Head>
            <title>About | Venture@Brown</title>
        </Head>
        <div className="max-w-3xl mx-auto px-4 my-24">
            <Navbar/>
            <h1 className="text-5xl font-bold text-gray-900 font-display">About</h1>
            <section>
                <p className="text-xl text-gray-400 my-4">
                    Venture At Brown was created by the Brown EP Tech Team to share the spirit of entrepreneurship by helping Brown and RISD students navigate the entrepreneurial
                    resources on College Hill.
                </p>
                <a className="red-link text-xl" href="https://www.brownentrepreneurship.com/">Learn more about Brown EP &rarr;</a>
            </section>
            <section className="mt-16">
                <h2 className="font-display text-2xl font-semibold mb-4 text-gray-800">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {team.map((person, index) => <div className="font-medium leading-tight" key={index}>
                        <img className="h-56 w-full object-cover rounded-lg shadow-sm"
                               alt=""
                               src={person.image}/>
                        <h3 className="text-xl font-semibold text-gray-700 mt-4">{person.name}</h3>
                        <h4 className="text-lg text-gray-400">{person.role}</h4>
                        <div className="flex justify-start items-center space-x-4 mt-2 text-xl">
                            <a className={buttonStyle} href={person.linkedIn} target="_blank">
                                <i className="fab fa-linkedin"/>
                            </a>

                            <a className={buttonStyle} href={person.github} target="_blank">
                                <i className="fab fa-github"/>
                            </a>

                            <a className={buttonStyle} href={person.website} target="_blank">
                                <i className="fas fa-globe-americas"/>
                            </a>
                        </div>
                    </div>)}

                </div>
            </section>
            <div className="font-display text-gray-400 my-3">Graphics and illustrations by <a className="red-link" href="https://www.janicekhang.com/">Janice Khang</a></div>
        </div>
    </>
}

export default About
