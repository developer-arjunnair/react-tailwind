import { useState, Suspense, useEffect } from "react";
import "./App.css";
import FooterBanner from "./footer/FooterBanner";
import HeaderBanner from "./header/HeaderBanner";
import Details from "./main/Details";
import TopNav from "./nav/TopNav";
const App = () => {
  const [currentNav, setCurrentNav] = useState(1);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, [currentNav]);

  return (
    <div className="flex justify-center align-center bg-gray-800 font-mono">
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 App p-2 h-full min-h-screen p-16">
        <HeaderBanner />
        <TopNav currentNav={currentNav} handleNavClick={setCurrentNav} />
        {loaded ? (
          <Details currentCompany={currentNav} />
        ) : (
          <div className="flex items-center pt-10 flex-col">
            <p className="text-l md:text-3xl align-center text-yellow-200 flex ">
              <svg
                class="animate-spin h-7 w-7 mr-3 "
                stroke="currentColor"
                strokeWidth={20}
                strokeDasharray="100%"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 200 200"
              >
                <circle cx="100" cy="100" r="90" />
              </svg>
              LOADING...
            </p>
            <p className="text-sm align-center text-green-700">
              💡 Induced load time
            </p>
          </div>
        )}
        <FooterBanner />
      </div>
    </div>
  );
};

export default App;
