const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-text">
          © Todos los derechos reservados        -        Sofía Suaza.
        </p>
        <hr className="footer-divider" />
        <p className="footer-text">
          <span className="footer-year">{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer