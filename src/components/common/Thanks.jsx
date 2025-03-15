import React, { useEffect } from 'react';
import emailjs from "emailjs-com";

const VerificationThankYou = () => {
  const email = "zawarkhan.contact@gmail.com";
  sessionStorage.setItem("Verified",true);
  useEffect(() => {
    emailjs.init("UXDTvLz9oDsQTIb5r");

      const templateParams = {
        name: "Client",
        time: new Date().toLocaleString(),
        message: `Client: ${sessionStorage.getItem("email")}\nHas verified the property for address:\n${sessionStorage.getItem("address")} `,
        email, // recipient email from form
      };
  
      emailjs
        .send("service_qciqu5c", "template_0ryiqqb", templateParams)
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            toast.success("Reminder email sent successfully!");
          },
          (error) => {
            console.error("FAILED...", error);
            toast.error("Failed to send reminder email.");
          }
        );
    
  }, []);

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-4">
          Thanks for Your Verification!
        </h1>
        <p className="text-gray-700 text-center">
          Your data is shared with the Agent. He will contact you shortly on the provided email.
        </p>
      </div>
    </div>
  );
};

export default VerificationThankYou;