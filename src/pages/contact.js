import './contact.css';
import { Link } from "react-router-dom";
import andyLogo from '../assets/andytorreslogo.png';
import {Cursor} from '../Cursor.js';

function Contact() {
  return (
    <div>
      <Cursor />
      <div className="hero_contact">
        <nav>
          <a href="#" className="navbar-logo">
            <img src={andyLogo} alt="andy torres logo" className="logo" />
          </a>
          <ul className="navbar-links-group">
            <li>
              <Link to="/projects" className="navbar-links">[PROJECTS]</Link>
            </li>
            <li>
              <Link to="/bio" className="navbar-links">[ABOUT]</Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-links">[CONTACT]</Link>
            </li>
          </ul>
        </nav>


        <div className="email-container">
          <div className="email">
            <p>andytorresmedia@gmail.com</p>
          </div>
        </div>

      </div>

      <div className="footer">
        <a href="https://www.linkedin.com/in/andy-torres-alcorta-5117b6144/" className="social-icons" target="__blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/andytorres_a/" className="social-icons" target="__blank"><i className="fab fa-instagram"></i></a>
        <a href="http://twitter.com/andytorres_a" className="social-icons" target="__blank"><i className="fab fa-twitter"></i></a>
        <a href="https://www.youtube.com/channel/UCwRSqwcodm-ujf8XHt6UC9A" className="social-icons" target="__blank"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  );
}

export default Contact;
