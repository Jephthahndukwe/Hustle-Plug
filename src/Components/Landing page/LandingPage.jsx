import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import img from '../../assets/Hustle Plug.png'
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from 'react-router-dom'
import frame from '../../assets/Frame 10.png'
import frame2 from '../../assets/Frame 11.png'
import frame3 from '../../assets/Frame 41.png'
import group from '../../assets/Group 1.png'
import img2 from '../../assets/Hustle_Plug_BIGI.png'
import Footer from '../Footer';
import RegistrationModal from '../RegistrationModal';
import axios from 'axios'; // Import Axios or your preferred HTTP client


const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    // Check user authentication status from backend
    const fetchUserStatus = async () => {
      try {
        const response = await axios.get('/api/user/status'); // Replace with your actual API endpoint
        const { data } = response;
        if (data.loggedIn) {
          // User is registered/logged in
          setRegistered(false);
          setShowModal(true);
        } else {
          // User is not registered, show the modal
          setShowModal(true);
        }
      } catch (error) {
        console.error('Error fetching user status:', error);
        // Handle error condition if needed
      }
    };

    fetchUserStatus();
  }, []);

  // const handleRegistration = async () => {
  //   // Perform registration logic, e.g., make API call to register user
  //   try {
  //     // Replace this with your actual registration API call
  //     await axios.post('/api/user/register', { /* registration data if needed */ });
  //     setRegistered(true);
  //     setShowModal(false);
  //   } catch (error) {
  //     console.error('Error registering user:', error);
  //     // Handle registration error if needed
  //   }
  // };

  const handleLogout = () => {
    // Simulate logout by calling your backend logout API if applicable
    // Clear any tokens or session information on backend
    // After backend confirmation, update state and show modal
    // axios.post('/api/user/logout')
    //   .then(() => {
        setRegistered(false);
        setShowModal(true);
      // })
      // .catch(error => {
      //   console.error('Error logging out:', error);
      //   // Handle logout error if needed
      // });
  };

  return (
    <div>
       {/* Registration Modal */}
       {showModal && (
        <RegistrationModal
          onClose={() => setShowModal(false)} // Provide a way to close the modal    // Function to handle registration
        />
      )}
        <Navbar registered={false} onLogout={handleLogout} />
        <div style={{backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className='h-[100vh] w-[100%] lg:px-[60px] xs:px-[15px] pt-[7rem]'>
            <h1 className='text-[36px] text-[#E57704] leading-[43.88px] font-[700] font-Montserrat'>WHAT IS #HUSTLE PLUG <span className='text-[#248C00]'>NAIJA</span>?</h1>
            <p className='text-[20px] text-[#fff] leading-[32px] font-Montserrat font-[500] lg:w-[570px] mt-[2rem]'>HUSTLE PLUG is recognizing and celebrating the faces behind the Small and Medium sized Businesses that drive the engine of growth in Nigeria. Over 30 million SMEs power this Nation and this show is about the people and their stories.</p>
            <div className='flex items-center justify-between lg:w-[47%] mt-[2rem]'>
                <p className='text-[#fff] leading-[32px] xs:text-[11.5px] lg:text-[16px] font-[600] font-Montserrat flex items-center lg:gap-[10px] xs:gap-[5px]'>SME SHOW CASE <IoCheckmarkCircle className='xs:text-[19px] lg:text-[22px]'/></p>
                <p className='text-[#fff] leading-[32px] xs:text-[11.5px] lg:text-[16px] font-[600] font-Montserrat flex items-center lg:gap-[10px] xs:gap-[5px]'>FUNDING <IoCheckmarkCircle className='xs:text-[19px] lg:text-[22px]'/></p>
                <p className='text-[#fff] leading-[32px] xs:text-[11.5px] lg:text-[16px] font-[600] font-Montserrat flex items-center lg:gap-[10px] xs:gap-[5px]'>MARKET PLACE <IoCheckmarkCircle className='xs:text-[19px] lg:text-[22px]'/></p>
            </div>
            <div className='mt-[3rem] flex items-center lg:gap-[3rem] xs:gap-[1rem] lg:w-[47%]'>
                <button className='bg-[#E57704] lg:w-[295px] xs:w-[400px] h-[55px] px-[5px] rounded-[8px] hover:bg-transparent hover:border-[#E57704] hover:border-solid hover:border-[1px] hover:text-[#E57704] text-[#fff]'><Link to='' className='lg:text-[20px] xs:text-[15px] font-[700] font-Lato leading-[24px]'>Download Concept Note</Link></button>
                <button className='border-[#E57704] border-solid border-[1px] lg:w-[295px] xs:w-[300px] h-[53px] rounded-[8px] px-[5px] hover:bg-[#E57704] hover:text-[#fff] text-[#E57704]'><Link to='' className='lg:text-[20px] xs:text-[15px] font-[700] font-Lato leading-[24px]'>Become A Partner</Link></button>
            </div>
        </div>

        <div className='py-[2rem] lg:px-[80px] xs:px-[15px] flex flex-wrap items-center justify-between'>
          <span className='flex items-center lg:gap-[10px] xs:gap-[5px]'>
            <h1 className='text-[#E57704] lg:text-[48px] xs:text-[38px] font-[700] font-Montserrat leading-[48px]'>3M</h1>
            <span>
              <h2 className='text-[#000] lg:text-[14px] xs:text-[11.5px] font-[700] font-Montserrat leading-[24px]'>APPLICANTS</h2>
              <h2 className='text-[#000] lg:text-[14px] xs:text-[11.5px] font-[700] font-Montserrat leading-[24px]'>NATIONWIDE</h2>
            </span>
          </span>
          <span className='flex items-center lg:gap-[10px] xs:gap-[5px]'>
            <h1 className='text-[#E57704] lg:text-[48px] xs:text-[38px] font-[700] font-Montserrat leading-[48px]'>3.7K</h1>
            <span>
              <h2 className='text-[#000] lg:text-[14px] xs:text-[11.5px] font-[700] font-Montserrat leading-[24px]'>1/4 FINALIST</h2>
              <h2 className='text-[#000] lg:text-[14px] xs:text-[11.5px] font-[700] font-Montserrat leading-[24px]'>36 STATES</h2>
            </span>
          </span>
          <span className='flex items-center lg:gap-[10px] xs:gap-[5px] lg:mt-0 xs:mt-[1rem]'>
            <h1 className='text-[#E57704] lg:text-[48px] xs:text-[38px] font-[700] font-Montserrat leading-[48px]'>370</h1>
            <span>
              <h2 className='text-[#000] lg:text-[14px] xs:text-[11.5px] font-[700] font-Montserrat leading-[24px]'>1/2 FINALIST</h2>
              <h2 className='text-[#000] lg:text-[14px] xs:text-[11.5px] font-[700] font-Montserrat leading-[24px]'>06 REGIONS</h2>
            </span>
          </span>
          <span className='flex items-center lg:gap-[10px] xs:gap-[5px] lg:mt-0 xs:mt-[1rem]'>
            <h1 className='text-[#E57704] lg:text-[48px] xs:text-[38px] font-[700] font-Montserrat leading-[48px]'>30</h1>
            <span>
              <h2 className='text-[#000] lg:text-[14px] xs:text-[11.5px] font-[700] font-Montserrat leading-[24px]'>FINALIST</h2>
              <h2 className='text-[#000] lg:text-[14px] xs:text-[11.5px] font-[700] font-Montserrat leading-[24px]'>LAGOS NG</h2>
            </span>
          </span>
          <span className='flex items-center lg:gap-[10px] xs:gap-[5px] lg:mt-0 xs:mt-[1rem]'>
            <h1 className='text-[#E57704] lg:text-[48px] xs:text-[38px] font-[700] font-Montserrat leading-[48px]'>05</h1>
            <span>
              <h2 className='text-[#000] lg:text-[14px] xs:text-[11.5px] font-[700] font-Montserrat leading-[24px]'>TOP PRIZE</h2>
              <h2 className='text-[#000] lg:text-[14px] xs:text-[11.5px] font-[700] font-Montserrat leading-[24px]'>WINNERS</h2>
            </span>
          </span>
          <span className='flex items-center lg:gap-[10px] xs:gap-[5px] xs:mt-[1rem]'>
            <h1 className='text-[#E57704] lg:text-[48px] xs:text-[38px] font-[700] font-Montserrat leading-[48px]'>12</h1>
            <span>
              <h2 className='text-[#000] lg:text-[14px] xs:text-[11.5px] font-[700] font-Montserrat leading-[24px]'>EPISODES</h2>
              <h2 className='text-[#000] lg:text-[14px] xs:text-[11.5px] font-[700] font-Montserrat leading-[24px]'>AIRING</h2>
            </span>
          </span>
        </div>

        <div className='bg-[#FFE0BF] lg:px-[60px] xs:px-[20px] pt-[3rem] py-[40px]'>
          <h1 className='text-[#E57704] text-[36px] font-[700] font-Montserrat text-center'>FOCUS GROUPS</h1>
          <div className='lg:flex items-center justify-between lg:px-[60px] xs:px-[20px] gap-[12rem] mt-[3rem]'>
            <div>
              <img src={frame} />
              <h2 className='text-[#E57704] text-[24px] font-[600] font-Montserrat leading-[29.26px] mt-[1.5rem] text-center'>Women-led SMEs</h2>
              <p className='text-[#2B2B2B] text-[16px] font-[500] font-Montserrat leading-[30px] text-center mt-3'>Women-owned SMEs have traditionally faced barriers to accessing technology and financial resources, and often have unique needs and perspectives. This program will be targeted towards women-owned SMEs to help them leverage the HUSTLE PLUG show to grow and scale their businesses.</p>
            </div>
            <div className='lg:mt-0 xs:mt-[2rem]'>
              <img src={frame2} />
              <h2 className='text-[#E57704] text-[24px] font-[600] font-Montserrat leading-[29.26px] mt-[1.5rem] text-center'>Youth-led SMEs</h2>
              <p className='text-[#2B2B2B] lg:text-[16px] font-[500] font-Montserrat leading-[30px] text-center mt-3'>Young entrepreneurs, brimming with fresh ideas and digital prowess, are the future of our economy. Yet, youth-led SMEs often face unique obstacles that hinder their growth potential. The HUSTLE PLUG  show aims to be a launchpad, propelling these young businesses towards success.</p>
            </div>
          </div>
          <h1 className='text-[#000] lg:text-[22px] xs:text-[19px] font-[600] font-Montserrat leading-[30px] mt-[5rem] text-center'>FASHION | AGRICULTURE | HEALTHCARE | TECH | CREATIVES | CLIMATE CHANGE</h1>
        </div>

        <div className='mt-[3rem] mb-[3rem] xs:px-[10px]'>
          <h1 className='text-[#E57704] lg:text-[34px] xs:text-[25px] font-[700] font-Montserrat text-center leading-[43.88px]'>#HUSTLE PLUG SELECTION CRITERIA</h1>
          <div className='flex flex-wrap items-center justify-between lg:px-[60px] xs:px-[5px] mt-[3rem]'>
            <div>
             <center>
             <h1 className='bg-[#FFE0BF] w-[32px] h-[32px] p-[5px] text-[#E57704] text-center text-[20px] leading-[24.38px] font-[600] font-Montserrat rounded-[50%]'>1</h1>
             </center>
              <h1 className='text-[#000] text-[20px] font-[600] font-Montserrat leading-[24.36px] text-center mt-[2rem]'>Market Opportunity</h1>
              <p className='text-[#2B2B2B] lg:text-[16px] leading-[30px] font-[500] font-Montserrat text-center mt-[1rem] lg:w-[375px] xs:w-[350px]'>The SME will be operating in a growing or untapped market with a clear potential for growth. A deep understanding of the market and customer needs is crucial.</p>
            </div>
            <div className='lg:mt-0 xs:mt-[3rem]'>
              <center>
                <h1 className='bg-[#FFE0BF] w-[32px] h-[32px] p-[5px] text-[#E57704] text-center text-[20px] leading-[24.38px] font-[600] font-Montserrat rounded-[50%]'>2</h1>
             </center>
              <h1 className='text-[#000] text-[20px] font-[600] font-Montserrat leading-[24.36px] text-center mt-[2rem]'>Business Model</h1>
              <p className='text-[#2B2B2B] lg:text-[16px] leading-[30px] font-[500] font-Montserrat text-center mt-[1rem] lg:w-[375px] xs:w-[350px]'>A clear and well-defined business model is necessary. The SME will have a clear revenue model, pricing strategy, and plan for scaling the business.</p>
            </div>
            <div className='lg:mt-0 xs:mt-[3rem]'>
              <center>
                <h1 className='bg-[#FFE0BF] w-[32px] h-[32px] p-[5px] text-[#E57704] text-center text-[20px] leading-[24.38px] font-[600] font-Montserrat rounded-[50%]'>3</h1>
             </center>
              <h1 className='text-[#000] text-[20px] font-[600] font-Montserrat leading-[24.36px] text-center mt-[2rem]'>Product or Service</h1>
              <p className='text-[#2B2B2B] lg:text-[16px] leading-[30px] font-[500] font-Montserrat text-center mt-[1rem] lg:w-[375px] xs:w-[350px]'>The product or service will be innovative, and address a significant pain point for the target customers. The SME will have a clear roadmap for product development and improvement.</p>
            </div>
          </div>
          <div className='flex flex-wrap items-center justify-between lg:px-[60px] xs:px-[5px] mt-[4rem]'>
            <div>
              <center>
                <h1 className='bg-[#FFE0BF] w-[32px] h-[32px] p-[5px] text-[#E57704] text-center text-[20px] leading-[24.38px] font-[600] font-Montserrat rounded-[50%]'>4</h1>
             </center>
              <h1 className='text-[#000] text-[20px] font-[600] font-Montserrat leading-[24.36px] text-center mt-[2rem]'>Financials</h1>
              <p className='text-[#2B2B2B] text-[16px] leading-[30px] font-[500] font-Montserrat text-center mt-[1rem] lg:w-[375px] xs:w-[350px]'>The SME will have a solid financial foundation, including a clear understanding of their financial revenue projection and runway. The SME will have a solid plan for raising capital to fuel growth.</p>
            </div>
            <div className='lg:mt-0 xs:mt-[3rem]'>
              <center>
                <h1 className='bg-[#FFE0BF] w-[32px] h-[32px] p-[5px] text-[#E57704] text-center text-[20px] leading-[24.38px] font-[600] font-Montserrat rounded-[50%]'>5</h1>
             </center>
              <h1 className='text-[#000] text-[20px] font-[600] font-Montserrat leading-[24.36px] text-center mt-[2rem]'>Scalability</h1>
              <p className='text-[#2B2B2B] text-[16px] leading-[30px] font-[500] font-Montserrat text-center mt-[1rem] lg:w-[375px] xs:w-[350px]'>The SME will have a clear strategy for scaling the business, including a plan for customer acquisition, marketing and distribution. </p>
            </div>
            <div className='lg:mt-0 xs:mt-[3rem]'>
              <center>
                <h1 className='bg-[#FFE0BF] w-[32px] h-[32px] p-[5px] text-[#E57704] text-center text-[20px] leading-[24.38px] font-[600] font-Montserrat rounded-[50%]'>6</h1>
             </center>
              <h1 className='text-[#000] text-[20px] font-[600] font-Montserrat leading-[24.36px] text-center mt-[2rem]'>Entrepreneurial mindset</h1>
              <p className='text-[#2B2B2B] text-[16px] leading-[30px] font-[500] font-Montserrat text-center mt-[1rem] lg:w-[375px] xs:w-[350px]'>The SME will have a strong entrepreneurial mindset, with a willingness to take risk, embrace failure, and adapt to changing circumstances.</p>
            </div>
          </div>
        </div>

        <div className='bg-[#FFE0BF] pt-[3rem] pb-[2rem]'>
          <h1 className='text-center text-[#E57704] text-[36px] font-[700] font-Montserrat leading-[43.88px]'>OUR ASK</h1>
          <div className='mt-[3rem] lg:flex items-center justify-between lg:px-[60px] xs:px-[20px]'>
            <div>
              <img src={frame3} />
            </div>
            <div>
              <div className='bg-[#D7D7D7] lg:w-[608px] xs:w-full p-[15px] rounded-[8px] text-center text-[#000] text-[24px] font-[700] font-Montserrat leading-[29.32px]'>
                <h1>Platinum - N100m</h1>
              </div>
              <div className='bg-[#FFA800] lg:w-[608px] xs:w-full p-[15px] rounded-[8px] text-center text-[#000] text-[24px] font-[700] font-Montserrat leading-[29.32px] mt-[2rem]'>
                <h1>Gold - 50m</h1>
              </div>
              <div className='bg-[#CD7F32] lg:w-[608px] xs:w-full p-[15px] rounded-[8px] text-center text-[#000] text-[24px] font-[700] font-Montserrat leading-[29.32px] mt-[2rem]'>
                <h1>Bootcamp - 100m</h1>
              </div>
              <div className='bg-[#FFCECE] lg:w-[608px] xs:w-full p-[15px] rounded-[8px] text-center text-[#000] text-[24px] font-[700] font-Montserrat leading-[29.32px] mt-[2rem]'>
                <h1>others - tbd</h1>
              </div>
              <center>
                <button className='border-[#E57704] border-solid border-[2px] w-[280px] h-[50px] rounded-[4px] hover:bg-[#E57704] hover:text-[#fff] text-[#E57704] mt-[3rem]'><Link to='' className='text-[20px] font-[700] font-Lato leading-[24px]'>Become A Partner</Link></button>
              </center>
            </div>
          </div>
          <div className='lg:px-[60px] xs:px-[10px] lg:mt-0 xs:mt-[3rem]'>
            <h1 className='text-[#000] text-[24px] font-[700] font-Montserrat leading-[29.26px]'>Application of sponsorship funds</h1>
            <div className='flex flex-wrap items-center justify-between mt-[1.5rem]'>
              <span className='flex items-center lg:gap-[10px] xs:gap-[5px]'>
                <h1 className='text-[#E57704] lg:text-[48px] xs:text-[30px] font-[700] font-Montserrat leading-[48px]'>30%</h1>
                <span>
                  <h2 className='text-[#000] lg:text-[16px] xs:text-[12px] font-[500] font-Montserrat leading-[19.5px] lg:w-[151px] xs:w-[90px]'>Hustle Plug kick-off activities</h2>
                </span>
              </span>
              <span className='flex items-center lg:gap-[10px] xs:gap-[5px]'>
                <h1 className='text-[#E57704] lg:text-[48px] xs:text-[30px] font-[700] font-Montserrat leading-[19.5px]'>25%</h1>
                <span>
                  <h2 className='text-[#000] lg:text-[16px] xs:text-[12px] font-[500] font-Montserrat leading-[24px] lg:w-[169px] xs:w-[110px]'>Hustle Plug accelerator program</h2>
                </span>
              </span>
              <span className='flex items-center lg:gap-[10px] xs:gap-[5px] lg:mt-0 xs:mt-[1rem]'>
                <h1 className='text-[#E57704] lg:text-[48px] xs:text-[30px] font-[700] font-Montserrat leading-[48px]'>20%</h1>
                <span>
                  <h2 className='text-[#000] lg:text-[16px] xs:text-[12px] font-[500] font-Montserrat leading-[19.5px] lg:w-[81px] xs:w-[100px]'>admin & logistics</h2>
                </span>
              </span>
              <span className='flex items-center lg:gap-[10px] xs:gap-[5px] lg:mt-0 xs:mt-[1rem]'>
                <h1 className='text-[#E57704] lg:text-[48px] xs:text-[30px] font-[700] font-Montserrat leading-[48px]'>25</h1>
                <span>
                  <h2 className='text-[#000] lg:text-[16px] xs:text-[12px] font-[500] font-Montserrat leading-[19.5px] lg:w-[81px] xs:w-[130px]'>sme prize funding - ¼ finalists</h2>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className='lg:px-[60px] xs:px-[10px] mt-[3rem] pb-[3rem]'>
          <h1 className='text-[#E57704] text-[34px] font-Montserrat font-[700] leading-[43.88px] text-center'>#HUSTLE PLUG NAIJA ACTIVITIES</h1>
          <div className='lg:flex items-center justify-between lg:px-[60px] xs:px-[10px] gap-[10rem] mt-[4rem]'>
            <div>
              <img src={img2} />
              <button className='bg-[#E57704] w-[295px] h-[55px] rounded-[4px] hover:bg-transparent hover:border-[#E57704] hover:border-solid hover:border-[2px] hover:text-[#E57704] text-[#fff] mt-[4rem]'><Link to='' className='text-[20px] font-[700] font-Lato leading-[24px]'>Register</Link></button>
            </div>
            <div className='lg:mt-0 xs:mt-[4rem]'>
              <img src={group} />
            </div>z
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default LandingPage