import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import meR from "../assets/meR.jpeg"
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Chat from "./Chat";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;



  useEffect(() => {
    const toRotate = ["Full Stack", "Competitive Programming", "Data Science"];
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    }
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta, isDeleting, loopNum, text.length])



  return (
    <section className="banner" id="home">
      <Chat />
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>Hi! My Name is Rudhram Saraswat</h1>
                  <h1>{`I'm into `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack", "Competitive Programming", "Data Science" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Third-Year Undergraduate Student at Anand International College of Engineering ,Jaipur.</p>
                  <a href="#connect" style={{ textDecoration: 'none' }}><button >Let’s Connect <ArrowRightCircle size={25} /></button></a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              <div className="myimgDiv">
                <img className='myImg' src={meR} alt="Header Img" />
                <a href="https://github.com/RUDHRAM01/resume/blob/main/RUDHRAM%20Resume.pdf.pdf" style={{ textDecoration: "none" }} download>

                  <button className="resumeBtn">
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">Resume</span>
                  </button>
                </a>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  )
}