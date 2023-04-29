import meter1 from "../assets/meter1.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/color-sharp.png"

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
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          <div className="item">
                                <img src={meter1} alt="React.js" />
                                <h5>React.js</h5>
                              </div>
                              <div className="item">
                                <img src={meter1} alt="Node.js" />
                                <h5>Node.js</h5>
                              </div>
                              <div className="item">
                                <img src={meter1} alt="Express.js" />
                                <h5>Express.js</h5>
                              </div>
                              <div className="item">
                                <img src={meter1} alt="MongoDb" />
                                <h5>MongoDb</h5>
                              </div>
                              <div className="item">
                                <img src={meter1} alt="SQL" />
                                <h5>SQL</h5>
                              </div>
                              <div className="item">
                                <img src={meter1} alt="i18n" />
                                <h5>i18n</h5>
                              </div>
                              <div className="item">
                                <img src={meter1} alt="Framer Motion" />
                                <h5>Framer Motion</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="HTML" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="CSS" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                              <div className="item">
                                <img src={meter1} alt="Bootstrap" />
                                <h5>Bootstrap</h5>
                            </div>
                              <div className="item">
                                <img src={meter1} alt="WordPress" />
                                <h5>WordPress</h5>
                              </div>
                              <div className="item">
                                <img src={meter1} alt="Git" />
                                <h5>Git</h5>
                           </div>
                            <div className="item">
                                <img src={meter1} alt="GitHub" />
                                <h5>GitHub</h5>
                           </div>
                            <div className="item">
                                <img src={meter1} alt="Machine Learning" />
                                <h5>Machine Learning</h5>
                              </div>
              </Carousel>
              <h2>Languages</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="C" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="C++" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Java" />
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