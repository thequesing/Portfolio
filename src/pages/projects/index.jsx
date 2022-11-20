import Topbar from '../../components/Topbar'
import { ProjectsList } from '../../components/config'

function Projects() {
  return (
    <div>
      <Topbar />
      <div id='main'>
        <div id='projects'>
          {ProjectsList.map((ProjectsList) => (
            <div id='project'>
              <img id='project-img' src={ProjectsList.img} alt='Antares' />
              <h1>{ProjectsList.name}</h1>
              <div id='languages'>
                <p>{ProjectsList.languages}</p>
              </div>
              <p id="abandonado">{ProjectsList.abandonado}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Projects
