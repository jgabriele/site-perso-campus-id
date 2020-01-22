import React from 'react'
import projects from './projects.json'
import Project from './Project'

import './style.css'

export default function WorkPage() {
  const [inputValue, setInputValue] = React.useState('')

  function onInputChange(e) {
    setInputValue(e.target.value)
  }

  var projectComponents = []

  for(var i=0; i< projects.length; i++) {
    var currentProject = projects[i]

    if (currentProject.name.toLowerCase().includes(inputValue.toLowerCase())) {  
      projectComponents.push(
        <Project
          name={currentProject.name}
          technologies={currentProject.technologies}
          description={currentProject.description}
        />
        )
    }
  }

  return (
    <div>
      <input
        className="input-text"
        type="text"
        placeholder="Rechercher un projet"
        value={inputValue}
        onChange={onInputChange}
      />
      {projectComponents}
    </div>
  )
}