import React from "react";
import "./SoftwareSkill.css";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <p className="dev-text">Language:</p>
        <ul className="dev-icons">
          {skillsSection.languages.map((language, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={language.skillName}
              >
                <img src={require(`../../assets/images/skill/${language.image}`).default} alt={language.skillName} width="45" height="45"/>
                <p>{language.skillName}</p>
              </li>
            );
          })}
        </ul>

        <p className="dev-text">Framework/Library:</p>
        <ul className="dev-icons">
          {skillsSection.frameworks.map((framework, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={framework.skillName}
              >
                <img src={require(`../../assets/images/skill/${framework.image}`).default} alt={framework.skillName} width="45" height="45"/>
                <p>{framework.skillName}</p>
              </li>
            );
          })}
        </ul>

        <p className="dev-text">Database:</p>
        <ul className="dev-icons">
          {skillsSection.databases.map((database, i) => {
            if (i == 0) {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={database.skillName}
                >
                  <img src={require(`../../assets/images/skill/${database.image}`).default} alt={database.skillName} width="85" height="35"/>
                  <p>{database.skillName}</p>
                </li>
              );
            }
            else if (i == 1) {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={database.skillName}
                >
                  <img src={require(`../../assets/images/skill/${database.image}`).default} alt={database.skillName} width="75" height="45"/>
                  <p>{database.skillName}</p>
                </li>
              );              
            }
            else if (i == 2) {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={database.skillName}
                >
                  <img src={require(`../../assets/images/skill/${database.image}`).default} alt={database.skillName} width="45" height="45"/>
                  <p>{database.skillName}</p>
                </li>
              );              
            }
            else if (i == 3) {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={database.skillName}
                >
                  <img src={require(`../../assets/images/skill/${database.image}`).default} alt={database.skillName} width="45" height="45"/>
                  <p>{database.skillName}</p>
                </li>
              );              
            }
          })}
        </ul>

        <p className="dev-text">Other:</p>
        <ul className="dev-icons">
          {skillsSection.others.map((other, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={other.skillName}
              >
                <img src={require(`../../assets/images/skill/${other.image}`).default} alt={other.skillName} width="45" height="45"/>
                <p>{other.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
