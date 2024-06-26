import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/color-sharp2.png";
import pic1 from "../assets/pic1.png";
// import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import pic4 from "../assets/finance.png"
import pic5 from "../assets/chat.png"
import pic6 from "../assets/pizza.png"
import ChatApp from "../assets/chatapp.png"
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Real Time Chatting Application",
      description: <a className="myan" href="https://chat-app-rs.netlify.app/">Explore</a>,
      imgUrl: ChatApp,
      github: "https://ghbtns.com/github-btn.html?user=RUDHRAM01&repo=web-socket-server&type=star&count=true&size=large"
    },
    {
      title: "Finance Tracker",
      description: <a className="myan" href="https://finance-tracker-8h7t.onrender.com/">Explore</a>,
      imgUrl: pic4,
      github: "https://ghbtns.com/github-btn.html?user=RUDHRAM01&repo=finance-tracker&type=star&count=true&size=large"
    },
    {
      title: "Chat Bot",
      description: <a className="myan" href="https://github.com/RUDHRAM01/chat-bot">Explore</a>,
      imgUrl: pic5,
      github: "https://ghbtns.com/github-btn.html?user=RUDHRAM01&repo=chat-bot&type=star&count=true&size=large"
    },
    {
      title: "Pizza Store",
      description: <a className="myan" href="https://github.com/RUDHRAM01/pizzastore-client">Explore</a>,
      imgUrl: pic6,
      github: "https://ghbtns.com/github-btn.html?user=RUDHRAM01&repo=pizzastore-client&type=star&count=true&size=large"
    },
    {
      title: "Banking System",
      description: <a className="myan" href="https://rs-banking.netlify.app/">Explore</a>,
      imgUrl: pic1,
      github: "https://ghbtns.com/github-btn.html?user=RUDHRAM01&repo=rs-banking&type=star&count=true&size=large"
    },
    {
      title: "Netflix",
      description: <a className="myan" href="https://netflix-private.vercel.app/">Explore</a>,
      imgUrl: pic3,
      github: "https://ghbtns.com/github-btn.html?user=RUDHRAM01&repo=netflix-private&type=star&count=true&size=large"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container style={{backgroundColor : "black",borderRadius : "64px"}}>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here is my projects that I've done.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
      <div className="expdiv"><a href="https://github.com/RUDHRAM01"><button className='myexplore'>Explore more</button></a></div>


    </section>
  )
}