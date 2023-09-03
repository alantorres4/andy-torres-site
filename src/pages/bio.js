import './bio.css';
import { Link } from "react-router-dom";
import andyLogo from '../assets/andytorreslogo.png';

function Bio() {
  return (
    <div>
      <div className="hero_bio">
        <nav>
          <a href="/" className="navbar-logo">
            <img src={andyLogo} alt="andy torres logo" className="logo" />
          </a>
          <ul className="navbar-links-group">
            <li>
              <Link to="/projects" className="navbar-links">projects</Link>
            </li>
            <li>
              <Link to="/clients" className="navbar-links">clients</Link>
            </li>
            <li>
              <Link to="/bio" className="navbar-links">bio</Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-links">contact</Link>
            </li>
          </ul>
        </nav>


        <div className="bio-container">
          <div className="bio">
            <p>Andy is a 3D artist specializing in crafting large-scale environments; cities, iconic stadiums, and awe-inspiring landscapes. He has collaborated with high-profile clients in the sports industry, including the NFL and NBA, as well as working alongside renowned sports celebrities. Andy frequently teams up with content creators to bring their projects to life through the magic of 3D artistry</p>
            <br></br>
            <br></br>
            <p>&#x1F4CD;new york, usa</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Bio;
