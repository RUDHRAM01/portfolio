import React from "react";
import AWS from "../assets/aws.png";
import ReactIcon from "../assets/react.png";
import NodeIcon from "../assets/node.png";
import ExpressIcon from "../assets/exp.png";
import MongoIcon from "../assets/mongo.png";
import AngularIcon from "../assets/angular.jpg";
import PostgresIcon from "../assets/postgre.jpg";
import ServerlessIcon from "../assets/serverless.jpg";
import SequelizeIcon from "../assets/sequlize.jpg";
import TypeScriptIcon from "../assets/typescript.jpg";
import NextJsIcon from "../assets/nextjs.jpg";
import ReduxIcon from "../assets/redux.jpg";
import MaterialUIIcon from "../assets/mui.jpg";
import FramerMotionIcon from "../assets/framer.png";
import BootstrapIcon from "../assets/boot.png";

const ObjMapping = {
    AWS: AWS,
    React: ReactIcon,
    Node: NodeIcon,
    Express: ExpressIcon,
    Mongo: MongoIcon,
    Angular: AngularIcon,
    Postgres: PostgresIcon,
    Serverless: ServerlessIcon,
    Sequelize: SequelizeIcon,
    TypeScript: TypeScriptIcon,
    NextJs: NextJsIcon,
    Redux: ReduxIcon,
    MaterialUI: MaterialUIIcon,
    FramerMotion: FramerMotionIcon,
    Bootstrap: BootstrapIcon,
};


export default function ExpContainer({ exp,ind }) {
    console.log(ind)
  return (
    <div className="exp-cont" style={{marginTop : exp.margin, left: exp.left && "0%"}}>
      <div className="child-1" style={{justifyContent: exp.left && 'flex-end'}}>
        {!exp.left && <div className="exp-dash-line"></div>}
        <img className={`exp-comp-img ${exp.addFilter && 'add-img-filter'}`} src={exp.favIcon} alt=""/>
        {exp.left && <div className="exp-dash-line"></div>}
      </div>
      <div className="exp-data">
        <h4 className="exp-title">{exp.title}</h4>
        <p className="exp-des">{exp.description}</p>
        <div className="exp-duration">
          <p className="exp-start">
            {exp.start_date.month} {exp.start_date.year}
          </p>
          -
          <p className="exp-end">
            {exp.end_date.month} {exp.end_date.year}
          </p>
        </div>
        <div className="exp-position">
          <p>{exp.position}</p>
          <div className="exp-tech">
            {exp.tech.map((tech) => (
                <img
                className="tech-icon"
                src={ObjMapping[tech]}
                alt={tech}
                key={tech}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
