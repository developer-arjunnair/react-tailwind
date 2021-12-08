const RolesAndResponsibilities = ({ duties }) => (
  <div className='grid gap-x-1 h-5/6 md:m-2 my-2 text-green-500 md:p-4 text-xs md:text-xl md:tracking-wide overflow-auto '>
    {duties.map((duty, index) => (
      <p key={index}>{`/* ${duty} */`}</p>
    ))}
  </div>
);

export default RolesAndResponsibilities;
