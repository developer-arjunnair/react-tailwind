import NavPill from './NavPill';
const TopNav = ({ currentNav, handleNavClick }) => {

  return (
    <div className='App-side flex flex-row items-center justify-around'>
      <NavPill
        isCurrentNav={currentNav === 1}
        onClick={() => {
          handleNavClick(1);
        }}
        loadTime={0}
      >
        Wayfair
      </NavPill>
      <NavPill
        isCurrentNav={currentNav === 2}
        onClick={() => {
          handleNavClick(2);
        }}
        loadTime={1000}
      >
        Expedia
      </NavPill>
      <NavPill
        isCurrentNav={currentNav === 3}
        onClick={() => {
          handleNavClick(3);
        }}
        loadTime={1000}
      >
        Wipro
      </NavPill>
    </div>
  );
};

export default TopNav;
