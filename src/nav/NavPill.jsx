const NavPill = ({ children, isCurrentNav, onClick } = {}) => {
  return (
    <button
      className={`rounded-full 
    px-2
    md:px-7
    py-2
    text-xs
    md:text-xl
    text-pink-400
    md:border-4
    border-2
    hover:text-gray-100
     ${isCurrentNav ? 'border-green-400' : 'border-pink-400'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavPill;
