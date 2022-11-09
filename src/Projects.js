import React, { Fragment } from 'react';
import Topbar from './Components/Topbar.js';
import { ProjectsList } from './config';

function Projects() {
  return (
    <React.Fragment>
    <Topbar />
    <div id="main">
    <div id="projects">
    {ProjectsList.map((ProjectsList) => (
    <div id="project">
    <img id="project-img" src={ProjectsList.img} alt="Antares" />
    <h1>{ProjectsList.name}</h1>
    <div id="languages">
    <p>{ProjectsList.languages}</p>
    </div>
    </div>
    ))}
    </div>
    </div>
    </React.Fragment> );
}
export default Projects;