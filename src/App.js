import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('https://portfolio-backend-ydsk.onrender.com')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the projects!", error);
            });
    }, []);

    return (
        <div>
            <h1>My Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <a href={project.github_url}>GitHub</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
