import RolesAndResponsibilities from './RolesAndResponsibilites';
import SkillText from './SkillText';

const Details = ({ currentCompany }) => {
  const experience = [
    {
      skills: [
        'javascript',
        'reactjs',
        'redux',
        'cypress',
        'jest',
        'php',
        'php-unit',
        'java',
        'spring-boot',
        'junit',
        'docker',
        'k8s',
        'mssql',
        'postgresql',
      ],
      duties: [
        'Designing systems and writing RFCs for 😎 new features',
        'Building those ⬆️',
        'Helping with moving out of Mono to a decoupled world',
        'Helping internal and external stakeholder with QnAs',
        'Helping new team with onboarding 🤝',
        '📜 Documenting processes and repetitive tasks',
        '🚨 Keeping stakeholder updated on progress',
        'Managing and triage KTLO tasks',
      ],
    },
    {
      skills: [
        'javascript',
        'reactjs',
        'mobx',
        'jest',
        'java',
        'spring-boot',
        'junit',
        'mysql',
      ],
      duties: ['WIP'],
    },
    {
      skills: [
        'sap',
        'sap-portal',
        'sap-ui5',
        'javascript',
        'abap',
        'sap-mdm',
        'webdynpro-java',
        'sap-pi',
      ],
      duties: ['WIP'],
    },
  ];
  const currentExperience = experience[currentCompany - 1];
  return (
    <div className='App-main flex flex-col h-full'>
      <div className='flex flex-row justify-evenly flex-wrap text-purple-400 h-auto '>
        {currentExperience.skills.map((skill) => (
          <SkillText skill={skill} />
        ))}
      </div>
      <RolesAndResponsibilities duties={currentExperience.duties} />
    </div>
  );
};

export default Details;
