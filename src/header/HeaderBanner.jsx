import HeaderText from './HeaderText';

const HeaderBanner = (props) => {
  return (
    <div className='App-header flex flex-col justify-between'>
      <h1 className='flex text-xl md:text-5xl font-extrabold justify-left'>
        <HeaderText>Arjun Nair</HeaderText>
      </h1>
      <div className='flex flex-row justify-between'>
        <div className='flex-column justify-between width-10/12'>
          <div className='text-xs md:text-xl'>
            <HeaderText
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 15'
                  stroke='orange'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                  />
                </svg>
              }
            >
              Full stack Engineer
            </HeaderText>
          </div>
          <div className='text-xs md:text-xl'>
            <HeaderText
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-6'
                  fill='none'
                  viewBox='0 0 24 20'
                  stroke='orange'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                  />
                </svg>
              }
            >
              Wayfair
            </HeaderText>
          </div>
          <div className='text-xs md:text-xl'>
            <HeaderText
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 20'
                  stroke='orange'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  />
                </svg>
              }
            >
              developer.arjunnair@gmail.com
            </HeaderText>
          </div>
        </div>

        <a
          href='https://docs.google.com/document/d/1OoUYEtVwTuo07aiWHDc0nqRC5xytkEVAGe5AkQsVNXA/export?format=pdf'
          download
          className='flex-row items-end flex'
        >
          <svg
            class='w-8 h-8'
            fill='none'
            stroke='orange'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
            ></path>
          </svg>
          <span className='text-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-red-600 hidden md:block'>
            Resume
          </span>
        </a>
      </div>
    </div>
  );
};

export default HeaderBanner;
