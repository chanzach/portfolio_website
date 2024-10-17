import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
    <main>
        <h2>My Projects</h2>
        <div className="project-grid">
            {/* Map through your projects and display ProjectCards */}
            <ProjectCard title="Architectural Journaling App" description="A responsive app for journaling architectural features." />
            {/* Add more ProjectCards as needed */}
        </div>
    </main>
);

export default Projects;
