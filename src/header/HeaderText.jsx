const HeaderText = ({ icon, children }) => (
  <div className=' flex flex-column'>
    <div className='hidden md:block'>{icon}</div>
    <p className='bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500'>
      {children}
    </p>
  </div>
);

export default HeaderText;
