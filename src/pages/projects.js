import './projects.css';
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import backVideo from '../assets/shortened-background-shiny.mp4';
import andyLogo from '../assets/andytorreslogo.png';
import thumbnailImage from '../assets/thumbnail_image.jpg';
import peekImageCD from '../assets/peek_image_cd.png';

import cbsSportsWorldCup from '../assets/cbs-sports-world-cup-final.jpg';
import superBowlLVII from '../assets/super-bowl-lvii-open.jpg';
import chiefsPromo1 from '../assets/chiefs-promo-1.jpg';

import sunsCGI from '../assets/suns-cgi-sfx.jpg';
import fccCGI from '../assets/fccincy-cgi.jpg';
import atlHawks from '../assets/atl-hawks-upside-down.png';

import superBowlLVII2 from '../assets/chiefs-superbowl-lvii-2.jpg';
import sanFran49ers from '../assets/san-fran-49ers.png';
import chicagoBulls from '../assets/chicago-bulls.jpg';

import laClippers from '../assets/la-clippers.jpg';
import sunsCGI2 from '../assets/phoenix-suns-2.jpg';
import dallasMavs from '../assets/dallas-mavs.jpg';

import excelSportsNBA from '../assets/excel-sports-nba.jpg';
import chicagoBullsCoinbase from '../assets/chicago-bulls-coinbase.jpg';
import chiefsPatrickMahomes from '../assets/chiefs-patrick-mahomes.jpg';

import paoloBanchero from '../assets/paolo-banchero.png';
import chicagoBulls2 from '../assets/chicago-bulls-2.jpg';
import goldenStateWarriors from '../assets/golden-state-warriors.png';

import bengals from '../assets/bengals.png';
import koepka from '../assets/koepka-michelob-ultra.png';
import dreamdoll from '../assets/dreamdoll.png';

import mizzou from '../assets/mizzou.png';
import chiefsPatrickMahomes2 from '../assets/chiefs-patrick-mahomes-2.jpg';
import cfpTrophy from '../assets/cfp-trophy.png';

import digideck from '../assets/digideck-sportsdigita.png';
import fiestaBowl from '../assets/fiesta-bowl.png';
import kcsn from '../assets/kcsn.jpg';

import weekendProjVolII from '../assets/weekend-proj-vol-ii.jpg';
import chiefsRunItBack from '../assets/chiefs-run-it-back-tour.jpg';


