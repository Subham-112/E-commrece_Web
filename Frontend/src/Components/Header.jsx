import { Link } from "react-router-dom";
import "../Styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="head-logo">
        <Link to="/" className="home">
          <span>PRADHAN STUDIO</span>
        </Link>
      </div>

      <div className="head-nav">
        <ul className="fs-4 gap-5">
          <Link to='/' style={{textDecoration: 'none'}}>
            <li>Home</li>
          </Link>
          <Link to='/courses' style={{textDecoration: 'none'}}>
            <li>Courses</li>
          </Link>
          <Link to='/characters' style={{textDecoration: 'none'}}>
            <li>Characters</li>
          </Link>
          <Link to='/about' style={{textDecoration: 'none'}}>
            <li>About</li>
          </Link>
          <Link to='/contact-us' style={{textDecoration: 'none'}}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
