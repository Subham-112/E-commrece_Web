import { Link } from "react-router-dom";
import "../Styles/Landing-Page/Footer.css";

export default function Footer({ color }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 1st Container: Logo & Contact Info */}
        <div className="footer-section">
          <h1 className="foot-logo">PRADHAN STUDIO</h1>
          {/* <img src="/logo.png" alt="Logo" className="footer-logo" /> */}
          <span className="foot-contact">
            <p>Email: info@example.com</p>
            <p>Phone: +91 XXXXX XXXXX</p>
          </span>
        </div>

        {/* 2nd Container: Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link
                style={{
                  color: color ? "#ece5ce" : "#333",
                  textDecoration: "none",
                }}
                to="/"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                style={{
                  color: color ? "#ece5ce" : "#333",
                  textDecoration: "none",
                }}
                to="/characters"
              >
                Characters
              </Link>
            </li>
            <li>
              <Link
                style={{
                  color: color ? "#ece5ce" : "#333",
                  textDecoration: "none",
                }}
                to="/about-us"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                style={{
                  color: color ? "#ece5ce" : "#333",
                  textDecoration: "none",
                }}
                to="/contact-us"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* 3rd Container: Social Media Links */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <Link className='social-link'
              style={{
                color: color ? "#ece5ce" : "#333",
                textDecoration: "none",
              }}
              to="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </Link>
            <Link className='social-link'
              style={{
                color: color ? "#ece5ce" : "#333",
                textDecoration: "none",
              }}
              to="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </Link>
            <Link className='social-link'
              style={{
                color: color ? "#ece5ce" : "#333",
                textDecoration: "none",
              }}
              to="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </Link>
            <Link className='social-link'
              style={{
                color: color ? "#ece5ce" : "#333",
                textDecoration: "none",
              }}
              to="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
