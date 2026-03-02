import React, { useContext, useRef, useState } from "react";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

const OtpPage = ({ length, onChange, isc }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputsRef = useRef([]);
  const context = useContext(MyContext);
  const history = useNavigate();
  

  // Handle typing
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value.slice(-1);
    setOtp(newOtp);

    if (element.value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").trim();

    if (!/^\d{6}$/.test(pasteData)) return;

    const newOtp = pasteData.split("");
    setOtp(newOtp);

    newOtp.forEach((digit, index) => {
      inputsRef.current[index].value = digit;
    });

    inputsRef.current[5].focus();
  };

  const handleSubmit = () => {
    
      context.OpenAleartBox("Success", "OTP Verified Successfully!")
      history("/ForgetPassword");
    
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div className="">
      <div className="bg-white  p-8 w-full text-center">
        <p className="text-gray-500 text-sm mb-6">
          Enter the 6-digit code sent to your phone
        </p>

        <div
          className="flex justify-between gap-2 mb-6"
          onPaste={handlePaste}
        >
          {otp.map((data, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={otp[index]}
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isOtpComplete}
          className={`w-full btn-lg  rounded-lg text-white font-semibold transition 
            ${isOtpComplete
              ? "btn-org "
              : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          Verify
        </button>


      </div>
    </div>
  );
};

export default OtpPage;