// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";
export const Footer = () => {
  return (
    <footer className="footer">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rudhram-saraswat-396487209/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/rudhram.saraswat"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/saraswatrudy99/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Created By Rudhram | Copyright &copy; 2022. All Rights Reserved</p>
    </footer>
  )
}