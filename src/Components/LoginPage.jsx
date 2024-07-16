// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { user_login } from '../redux/actions/AuthAction';

// const LoginPage = ({ setShowModal2, showModal2, setShowModal }) => {
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const Auth = useSelector((state) => state.Auth);
//   const { user, error } = Auth;

//   useEffect(() => {
//     if (user) {
//       navigate('/');
//       setShowModal2(false);
//       setShowModal(false);
//     } else {
//       setShowModal2(true);
//     }
//   }, [user, navigate, setShowModal2, setShowModal]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const body = {
//       email,
//       phoneNumber
//     };
//     dispatch(user_login(body));
//   };

//   const handleLoginClick = (e) => {
//     e.preventDefault();
//     setShowModal2(false);
//     setShowModal(true);
//   };

//   return (
//     <>
//       {showModal2 && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white lg:p-8 xs:p-4 rounded shadow-md lg:w-[50%] xs:w-[90%]">
//             <h2 className="text-xl font-bold mb-4 font-Poppins">Login Form</h2>
//             <form onSubmit={submitHandler}>
//               <input
//                 type="email"
//                 placeholder="Business Email"
//                 className="mb-4 p-2 border border-gray-300 outline-none rounded w-full text-gray-400"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Phone Number (+234)"
//                 className="mb-4 p-2 border border-gray-300 outline-none rounded w-full text-gray-400"
//                 required
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//               <center>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline mb-2"
//                 >
//                   Submit
//                 </button>
//               </center>
//             </form>
//             <center>
//               <button className='font-medium text-[14px]'>
//                 Don't have any account? <span className='text-[#0000ff]' onClick={handleLoginClick}>Register</span>
//               </button>
//             </center>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default LoginPage;