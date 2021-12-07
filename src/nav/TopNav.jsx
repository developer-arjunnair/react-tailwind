import NavPill from './NavPill';
const TopNav = ({ currentNav, handleNavClick }) => {
 
  return (
    <div className='App-side flex flex-row items-center justify-around'>
      <NavPill
        isCurrentNav={currentNav === 1}
        onClick={() => {
          handleNavClick(1);
        }}
      >
        Wayfair
      </NavPill>
      <NavPill
        isCurrentNav={currentNav === 2}
        onClick={() => {
          handleNavClick(2);
        }}
      >
        Expedia
      </NavPill>
      <NavPill
        isCurrentNav={currentNav === 3}
        onClick={() => {
          handleNavClick(3);
        }}
      >
        Wipro
      </NavPill>
    </div>
  );
};

export default TopNav;
