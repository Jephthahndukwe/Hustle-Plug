import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='lg:px-[60px] xs:px-[10px] py-[5px] mt-[8px]'>
        <nav className='flex items-start justify-between'>
            <img src={logo} />
            {/* {registered ? (
              <button className='bg-[#E57704] lg:w-[200px] xs:w-[150px] px-[10px] py-[10px] rounded-[8px] mt-2'>
                <Link
                  to='/'
                  className='text-[#fff] font-[600] lg:text-[14px] xs:text-[18px] leading-[24px] text-center'
                  onClick={onLogout}
                >
                  Logout
                </Link>
              </button>
            ) : null} */}
        </nav>
    </div>
  )
}

export default Navbar