function Projects() {
  return (
    <div>
      <div className="hero_projects">

        <video autoPlay loop muted playsInline className="back-video">
          <source src={backVideo} type="video/mp4" />
        </video>

        <nav>
          <a href="#" className="navbar-logo">
            <img src={andyLogo} alt="andy torres logo" className="logo" />
          </a>
          <ul className="navbar-links-group">
            <li>
              <Link to="/projects" className="navbar-links">projects</Link>
            </li>
            {/* <li>
              <Link to="/clients" className="navbar-links">clients</Link>
            </li> */}
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
                <a href="https://www.youtube.com/watch?v=oKDpEokr3Bw" className="atag-no-style" target="__blank">
                  <img src={thumbnailImage} alt="Thumbnail" />
                </a>
                <img className="peek-image" src={peekImageCD} alt="Peek CD" />
              </div>
            </div>
          </div>
          <div className="highlight-text">
            <h2 style={{fontFamily: 'Major Mono Display'}}>2023 highlight reel</h2>
            <br></br>
            <p>
              <a href="https://www.youtube.com/watch?v=oKDpEokr3Bw" className="atag-no-style" target="__blank">Watch <i className="fa fa-play-circle"></i> </a>
            </p>

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
            <br></br>
            <p>cover art: <a href="https://www.instagram.com/leahkern/?hl=en" className="atag-no-style" target="__blank">@leahkerndesign</a></p>
            <p>background: <a href="https://www.youtube.com/c/IncrediVFX" className="atag-no-style" target="__blank"> @IncrediVFX</a></p>
          </div>
        </div>

      </div>

      <div className="grid-container">
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.youtube.com/watch?v=pUbxOo3QraE" target="__blank">
              <img src={cbsSportsWorldCup} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">World Cup Final</h3>
                <p className="grid-container-text-subtitle">CBS Sports</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.youtube.com/watch?v=yhNCjhR1dn0" target="__blank">
              <img src={superBowlLVII} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">Super Bowl LVII Open</h3>
                <p className="grid-container-text-subtitle">FANDUEL</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.instagram.com/p/Cn8Y34XjQwu/" target="__blank">
              <img src={chiefsPromo1} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">Chiefs Kingdom</h3>
                <p className="grid-container-text-subtitle">NFL Chiefs</p>
            </div>
        </Fade>
        </div>

        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.instagram.com/p/CrJtn1fOWw-/" target="__blank">
              <img src={sunsCGI} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">Suns CGI/SFX</h3>
                <p className="grid-container-text-subtitle">Phoenix Suns</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.instagram.com/p/CrO4hhsOx19/" target="__blank">
              <img src={fccCGI} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">FCCincy CGI</h3>
                <p className="grid-container-text-subtitle">FC Cincinnati</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.instagram.com/p/CqtL44Cr9xF/" target="__blank">
              <img src={atlHawks} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">The Upside Down</h3>
                <p className="grid-container-text-subtitle">Atlanta Hawks</p>
            </div>
        </Fade>
        </div>

        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.instagram.com/p/CogEBb1DCv1/" target="__blank">
              <img src={superBowlLVII2} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">Chiefs Super Bowl LVII</h3>
                <p className="grid-container-text-subtitle">NFL Chiefs</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://twitter.com/49ers/status/1614306663422656512?s=20" target="__blank">
              <img src={sanFran49ers} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">49ers Playoffs</h3>
                <p className="grid-container-text-subtitle">San Francisco 49ers</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://twitter.com/andytorres_a/status/1590830852610707457?s=20&t=cfp87Ohm0SZKExlL5_eElg" target="__blank">
              <img src={chicagoBulls} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">Bulls Promo</h3>
                <p className="grid-container-text-subtitle">Chicago Bulls</p>
            </div>
        </Fade>
        </div>

        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://twitter.com/andytorres_a/status/1584349239613980672?s=20&t=Bn9N1-6Uuw-QZ6ZZnmPFsA" target="__blank">
              <img src={laClippers} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">GIVE NO QUARTER</h3>
                <p className="grid-container-text-subtitle">LA Clippers</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://twitter.com/andytorres_a/status/1588595801298964480?s=20&t=cfp87Ohm0SZKExlL5_eElg" target="__blank">
              <img src={dallasMavs} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">#MFFL Retroplex</h3>
                <p className="grid-container-text-subtitle">Dallas Mavs</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://twitter.com/andytorres_a/status/1590171966824419328?s=20&t=cfp87Ohm0SZKExlL5_eElg" target="__blank">
              <img src={sunsCGI2} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">Suns 22-23 Intro</h3>
                <p className="grid-container-text-subtitle">Phoenix Suns</p>
            </div>
        </Fade>
        </div>

        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://twitter.com/andytorres_a/status/1573360816581382145?s=20&t=r4AarUZLdN9r9cqgrAmDZg" target="__blank">
              <img src={excelSportsNBA} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">NBA DRAFT COMBINE: The Movie</h3>
                <p className="grid-container-text-subtitle">excel sports x NBA</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://twitter.com/andytorres_a/status/1567910955341828096?s=20&t=QuX6-TIRdrlHBhFL1ie4ag" target="__blank">
              <img src={chicagoBullsCoinbase} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">THE AUROCHS | NFT</h3>
                <p className="grid-container-text-subtitle">Chicago Bulls x Coinbase</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://twitter.com/andytorres_a/status/1568998791835172865?s=20&t=QuX6-TIRdrlHBhFL1ie4ag" target="__blank">
              <img src={chiefsPatrickMahomes} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">Chiefs Season Opener 2022</h3>
                <p className="grid-container-text-subtitle">Patrick Mahomes</p>
            </div>
        </Fade>
        </div>

        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://gondola.cc/posts/214620-paolo5-instagram" target="__blank">
              <img src={paoloBanchero} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">2022 NBA Draft Paolo</h3>
                <p className="grid-container-text-subtitle">Paolo Banchero</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://twitter.com/chicagobulls/status/1517548791636926466?s=20&t=dBFkH-S3LlLuB-P92TucjQ" target="__blank">
              <img src={chicagoBulls2} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">2022 Playoffs Bulls Promo</h3>
                <p className="grid-container-text-subtitle">Chicago Bulls</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://twitter.com/warriors/status/1537910456102289408?s=20&t=Zo9LlV_X-qjFBRF_eUzrDA" target="__blank">
              <img src={goldenStateWarriors} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">2022 NBA Champions</h3>
                <p className="grid-container-text-subtitle">Golden State Warriors</p>
            </div>
        </Fade>
        </div>

        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://twitter.com/Bengals/status/1492876221742419973?s=20&t=-2joXkPi8LIfZxd3W2Z04w" target="__blank">
              <img src={bengals} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">Super Bowl LVI | Bengals</h3>
                <p className="grid-container-text-subtitle">Cincinnati Bengals</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.instagram.com/p/CTQTrUCnZtD/?utm_source=ig_web_copy_link" target="__blank">
              <img src={koepka} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">Koepka Closeup | Michelob Ultra</h3>
                <p className="grid-container-text-subtitle">Brooks Koepka</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.instagram.com/p/Ce31kCiO-a8/?utm_source=ig_web_copy_link" target="__blank">
              <img src={dreamdoll} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">Dreamdoll 3D Visual Piece </h3>
                <p className="grid-container-text-subtitle">DREAMDOLL</p>
            </div>
        </Fade>
        </div>

        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.youtube.com/watch?v=8RjO6gb3kcA" target="__blank">
              <img src={mizzou} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">2021 Mizzou WBB Intro [Editor's Cut]</h3>
                <p className="grid-container-text-subtitle">Mizzou WBB</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://twitter.com/PatrickMahomes/status/1487614632168763395?s=20&t=eHqsiQN9zgazvRvonTOkOA" target="__blank">
              <img src={chiefsPatrickMahomes2} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">Chiefs Promotional Tweet</h3>
                <p className="grid-container-text-subtitle">Patrick Mahomes</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.instagram.com/reel/CYmovF2obm0/?utm_source=ig_web_copy_link" target="__blank">
              <img src={cfpTrophy} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">Trophy Render | OctaneRender, C4D, INSYDIUM</h3>
                <p className="grid-container-text-subtitle">Andy Torres</p>
            </div>
        </Fade>
        </div>

        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.youtube.com/watch?v=BvYyH7qbPxs" target="__blank">
              <img src={digideck} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">DIGIDECK by Sportsdigita</h3>
                <p className="grid-container-text-subtitle">Sportsdigita</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.youtube.com/watch?v=B7rFPA9WXuQ" target="__blank">
              <img src={fiestaBowl} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">Esports: Final Showndown Hype</h3>
                <p className="grid-container-text-subtitle">Fiesta Bowl</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.youtube.com/watch?v=OfmXskkzLWk" target="__blank">
              <img src={kcsn} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">This is KC Sports Network!</h3>
                <p className="grid-container-text-subtitle">KCSN</p>
            </div>
        </Fade>
        </div>

        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.instagram.com/reel/CSGJHHpngYs/?utm_source=ig_web_copy_link" target="__blank">
              <img src={weekendProjVolII} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">Weekend Projects Vol. II</h3>
                <p className="grid-container-text-subtitle">Zenn Nguyen x Andy Torres</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        <Fade triggerOnce>
            <a href="https://www.instagram.com/p/CKIGz5ZJGJD/?utm_source=ig_web_copy_link" target="__blank">
              <img src={chiefsRunItBack} alt="Video Thumbnail" />
            </a>
            <div className="grid-container-text">
                <h3 className="grid-container-text-title">#RunItBackTour Playoff Edition</h3>
                <p className="grid-container-text-subtitle">NFL Chiefs</p>
            </div>
        </Fade>
        </div>
        <div className="grid-item">
        </div>
      </div>


    </div>
  );
}

export default Projects;