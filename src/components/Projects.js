import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project">
                <h3>Pet Adoption</h3>
                <p>A cool web app built with React and Node.js</p>
            </div>
            <div className="Project">
                <h3>Online Ordering System</h3>
                <p>Another exciting project using web technologies.</p>
            </div>
        </section>
    );
}   

export default Projects;