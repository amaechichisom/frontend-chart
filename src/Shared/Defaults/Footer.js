import React from 'react';


function Footer() {
    let userRoles = [
        {
            text: "Why Us",
            link: "#why"
        }, {
            text: "How it works",
            link: "#how"
        }, {
            text: "Features",
            link: "#features"
        }
    ];

    const links = []
    for (const [key,
        value] of userRoles.entries()) {
        links.push(
            <li key={key} className="mt-2">
                <a href={value.link}>{value.text}</a>
            </li>
        )
    }

    const services = ["Brand Tracking", "User Sentiments", "Dashboard Review", "Machine Learning"];
    const reachUs = ["hello@pisocial.com", "08143496579", "No 11 Davies Street Abule -oja, Lagos."];

    return (
        <footer className="bg-footer-dark text-xs text-white py-3 pb-0 w-full border-t">
            <div
                className="sm:flex sm:flex-col pl-8 sm:justify-around sm:items-around md:grid md:grid-cols-2 md:gap-6 md:pl-8 md:px-4 lg:flex lg:flex-row lg:justify-around lg:items-start lg:px-1 mt-4 py-4 ">

                <div className="flex flex-col items-start pl-6 pb-6 md:pl-1  md:pb-1">
                    <h1 className="text-lg text-white font-logo">Pisocial</h1>
                    <p className="mt-2">Pisocial gives you the edge your business needs to know your market</p>
                    
                </div>

                <div className="flex flex-col items-start pl-6 pb-6 md:pl-1  md:pb-1">
                    <h1 className="text-lg text-white font-bold">Quicklinks</h1>
                    <ul>
                        {links}
                    </ul>
                </div>

                <div className="flex flex-col items-start pl-6 pb-6 md:pl-1  md:pb-1">
                    <h1 className="text-lg text-white font-bold">Services</h1>
                    <ul>
                        {services.map(faq => (
                            <li key={faq} className="mt-2">
                                {faq}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-start pl-6 pb-6 md:pl-1  md:pb-1">
                    <h1 className="text-lg text-white font-bold">Find Us</h1>
                    <ul>
                        {reachUs.map(solution => (
                            <li key={solution} className="mt-2">
                                {solution}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            <div className=" bg-footer-dark w-5/5 text-center p-2 mt-4">&copy; Copyright 2021</div>

        </footer>
    )
}

export default Footer