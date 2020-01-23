import React from 'react'

import './style.css'

export default function Project(props) {
  const { name, technologies, description} = props
  const technoComponents = technologies.map(techno => <li key={techno}>{techno}</li>)

  return (
    <div className="project">
      <div>{name}</div>
      <ul>{technoComponents}</ul>
      <p>{description}</p>
    </div>
  )
}