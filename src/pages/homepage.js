import './homepage.css';
import andyLogo from '../assets/andytorreslogo.png';
import andyFullLogoName from '../assets/full-andy-logo-name.png';
import testVideo from '../assets/test.mp4';
import {Link} from 'react-router-dom';
import {Cursor} from '../Cursor.js';
import {ProjectsLinkScrambleText, AboutLinkScrambleText, ContactLinkScrambleText, View2023ReelScrambleText} from '../ScrambleTexts.js';

function Homepage() {


  return (
    <div>
      <Cursor />
      <div className="hero">

        <video autoPlay loop muted playsInline className="back-video">
          <source src={testVideo} type="video/mp4" />
        </video>

        <nav> 
          <a href="#" className="navbar-logo">
            <img src={andyLogo} alt="andy torres logo" className="logo" />
          </a>
          <ul className="navbar-links-group">
            <li>
              <Link to="/projects" className="navbar-links"><ProjectsLinkScrambleText /></Link>
            </li>
            <li>
              <Link to="/bio" className="navbar-links"><AboutLinkScrambleText /></Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-links"><ContactLinkScrambleText /></Link>
            </li>
          </ul>
        </nav>


        <div className="content">
          <img src={andyFullLogoName} alt="andy torres" className="homepage-name" />
            <div>
              <button className='homepage-cta-button'>
                <Link to="/projects" className="atag-no-style">
                  <View2023ReelScrambleText />
                </Link>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
