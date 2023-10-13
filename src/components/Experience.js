import { Container, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import contri1 from "../assets/contri.png"
import contrianand from "../assets/contrianand.png"
import certiBin from "../assets/certiBin.png"
import TrackVisibility from 'react-on-screen';
import img1 from "../assets/socialintern.png"
import img2 from "../assets/school.png"
import { GoPrimitiveDot } from "react-icons/go";

export const Experience = () => {
  const experiences = [
    {
      title: "Socialveins",
      description: "Startup | Stipend Based Internship",
      imgUrl: img1,
    },
    {
      title: "Binjaas",
      description: "Startup | Stipend Based Internship",
      imgUrl: certiBin,
    },
    {
      title: "hemabangles",
      description: "E-commerce Website",
      imgUrl: contri1,
    },
    {
      title: "Anand",
      description: "Grievance Portal",
      imgUrl: contrianand,
    },
    {
      title: "White Wings School",
      description: "School",
      imgUrl: img2,
    },
  ];

  return (
    <section className="project" id="experiences">
      <Container>

        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* Experience */}


                <h2>Experience</h2>
                <p>Here is my experiences.</p>
                <hr />
                <Tab.Container id="projects-tabs" defaultActiveKey="first">

                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div className="internHeading"><span>Internship / Full Stack Developer</span><span>Hybrid Work / <span className="comp"><a href="https://app.socialveins.com/" style={{ textDecoration: 'none' }}>Socialveins</a><GoPrimitiveDot style={{ color: 'red' }} /></span> </span></div>
                      <div className="exper">
                        <div className="experienceCard" id="experienceCar">
                          <ProjectCard
                            {...experiences[0]}
                          />
                         
                            <table className="experienceDetail">
                              <ul>
                                <li>Developed applications (coding).</li>
                                <li>React.js for frontend.</li>
                                <li>Debugging and testing code.</li>
                                <li>Postman for API testing.</li>
                                <li>Node.js & Express.js backend.</li>
                                <li>MongoDb for DataBase.</li>
                              </ul>
                            </table>
                          
                        </div>
                      </div>
                      <hr />
                      <div className="internHeading"><span>Internship / Full Stack Developer</span><span>Remote Work / <span className="comp">Binjaas</span><GoPrimitiveDot style={{ color: 'red' }} /> </span></div>
                      <div className="exper">
                        <div className="experienceCard" id="experienceCar">
                          <ProjectCard
                            {...experiences[1]}
                          />

                          <table className="experienceDetail">
                            <ul>
                              <li>Developed applications (coding).</li>
                              <li>React.js for frontend.</li>
                              <li>Debugging and testing code.</li>
                              <li>Postman for API testing.</li>
                              <li>Node.js & Express.js backend.</li>
                              <li>MongoDb for DataBase.</li>
                            </ul>
                          </table>
                        </div>
                      </div>
                      <hr className="myhr" />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>

                {/* contribution */}
                <h2>Real World Projects</h2>

                <hr />
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div className="internHeading"><span><a href="https://whitewingsjaipur.in/" style={{ textDecoration: 'none' }}> white wings school</a><GoPrimitiveDot style={{ color: 'green' }} /></span></div>
                      <div className="exper">
                        <div className="experienceCard" id="experienceCar">
                          <ProjectCard
                            {...experiences[4]}
                          />

                          <table className="experienceDetail">
                            <ul style={{ textAlign: 'justify' }}>
                              <li>Developed and maintained streamlined, reusable, and reliable code for White Wings Pre‑School.</li>
                              <li>Utilized Express.js to build a robust and scalable backend infrastructure, handling data management, authentication, and other server‑side functionalities.</li>

                            </ul>
                          </table>
                        </div>
                      </div>
                      <hr />
                      <div className="internHeading"><span><a href="https://anandgrievanceportal.onrender.com/#" style={{ textDecoration: 'none' }}>Anand Grievance Portal</a> <GoPrimitiveDot style={{ color: 'green' }} /></span></div>
                      <div className="exper">
                        <div className="experienceCard" id="experienceCar">
                          <ProjectCard
                            {...experiences[3]}
                          />

                          <table className="experienceDetail">
                            <ul style={{ textAlign: 'justify' }}>
                              <li>Enabled direct email forwarding: Implemented a feature that allows grievances submitted automatically forwarded to the respective departments.</li>
                              <li>Utilized AngularJS: Employed the AngularJS framework to build the front‑end of the student grievance registration portal.</li>
                            </ul>
                          </table>
                        </div>
                      </div>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <h2>Contribute</h2>
                  <hr className="myhr" />
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div className="internHeading"><span>Contribute</span><span>Remote Work / <a href="https://hemabangles.com/" style={{ textDecoration: 'none' }}> hemabangles.com</a><GoPrimitiveDot style={{ color: 'green' }} /></span></div>
                      <div className="exper">
                        <div className="experienceCard" id="experienceCar">
                          <ProjectCard
                            {...experiences[2]}
                          />

                          <table className="experienceDetail">
                            <ul>
                              <li>Debugging and testing.</li>
                              <li>WordPress Experience.</li>
                              <li>Developed Pages.</li>
                            </ul>
                          </table>
                        </div>
                      </div>


                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
          </TrackVisibility>
        </Col>

      </Container>
      <hr className="myhr" />
    </section>
  )
}