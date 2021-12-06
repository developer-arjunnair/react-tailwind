// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='flex justify-center align-center bg-gray-800 font-mono'>
      <div className='bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 App p-2 h-screen p-16'>
        <div className='App-header '>
          <h1 className='flex text-5xl font-extrabold justify-center'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
              Arjun Nair
            </span>
          </h1>
        </div>
        <div className='App-side text-white'>side</div>
        <div className='App-main text-white'>main</div>
        <div className='App-footer text-white'>footer</div>
      </div>
    </div>
  );
}

export default App;
