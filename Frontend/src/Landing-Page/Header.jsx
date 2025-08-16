import { Link } from "react-router-dom";
import '../Styles/Landing-Page/Header.css'
import { useState } from "react";
export default function Header({ themeBtn, color }) {
  return (
    <div className='land-head'>
      <div className="land-logo">
        <h1 className={color ? 'logo-wh' : 'logo-bl'}>PRADHAN STUDIO</h1>
      </div>
      <div className="land-route">
        <ul>
          <Link to='/courses' className={`link ${color ? 'link-wh' : 'link-bl'}`}>
            <li>Courses</li>
          </Link>
          <Link to='/characters' className={`link ${color ? 'link-wh' : 'link-bl'}`}>
            <li>Characters</li>
          </Link>
          <Link to='/about' className={`link ${color ? 'link-wh' : 'link-bl'}`}>
            <li>About Us</li>
          </Link>
          <Link to='/contact-us' className={`link ${color ? 'link-wh' : 'link-bl'}`}>
            <li>Contact Us</li>
          </Link>
        </ul>
        <span className="theme" onClick={() => themeBtn()}>{!color ? '🌞' : '🌙'}</span>
      </div>
      <div className="log-sin">
        <Link className="login link">
            <span>Login</span>
        </Link>
        <Link className="sign link">
            <span>Signup</span>
        </Link>
      </div>
    </div>
  );
}
