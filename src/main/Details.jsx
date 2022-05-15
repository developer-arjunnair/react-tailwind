import { Suspense, useEffect, useState } from "react";
import RolesAndResponsibilities from "./RolesAndResponsibilites";
import SkillText from "./SkillText";

const Details = ({ currentCompany, loaded }) => {
  const experience = [
    {
      skills: [
        "javascript",
        "reactjs",
        "redux",
        "cypress",
        "jest",
        "php",
        "php-unit",
        "java",
        "spring-boot",
        "junit",
        "docker",
        "k8s",
        "mssql",
        "postgresql",
      ],
      duties: [
        "Designing systems and writing RFCs for 😎 new features",
        "Building those ⬆️",
        "Helping with moving out of Mono to a decoupled world",
        "Helping internal and external stakeholder with QnAs",
        "Helping new team with onboarding 🤝",
        "📜 Documenting processes and repetitive tasks",
        "🚨 Keeping stakeholder updated on progress",
        "Managing and triage KTLO tasks",
      ],
      lazyLoad: false,
    },
    {
      skills: [
        "javascript",
        "reactjs",
        "mobx",
        "jest",
        "java",
        "spring-boot",
        "junit",
        "mysql",
      ],
      duties: [
        "👷🏽‍♂️ Building BFF for an bidding app",
        " 🛠 Optimizing and improving the system",
        " ⨮ Adding new features to the system",
        "Reviweing PRs ensuring code quality and test coverage",
        "👨‍💻 Monitoring and improving the sytem's performance",
      ],
      lazyLoad: true,
    },
    {
      skills: [
        "sap",
        "sap-portal",
        "sap-ui5",
        "javascript",
        "abap",
        "sap-mdm",
        "webdynpro-java",
        "sap-pi",
        "team management",
      ],
      duties: [
        " 🛠 Customizing the SAP products to tailor customers needs",
        "Leading a team of 5 developers, 2 onshore and 3 offshore",
        "Working with the customer to understand their needs",
        " 📝 Documenting the requirements to educate team and communicate effectively with stakeholders",
        "Doing technical interviews",
        "Coordinating with QA to ensure the product is stable",
      ],
      lazyLoad: true,
    },
  ];

  const currentExperience = experience[currentCompany - 1];
  const { skills, duties } = currentExperience;
  return (
    <div className="App-main flex flex-col h-full">
      <div className="flex flex-row justify-evenly flex-wrap text-purple-400 h-auto ">
        {skills.map((skill) => (
          <SkillText skill={skill} />
        ))}
      </div>
      <RolesAndResponsibilities duties={duties} />
    </div>
  );
};

export default Details;
