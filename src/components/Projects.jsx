import React from "react";
import ProjectItem from "./ProjectItem";
import kittenImg from '../assets/kitten.jpg';
import memeImg from '../assets/spiderman.jpg';
import slotImg from '../assets/slotmachine.jpg';
import weatherImg from '../assets/storm.jpg';

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p4 py-16'>
            <h1 className='text-4xl font-bold text-center text-gray-500'>Projects</h1>
            <p className='text-center py-8'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia minima dolorum a sit, aliquid laborum eveniet neque aspernatur nesciunt et, ad ab quidem nam nostrum amet eius itaque dolore hic!
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={kittenImg} title='Pet Adoption App' link='https://purrmanenthomes.onrender.com/' />
                <ProjectItem img={memeImg} title='MemeBook' link='https://memebook-b4159625151b.herokuapp.com/login' />
                <ProjectItem img={slotImg} title='Food Picker 3000' link='https://soliske.github.io/Food-Picker-3k/' />
                <ProjectItem img={weatherImg} title='Weather App' link='https://github.com/dakotawentz/git-github.com-dakotawentz-Another-Weather-App' />
            </div>
        </div>
    );
}

export default Projects;