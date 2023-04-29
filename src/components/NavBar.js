import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { VscGithubAlt } from 'react-icons/vsc';
import { RiLinkedinLine } from 'react-icons/ri';
import {IoLogoInstagram} from 'react-icons/io';
import {
  BrowserRouter as Router
} from "react-router-dom";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }



  return (
    <Router>
      <Navbar id="mainnav" expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
              <div><Nav.Link>Rudhram Saraswat</Nav.Link></div>
              <div style={{display:'flex', gap:'10px'}}>
                <a href="https://github.com/RUDHRAM01"><VscGithubAlt /></a>
                <a href="https://www.linkedin.com/in/rudhram-saraswat-396487209/"><RiLinkedinLine /></a>
                <a href="https://www.instagram.com/saraswatrudy99/"><IoLogoInstagram /></a>
              </div>
          </div>
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#experiences" className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experiences')}>Experiences</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}