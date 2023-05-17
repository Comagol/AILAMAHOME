import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="socialLinks">
        <a href="https://www.instagram.com/ailama_home/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://api.whatsapp.com/send?phone=" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
      <p className="copyrigth">&copy; 2023 Aila Home. Todos los derechos reservados.</p>
      <a className="logoLink" href="/">
        <img src="/logo_transparent.png" alt="Logo" className="logoFooter" />
      </a>
    </div>
  );
}

export default Footer;