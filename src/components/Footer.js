// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";
import github from "../assets/github.svg"
import meR from "../assets/meR.jpeg"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icon">
        <a href="https://www.linkedin.com/in/rudhram-saraswat-396487209/"><img src={navIcon1} alt="Icon" /></a>
        <a href="https://github.com/RUDHRAM01"><img src={github} alt="Icon" /></a>
        <span className="footerImg" style={{padding:"4px",marginRight: "4px"}}><img src={meR} style={{ height: '45px', width: "45px", border: "2px solid white", borderRadius: "50%", padding: "4px" }} alt="Icon" /></span>
        <a href="https://www.instagram.com/saraswatrudy99/"><img src={navIcon3} alt="Icon" /></a>
        <a href="https://www.facebook.com/rudhram.saraswat"><img src={navIcon2} alt="Icon" /></a>
      </div>
      <p>Created By Rudhram | Copyright &copy; 2022. All Rights Reserved</p>
    </footer>
  )
}