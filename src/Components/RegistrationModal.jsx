import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';


const statesInNigeria = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", 
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", 
  "FCT - Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", 
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", 
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

const RegistrationModal = () => {
    const [showModal, setShowModal] = useState(true); // Always show modal based on your requirement

  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white lg:p-8 xs:p-4 rounded shadow-md lg:w-[50%] xs:w-[90%]">
            <h2 className="text-xl font-bold mb-4 font-Poppins">Registration Form</h2>
            <form>
              <input
                type="text"
                name="firstName"
                placeholder="Business Name"
                className="mb-4 p-2 border border-gray-300 outline-none rounded w-full text-gray-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Business Email"
                className="mb-4 p-2 border border-gray-300 outline-none rounded w-full text-gray-400"
                required
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="mb-4 p-2 border border-gray-300 outline-none rounded w-full text-gray-400"
                required
              />
               <select
                type="text"
                name="businessNiche"
                placeholder="Business Niche"
                className="mb-4 p-2 border border-gray-300 outline-none rounded w-full text-gray-400"
                required
              >
                <option value="Select Business Niche" className=''>Select Business Niche</option>
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
              <select id="state" name="state" className="mb-4 p-2 border border-gray-300 outline-none rounded w-full text-gray-400">
                {statesInNigeria.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationModal;