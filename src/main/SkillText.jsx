const SkillText = ({ skill }) => (
  <span
    key={skill}
    className='text-xs md:text-xl border-b-4 border-green-400 m-1 md:m-4'
  >
    {skill}
  </span>
);

export default SkillText;
