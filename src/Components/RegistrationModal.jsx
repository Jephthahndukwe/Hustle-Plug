import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const RegistrationModal = () => {
    const [showModal, setShowModal] = useState(true); // Always show modal based on your requirement
    const [formData, setFormData] = useState({
      firstName: '',
      email: '',
      phoneNumber: '',
      address: '',
      password: ''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('/api/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to register user');
        }
  
        setShowModal(true);
        toast.success('Registration successful');
      } catch (error) {
        console.error('Error registering user:', error);
        toast.error('Registration failed');
        // Optionally, you can handle the error state or show an error message here
      }
    };

  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white lg:p-8 xs:p-4 rounded shadow-md lg:w-[50%] xs:w-[90%]">
            <h2 className="text-xl font-bold mb-4 font-Poppins">Registration Form</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="Business Name"
                value={formData.firstName}
                onChange={handleChange}
                className="mb-4 p-2 border border-gray-300 outline-none rounded w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Business Email"
                value={formData.email}
                onChange={handleChange}
                className="mb-4 p-2 border border-gray-300 outline-none rounded w-full"
                required
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mb-4 p-2 border border-gray-300 outline-none rounded w-full"
                required
              />
               <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="mb-4 p-2 border border-gray-300 outline-none rounded w-full"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="mb-4 p-2 border border-gray-300 outline-none rounded w-full"
                required
              />
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