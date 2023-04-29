import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/color-sharp2.png";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio",
      description: <a className="myan" href="#home">Explore</a>,
      imgUrl: pic2,
    },
    {
      title: "Banking System",
      description: <a className="myan" href="https://rs-banking.netlify.app/">Explore</a>,
      imgUrl: pic1,
    },
    {
      title: "Netflix",
      description: <a className="myan" href="https://rudhram-netflix.netlify.app/">Explore</a>,
      imgUrl: pic3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
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