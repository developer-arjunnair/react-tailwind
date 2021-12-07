import { useState } from 'react';
import './App.css';
import HeaderBanner from './header/HeaderBanner';
import TopNav from './nav/TopNav';
const App = () => {
  const [currentNav, setCurrentNav] = useState(1);

  return (
    <div className='flex justify-center align-center bg-gray-800 font-mono'>
      <div className='bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 App p-2 h-screen p-16'>
        <HeaderBanner />
        <TopNav currentNav={currentNav} handleNavClick={setCurrentNav} />
        <div className='App-main text-white '>main</div>
        <div className='App-footer text-white'>footer</div>
      </div>
    </div>
  );
};

export default App;
