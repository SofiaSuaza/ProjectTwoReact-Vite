import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <div className="nav-container">
        {/* Logo/Brand */}
        <Link to="/" className="nav-brand">
          <span>Vite</span>
          <span style={{ color: '#535bf2' }}>Learn</span>
        </Link>
        
        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
        </div>
      </div>
    </nav>
  )
}

export default Menu