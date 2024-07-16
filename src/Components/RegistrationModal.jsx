import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user_register } from './../redux/actions/AuthAction';

const statesInNigeria = [
  "State", "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", 
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", 
  "FCT - Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", 
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", 
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

const RegistrationModal = ({ setShowModal }) => {
  const [businessName, setBusinessName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessNiche, setBusinessNiche] = useState('');
  const [state, setState] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      setShowModal(false);
    }
  }, [userInfo, setShowModal]);

  const validatePhoneNumber = (number) => {
    const regex = /^(?:\+234|0)?[789]\d{9}$/;
    return regex.test(number);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(phoneNumber)) {
      setErrorMessage('Please enter a valid Nigerian phone number.');
      return;
    }

    setErrorMessage('');
    const body = {
      businessName,
      businessEmail,
      phoneNumber,
      businessNiche,
      state,
    };
    dispatch(user_register(body, navigate, setShowModal));
  };

  const handleKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white lg:p-8 xs:p-4 rounded shadow-md lg:w-[50%] xs:w-[90%]">
        <h2 className="text-xl font-bold mb-4 font-Poppins">Registration Form</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Business Name"
            className="mb-4 p-2 border border-gray-300 outline-none rounded w-full text-gray-400"
            required
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Business Email"
            className="mb-4 p-2 border border-gray-300 outline-none rounded w-full text-gray-400"
            required
            value={businessEmail}
            onChange={(e) => setBusinessEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number (+234)"
            className="mb-4 p-2 border border-gray-300 outline-none rounded w-full text-gray-400"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          <select
            name="businessNiche"
            className="mb-4 p-2 border border-gray-300 outline-none rounded w-full text-gray-400"
            required
            value={businessNiche}
            onChange={(e) => setBusinessNiche(e.target.value)}
          >
            <option value="" disabled>Business Niche</option>
            <option>Fashion Design</option>
            <option>Shoe Making</option>
            <option>Agriculture Business</option>
            <option>Food Delivery</option>
            <option>E-commerce</option>
            <option>Hair / Makeup</option>
            <option>Art / Painting</option>
            <option>Food Processing</option>
            <option>Recycling</option>
          </select>
          <select 
            className="mb-4 p-2 border border-gray-300 outline-none rounded w-full text-gray-400"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            {statesInNigeria.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <center>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline mb-2"
            >
              Submit
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;