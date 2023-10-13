import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/color-sharp.png"
import ReactIcon from "../assets/react.png"
import NodeIcon from "../assets/node.png"
import ExpressIcon from "../assets/exp.png"
import MongoIcon from "../assets/mongo.png"
import SqlIcon from "../assets/sql.png"
import FramerIcon from "../assets/framer.png"
import HtmlIcon from "../assets/html.png"
import CssIcon from "../assets/css.png"
import JavascrIcon from "../assets/javascr.png"
import Boot from "../assets/boot.png"
import Git from "../assets/git.png"
import GitHub from "../assets/github.png"
import Ml from "../assets/mac.png"
import C from "../assets/C.png"
import Cl from "../assets/c++.png"
import Python from "../assets/python.png"
import Java from "../assets/java.png"
import AWS from "../assets/aws.png"
import CICD from "../assets/cicd.png"
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        
            <div className="row">

                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" autoPlay autoPlaySpeed={1000}>
              <div className="item">
                                <img src={AWS} alt="Machine Learning" />
                                <h5>AWS</h5>
                              </div>
                          <div className="item">
                                <img src={ReactIcon} alt="React.js" />
                                <h5>React.js</h5>
                              </div>
                              <div className="item">
                                <img src={NodeIcon} alt="Node.js" />
                                <h5>Node.js</h5>
                              </div>
                              <div className="item">
                                <img src={ExpressIcon} alt="Express.js" />
                                <h5>Express.js</h5>
                              </div>
                              <div className="item">
                                <img src={MongoIcon} alt="MongoDb" />
                                <h5>MongoDb</h5>
                              </div>
                              <div className="item">
                                <img src={SqlIcon} alt="SQL" />
                                <h5>SQL</h5>
                              </div>
                             
                              <div className="item">
                                <img src={FramerIcon} alt="Framer Motion" />
                                <h5>Framer Motion</h5>
                            </div>
                            <div className="item">
                                <img src={HtmlIcon} alt="HTML" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={CssIcon} alt="CSS" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={JavascrIcon} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                              <div className="item">
                                <img src={Boot} alt="Bootstrap" />
                                <h5>Bootstrap</h5>
                            </div>
                            
                              <div className="item">
                                <img src={Git} alt="Git" />
                                <h5>Git</h5>
                           </div>
                            <div className="item">
                                <img src={GitHub} alt="GitHub" />
                                <h5>GitHub</h5>
                </div>
                <div className="item">
                                <img src={CICD} alt="Machine Learning" />
                                <h5>CI & CD</h5>
                              </div>
                            <div className="item">
                                <img src={Ml} alt="Machine Learning" />
                                <h5>Machine Learning</h5>
                </div>
                
              </Carousel>
              <h2>Languages</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" autoPlay autoPlaySpeed={1000}>
                            <div className="item">
                                <img src={C} alt="C" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={Cl} alt="C++" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={Python} alt="Python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={Java} alt="Java" />
                                <h5>Java</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}