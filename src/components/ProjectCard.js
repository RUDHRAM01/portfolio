import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <iframe src={github} frameBorder="0" scrolling="0" width="160px" height="30px" title="GitHub Star Button"></iframe>
      </div>
    </Col>
  )
}