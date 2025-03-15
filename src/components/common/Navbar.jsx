import React, { useState } from 'react';
// import { useAppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const navigate = useNavigate();
  // const { setAddress } = useAppContext(); // Access setAddress from context
  const [inputValue, setInputValue] = useState(""); // Local state for input field

  const goToHome = () => {
    window.location.href = "/"; // Force redirect to "/"
  };

  // Function to handle Enter key press
  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter" && inputValue.trim() !== "") {
  //     setAddress(inputValue); // Update global state with input value
  //     console.log("Address Set:", inputValue);
  //     // navigate("/details"); // Navigate to details page
  //   }
  // };

  return (
    <nav className="flex justify-between items-center px-6 bg-white shadow-md w-full mt-1 mb-1 sticky">
      {/* Left - Logo */}
      <div
        className="sm:text-3xl text-xl font-bold text-blue-600 mb-1 cursor-pointer leading-[48px] tracking-[-0.03em] font-['Plus_Jakarta_Sans']"
        onClick={goToHome}
      >
        mapper
      </div>

      {/* Center - Search bar */}
      

      {/* Right - Icons and Avatar (Hidden on small screens) */}
      <div className="hidden md:flex items-center space-x-6 mb-1">
        <img
          className="w-9 h-9 text-gray-600 hover:text-blue-500 cursor-pointer"
          src={'/assets/Like.png'}
          alt="Favorites"
        />
        <img
          className="w-9 h-9 text-gray-600 hover:text-blue-500 cursor-pointer"
          src={'/assets/Notification.png'}
          alt="Notifications"
        />
       
        <img
          src="/assets/Profil.png"
          alt="User"
          className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;