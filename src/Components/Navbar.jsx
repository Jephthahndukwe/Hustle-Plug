import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaEnvelope, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='lg:px-[60px] xs:px-[10px] py-[5px] mt-[8px]'>
        <nav className='flex items-center justify-between'>
            <img src={logo} />
            <div className='flex items-center lg:gap-[1rem] xs:gap-[1rem] lg:mt-0'>
              <FaEnvelope className='text-[#E57704] lg:text-[18px] xs:text-[20px]' />
              <FaFacebook className='text-[#E57704] lg:text-[18px] xs:text-[20px]' />
              <FaTwitter className='text-[#E57704] lg:text-[18px] xs:text-[20px]' />
              <FaInstagram className='text-[#E57704] lg:text-[18px] xs:text-[20px]' />
              <FaLinkedinIn className='text-[#E57704] lg:text-[18px] xs:text-[20px]' />
            </div>
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