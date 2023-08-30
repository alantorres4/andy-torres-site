import './projects.css';
import { Link } from "react-router-dom";
import neonVideo from '../assets/neonvideo.mp4';
import andyLogo from '../assets/andytorreslogo.png';

import thumbnailImage from '../assets/thumbnail_image.jpg';
import peekImageCD from '../assets/peek_image_cd.png';

function Projects() {
  return (
    <div>
      <div className="hero_projects">

        <video autoPlay loop muted playsInline className="back-video">
          <source src={neonVideo} type="video/mp4" />
        </video>

        <nav>
          <a href="/">
            <img src={andyLogo} alt="andy torres logo" className="logo" />
          </a>
          <ul>
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


        <div className="projects-header">
          <div className="thumbnail-container">
            <div className="thumbnail">
              <div className="thumbnail-inner">
                <img src={thumbnailImage} alt="Thumbnail" />
                <img className="peek-image" src={peekImageCD} alt="Peek CD" />
              </div>
            </div>
          </div>
          <div className="highlight-text">
            <h2 style={{fontFamily: 'Major Mono Display'}}>2023 highlight reel</h2>
            <br></br>
            <p>It's officially been 1 year since I decided to start my own business. 
              Balancing freelance work and life has been a learning experience but I wouldn't 
              change any of it. I've learned a lot these last 365 days - from business development 
              and investments to collaboration and taking dedicated time to celebrate</p>
            <br></br>
            <p>I want to give a big thank you to every single client for your support, trust and 
              opportunities to work on exciting projects. Thank you to everyone in my network for 
              your support, referrals and wisdom.</p>
            <br></br>
            <p>My favorite part of this journey has been the huge increase in connections with 
              other artists. I'm excited to continue collaborating with even more this next 
              year - let's connect!</p>
            <br></br>
            <p>cover art: @leahkerndesign</p>
          </div>
        </div>



        <footer className="homepage-footer">
          <p>&copy; {new Date().getFullYear()} Andy Torres</p>
        </footer>
      </div>

      <div className="video_gallery">
        <h2>Hello</h2>
        <img src={andyLogo} alt="andy torres logo" className="logo" />
        <img src={andyLogo} alt="andy torres logo" className="logo" />
        <img src={andyLogo} alt="andy torres logo" className="logo" />
      </div>
    </div>
  );
}

export default Projects;
