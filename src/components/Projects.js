import React, { useState } from 'react'
import skillArray from '../API/skills'
import projects from '../API/projects'
import link from '../images/svg-icons/link-new.svg'

const Projects = () => {
  const [projectIndex, updateProjectIndex] = useState(0)
  const [projectArr, updateProjectArr] = useState(projects)

  function handleChangeProj(e){
    e.preventDefault()
    const newIndex = Number(e.target.value)
    if (projectIndex === newIndex) {
      return
    }
    const projectData = []
    
    projectArr.map((project, i) => {
      if (i === newIndex) {
        project.isActive = 'is-active'
      } else {
        project.isActive = ''
      }
      return projectData.push(project)
    })
    updateProjectArr(projectData)
    updateProjectIndex(newIndex)
  }

  function handleLeftButton(e) {
    
    e.preventDefault()
    let indexValue = null
    if (projectIndex === 0) {
      indexValue = projectArr.length - 1
    } else {
      indexValue = projectIndex - 1
    }
    const projectData = []
    
    projectArr.map((project, i) => {
      if (i === indexValue) {
        project.isActive = 'is-active'
      } else {
        project.isActive = ''
      }
      return projectData.push(project)
    })
    updateProjectArr(projectData)
    updateProjectIndex(indexValue)
  }

  function handleRightButton(e) {
    e.preventDefault()
    let indexValue = null
    if (projectIndex === projectArr.length - 1) {
      indexValue = 0
    } else {
      indexValue = projectIndex + 1
    }
    const projectData = []
    
    projectArr.map((project, i) => {
      if (i === indexValue) {
        project.isActive = 'is-active'
      } else {
        project.isActive = ''
      }
      return projectData.push(project)
    })
    updateProjectArr(projectData)
    updateProjectIndex(indexValue)
  }

  return <section className="section" id="projects">
    <section className="content">
      <div className='buttons'>
        <button className='proj-button' onClick={handleLeftButton}>⁍</button>
        {projectArr.map((proj, i) => {
          return <button value={i} className={`${proj.isActive} proj-button`} onClick={handleChangeProj} key={i}>＊</button>
        })}
        <button className='proj-button' onClick={handleRightButton}>⁌</button>
      </div> 
      <Slides project={ projectArr[projectIndex] } />
    </section>
  </section>
}


const Slides = ({ project }) => {
  const linkObj = { name: 'Link', svg: link }

  if (project.name === undefined || !project.name) {
    return
  } else return <div key={project.name} className="project-box">
    <article className="pt-one">
      <div className="mapped-skills project-skills">
        {project.techs.map((tech, i) => {
          return <div key={i} className="skill-box">
            <div className="name-container proj-name-cont" >
              <p>{tech.name}</p>
            </div>
            <img src={tech.svg} alt={tech.name} />
          </div>
        })}
      </div>
      <div className="proj-img">
        Screenshots
      </div>
    </article>
    <article className="pt-two">
      <div className="proj-text">
        {project.desc}
      </div>
      <div className="proj-nav">
        <a href={project.page} target="_blank" rel="noreferrer" className="page-link">
          <div className="skill-box">
            <div className="name-container" >
            </div>
            <img src={linkObj.svg} alt={linkObj.name} />
          </div>
        </a>
        <a href={project.github} target="_blank" rel="noreferrer" className="page-link">
          <div className="skill-box">
            <div className="name-container" >
            </div>
            <img src={skillArray[3].svg} alt={skillArray[3].name} />
          </div>
        </a>
      </div>
    </article>
  </div>

}

export default Projects