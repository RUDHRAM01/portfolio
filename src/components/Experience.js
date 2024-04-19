// import certiBin from "../assets/certiBin.png"
import ExpContainer from "./ExpContainer";
import Bin from "../assets/bin.png"
import Gravitas from "../assets/gravitas.jpg"
import Decurits from "../assets/decurtis.jpg"
import Social from "../assets/socialIcon.webp"

export const Experience = () => {
  const experiences = [
    {
      title: "Gravitas AI",
      description: "Information Technology & Services",
      position: "MEAN Stack Developer",
      tech : ["Angular", "Node", "Express", "Postgres", "AWS", "Serverless", "Sequelize", "TypeScript"],
      favIcon: Gravitas,
      start_date: {
        month: "Feb",
        year: "2024"
      },
      end_date: {
        month: "Current",
      },
      margin : "50px"
    },
    {
      title: "Decurtis Corporation",
      description: "IT Services and IT Consulting",
      position: "Application Engineer",
      tech : ["React", "Node", "Express", "Mongo","Redux"],
      favIcon: Decurits,
      start_date: {
        month: "Aug",
        year: "2023"
      },
      end_date: {
        month: "Oct",
        year: "2023"
      },
      margin : "300px",
      left: true
    },
    {
      title: "SocialVeins",
      description: "Marketing Services",
      position: "Backend Developer",
      tech : ["React", "NextJs", "Node", "Express", "Mongo", "Redux", "MaterialUI", "FramerMotion"],
      favIcon: Social,
      start_date: {
        month: "Jan",
        year: "2023"
      },
      end_date: {
        month: "Apr",
        year: "2023"
      },
      margin : "600px"
    },
    {
      title: "Binjaas",
      description: "Startup | Stipend Based Internship",
      position: "Full Stack Developer",
      tech : ["React", "Node", "Express", "Mongo", "Redux", "MaterialUI"],
      favIcon: Bin,
      start_date: {
        month: "June",
        year: "2022"
      },
      end_date: {
        month: "Aug",
        year: "2022"
      },
      margin : "840px",
      left: true,
      addFilter: true
    },
  ];

  return (
    <section className="project" id="experiences">
        <div className="vertical-line"></div>
        <div className="vertical-dot"></div>
        <div className="vertical-dot v-bottom"></div>
        <h1 className="vertical-ele exp-head">Experiences</h1>
        <div className="exp-containers">
          {experiences.map((exp, index) => (
            <ExpContainer exp={exp} key={index} ind={index}/>
          ))}
        </div>
    </section>
  )
}