import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
        year: 2024,
        title: 'Web Developer Student',
        duration: '6 months',
        details: 'I worked as a web developer for a company called XYZ. I was responsible for the front-end and back-end development of the company\'s website. I also worked on the company\'s mobile app.'
    },
    {
        year: 2023,
        title: 'Barista',
        duration: '2023 - Present',
        details: 'I worked as a web developer for a company called XYZ. I was responsible for the front-end and back-end development of the company\'s website. I also worked on the companys mobile app.'
    },
    {
        year: 2023,
        title: 'Line Cook',
        duration: '6 months',
        details: 'I worked as a web developer for a company called XYZ. I was responsible for the front-end and back-end development of the company\'s website. I also worked on the companys mobile app.'
    },
    {
        year: 2022,
        title: 'Chef de Partie',
        duration: '1.5 years',
        details: 'I worked as a web developer for a company called XYZ. I was responsible for the front-end and back-end development of the company\'s website. I also worked on the companys mobile app.'
    },
];

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-gray-800'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details} 
                />
            ))}
        </div>
    );
};

export default Work;