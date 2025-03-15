import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import { motion } from "framer-motion"; // Import motion for animation
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function Homee() {
  console.log("Home");
  const [exitAnimation, setExitAnimation] = useState(false); // State for animation
  const navigate = useNavigate(); // React Router Navigation

  const handleVerifyClick = () => {
    const verified = sessionStorage.getItem("Verified");
    if (verified === "true") {
      toast.info("You have already submitted a verification video. Your agent will contact you shortly");
    } else {
      navigate('/verification');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1, x: 0 }}
      animate={{ opacity: exitAnimation ? 0 : 1, x: exitAnimation ? -100 : 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="text-[58px] font-bold text-blue-600 mb-8 cursor-pointer leading-[48px] tracking-[-0.03em] font-['Plus_Jakarta_Sans']">
        mapper
      </h1>
      <div className="flex justify-center items-center w-full">
        <button
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-lg transition duration-300 ease-in-out"
          onClick={handleVerifyClick}
        >
          Verify Yourself
        </button>
      </div>
      <ToastContainer />
    </motion.div>
  );
}
