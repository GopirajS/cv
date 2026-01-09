import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            title: "Software Developer",
            year: "November 2024 – Present",
            company: "elitoinnovations",
            type: "Fulltime",
            description: "Building and maintaining full-stack web applications. Handling frontend and backend development, managing databases, improving performance, and ensuring a smooth and user-friendly experience."
        },
        {
            title: "Software Engineer",
            year: "April 2022 - September 2024",
            company: "tealorca",
            type: "Fulltime",
            description: "Designed and developed reliable web applications. Worked on user interfaces, server-side logic, authentication features, and collaborated with team members to deliver stable and responsive products."
        },
        {
            title: "Freelane",
            year: "May 2021 - August 2022",
            company: "i8n Solution",
            type: "Part-Time",
            description: "Started my career as a freelancer, working with clients to build web applications, learn real-world project handling, and deliver reliable solutions."
        }
        
    ];


    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="relative">
                        {/* Central vertical line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-softGray h-full"></div>

                        {experiences.map((exp, index) => (
                            <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                {/* Content container */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8 md:pr-16' : 'pl-8 md:pl-16'} relative`}>
                                    <div className="bg-white p-6 rounded-lg shadow-md border border-softGray">
                                        <h4 className="font-bold text-lg mb-2 text-black">{exp.title}</h4>
                                        <p className="text-sm text-gray-600 mb-2">{exp.year}</p>
                                        <p className="text-base font-semibold text-black mb-1">{exp.company}</p>
                                        <p className="text-sm text-gray-500 mb-3">{exp.type}</p>
                                        <p className="leading-relaxed text-base">{exp.description}</p>
                                    </div>
                                </div>

                                {/* Timeline circle */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md z-10"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;