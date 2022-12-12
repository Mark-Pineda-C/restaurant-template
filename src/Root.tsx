import { NavLink, Outlet } from 'react-router-dom';
import { RiHomeLine } from 'react-icons/ri';
import { AiOutlinePieChart } from 'react-icons/ai';
import { IoSettingsOutline, IoBookmark } from 'react-icons/io5';
import { MdOutlineLogout } from 'react-icons/md';

function Root() {

  return (
   <>
    <nav className='header-nav hidden lg:flex h-screen w-16 fixed bg-lightmode-item dark:bg-darkmode-item duration-150 justify-center items-center flex-col gap-10 py-2 '>
      <div className="h-12 w-12 rounded-lg bg-blue-500 opacity-75 grid place-items-center">
        <IoBookmark className="logo"/>
      </div>
      <ul className='flex flex-col gap-8 duration-200'>
        <NavLink to="" className='header-link'>
          <span className='absolute z-0 h-16 translate-x-2 rounded-l-xl w-12'>
            <div className="up"></div>
            <div className="down"></div>
          </span>
          <RiHomeLine className="w-8 h-8 z-10"/>
        </NavLink>
        <NavLink to="dashboard" className='header-link'>
          <span className='absolute z-0 h-16 translate-x-2 rounded-l-xl w-12'>
            <div className="up"></div>
            <div className="down"></div>
          </span>
          <AiOutlinePieChart className="w-8 h-8 z-10"/>
        </NavLink>
        <NavLink to="settings" className='header-link'>
          <span className='absolute z-0 h-16 translate-x-2 rounded-l-xl w-12'>
            <div className="up"></div>
            <div className="down"></div>
          </span>
          <IoSettingsOutline className="w-8 h-8 z-10"/>
        </NavLink>
      </ul>
      <div className='flex-grow'></div>
      <div>
        <NavLink to="a" className='header-link'>
          <span className='absolute z-0 h-16 translate-x-2 rounded-l-xl w-12'>
            <div className="up"></div>
            <div className="down"></div>
          </span>
          <MdOutlineLogout className="w-8 h-8 z-10"/>
        </NavLink>
      </div>
    </nav>
    <div className='h-screen bg-lightmode-bg dark:bg-darkmode-bg lg:ml-16 duration-150'>
      <Outlet />
    </div>
    <nav className='lg:hidden fixed bottom-0 w-full h-16 bg-lightmode-item dark:bg-darkmode-item flex items-center duration-150'>
      <ul className="w-full flex justify-between mx-14 sm:mx-36 md:mx-48 duration-200">
        <NavLink to="" className='footer-link'>
          <span className='absolute z-0 h-12 -translate-y-2 rounded-b-xl w-16'>
            <div className="left"></div>
            <div className="right"></div>
          </span>
          <RiHomeLine className="w-8 h-8 z-10"/>
        </NavLink>
        <NavLink to="dashboard" className='footer-link'>
          <span className='absolute z-0 h-12 -translate-y-2 rounded-b-xl w-16'>
            <div className="left"></div>
            <div className="right"></div>
          </span>
          <AiOutlinePieChart className="w-8 h-8 z-10"/>
        </NavLink>
        <NavLink to="settings" className='footer-link'>
          <span className='absolute z-0 h-12 -translate-y-2 rounded-b-xl w-16'>
            <div className="left"></div>
            <div className="right"></div>
          </span>
          <IoSettingsOutline className="w-8 h-8 z-10"/>
        </NavLink>
      </ul>
    </nav>
   </>
  )
}

export default Root
