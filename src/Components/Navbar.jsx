import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { FaTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

const Navbar = ({setShowModal}) => {
  return (
    <div className='lg:px-[60px] xs:px-[10px] py-[5px] mt-[8px]'>
      <nav className='flex items-center justify-between'>
        <img src={logo} />
        <button className='bg-[#E57704] py-2 px-[50px] rounded-[10px] text-[17px] font-medium text-white' onClick={() => setShowModal(true)}>REGISTER</button>
        {/* <div className='flex items-center lg:gap-[1rem] xs:gap-[1rem] lg:mt-0'>
          <Link to='https://x.com/HustlePlug360?t=wUTDNjnYrS2YzamHf1cQkA&s=09' target='_blank'><FaTwitter className='text-[#E57704] lg:text-[18px] xs:text-[20px]' /></Link>
          <Link to='https://www.instagram.com/hustleplug360?igsh=MXRna2FtNTIxZ2tzdg==' target='_blank'><FaInstagram className='text-[#E57704] lg:text-[18px] xs:text-[20px]' /></Link>
          <Link to='https://www.tiktok.com/@hustleplug360' target='_blank'><FaTiktok className='text-[#E57704] lg:text-[18px] xs:text-[20px]' /></Link>
          <Link to='https://www.youtube.com/channel/UCMfkczJTrbCI2DEndsunHfw' target='_blank'><FaYoutube className='text-[#E57704] lg:text-[18px] xs:text-[20px]' /></Link>
        </div> */}
      </nav>
    </div>
  )
}

export default Navbar