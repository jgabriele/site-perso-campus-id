import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="navigation-link">Accueil</Link>
      <Link to="/work" className="navigation-link">Mes projets</Link>
      <Link to="/about" className="navigation-link">À propos</Link>
    </header>
  )
}