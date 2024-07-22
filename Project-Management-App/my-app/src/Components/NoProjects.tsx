import React from 'react'
import './NoProjects.css'
import logo from '../Assets/no-projects.png'

type buttonprops = {
    onClickNewProject: any

}

const NoProjects = ({onClickNewProject}: buttonprops) => {
  return (
    <div className='no-project-container'>
        <img src={logo} alt="" />
        <p>Select a project or get started with a new one</p>

        <button className='create-new-btn' onClick={onClickNewProject}>Create new project</button>
    </div>
  )
}

export default NoProjects