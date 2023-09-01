import './homepage.css';
import andyLogo from '../assets/andytorreslogo.png';
import testVideo from '../assets/test.mp4';
import {Link} from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <div className="hero">

        <video autoPlay loop muted playsInline className="back-video">
          <source src={testVideo} type="video/mp4" />
        </video>

        <nav>
          <a href="/" className="navbar-logo">
            <img src={andyLogo} alt="andy torres logo" className="logo" />
          </a>
          <ul className="navbar-links-group">
            <li>
              <Link to="/projects" className="navbar-links">projects</Link>
            </li>
            <li>
              <Link to="/bio" className="navbar-links">bio</Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-links">contact</Link>
            </li>
          </ul>
        </nav>


        <div className="content">
          <h1 className="homepage-name">Andy torres</h1>
            <div>
              <button className='homepage-cta-button'>
                <Link to="/projects" className="atag-no-style">
                  2023 reel <i className="fa-solid fa-arrow-right fa-xs"></i>
                </Link>
              </button>
            </div>
        </div>

        <footer className="homepage-footer">
          <p>&copy; {new Date().getFullYear()} Andy Torres</p>
        </footer>

      </div>
    </div>
  );
}

export default Homepage;
