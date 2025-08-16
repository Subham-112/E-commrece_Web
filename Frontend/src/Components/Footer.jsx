import { Link } from "react-router-dom";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="foot-contact">
          <div className="foot-logo">
            <h1 className='foot-h1'>LOGO</h1>
            {/* <img src="/images/logo.png" alt="logo" /> */}
          </div>
          <ul className="contact-list ul">
            <li>
              <i class="fa-solid fa-phone-volume"></i>
              <p>Number</p>
            </li>
            <li>
              <i class="fa-regular fa-envelope"></i>
              <p>Email</p>
            </li>
            <li>
              <i class="fa-solid fa-location-dot"></i>
              <p>Location</p>
            </li>
          </ul>
        </div>
        <div className="foot-links">
          <h1 className='foot-h1'>Quick Links</h1>
          <ul className="ul">
            <Link to="/" className="li">
              <li>Home</li>
            </Link>
            <Link to="/courses" className="li">
              <li>Courses</li>
            </Link>
            <Link to="/characters" className="li">
              <li>Characters</li>
            </Link>
            <Link to="/about" className="li">
              <li>About</li>
            </Link>
            <Link to="/contact" className="li">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="foot-links">
          <h1 className='foot-h1'>About</h1>
          <ul className="ul">
            <Link to="/courses" className="li">
              <li>Courses</li>
            </Link>
            <Link to="/characters" className="li">
              <li>Characters</li>
            </Link>
            <Link to="/about" className="li">
              <li>Backgrouds</li>
            </Link>
          </ul>
        </div>
        <div className="foot-follow">
          <h1 className='foot-h1'>Follow Us</h1>
          <ul className="ul">
            <Link to="/characters" className="li">
              <li>
                <i class="fa-brands fa-youtube"></i>
                <p>You Tube</p>
              </li>
            </Link>
            <Link to="/characters" className="li">
              <li>
                <i class="fa-brands fa-instagram"></i>
                <p>WhatsApp</p>
              </li>
            </Link>
            <Link to="/characters" className="li">
              <li>
                <i class="fa-brands fa-whatsapp"></i>
                <p>WhatsApp</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}
