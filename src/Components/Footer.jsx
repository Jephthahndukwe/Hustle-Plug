import React from 'react'
import logo from '../assets/Logo.png'
import { FaFacebook, FaEnvelope, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#FFE0BF] pb-[2rem]'>
       <div className='lg:px-[80px] xs:px-[20px] py-[20px]'>
       <img src={logo} />
        <div className='lg:flex items-center justify-between gap-[10rem] lg:mt-0 xs:mt-[2rem]'>
            <div>
                <h2 className='text-[#000] text-[16px] font-[400] leading-[21.82px] lg:w-[669px]'>We're here to assist you! For any inquiries, partnership opportunities, or support, please reach out to our team via email or phone. We look forward to hearing from you and helping your business thrive.</h2>
            </div>
            <div className='flex items-center gap-[5rem] lg:mt-0 xs:mt-[3rem]'>
                <div>
                    <h2 className='text-[#000] text-[16px] font-[700] font-Montserrat leading-[21.82px]'>Resources</h2>
                    <h3 className='text-[#000] text-[15px] font-[400] font-Montserrat leading-[24px] mt-5'>Contact</h3>
                    <h3 className='text-[#000] text-[15px] font-[400] font-Montserrat leading-[24px] mt-3'>FAQ</h3>
                    <h3 className='text-[#000] text-[15px] font-[400] font-Montserrat leading-[24px] mt-3'>Forms</h3>
                </div>
                <div>
                    <h1 className='text-[#000] text-[16px] font-[700] font-Montserrat leading-[21.82px]'>Legal</h1>
                    <h2 className='text-[#000] text-[15px] font-[400] font-Montserrat leading-[24px] mt-5'>Privacy policy</h2>
                    <h2 className='text-[#000] text-[15px] font-[400] font-Montserrat leading-[24px] mt-3'>Terms Condition</h2>
                    <h2 className='text-[#000] text-[15px] font-[400] font-Montserrat leading-[24px] mt-3'>Disclaimer</h2>
                </div>
            </div>
        </div>
       </div>
        <hr className='bg-[#E57704] h-[3px] w-full mt-[3rem]' />
            <div className='mt-[1.5rem] lg:px-[60px] xs:px-[10px] lg:flex items-center gap-[41rem]'>
                <h1 className='text-[#000] lg:text-[16px] xs:text-[17px] font-[600] leading-[21px]'>2024 © hustleplug. All Rights Reserved.</h1>
                <div className='flex items-center lg:gap-[1rem] xs:gap-[2rem] lg:mt-0 xs:mt-[2rem]'>
                    <FaEnvelope className='text-[#E57704] lg:text-[18px] xs:text-[20px]' />
                    <FaFacebook className='text-[#E57704] lg:text-[18px] xs:text-[20px]' />
                    <FaTwitter className='text-[#E57704] lg:text-[18px] xs:text-[20px]' />
                    <FaInstagram className='text-[#E57704] lg:text-[18px] xs:text-[20px]' />
                    <FaLinkedinIn className='text-[#E57704] lg:text-[18px] xs:text-[20px]' />
                </div>
            </div>
    </div>
  )
}

export default Footer