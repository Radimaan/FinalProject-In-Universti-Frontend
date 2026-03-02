import React, { useContext, useState } from 'react'
import OtpPage from '../../components/OtpBox'
import toast from 'react-hot-toast';
import { MyContext } from '../../App';

const VerifyPage = () => {
  const context = useContext(MyContext);
  const [otp, setOtp] = useState();
  const onhadelOtpChange= (value)=>{
    setOtp(value);
  }
  const VerufyOTP= (e)=>{
    e.preventDefault();
    if(otp === "123456"){
      context.OpenAleartBox("Success", "OTP Verified Successfully!")
    }else{
      context.OpenAleartBox("Error", "Invalid OTP")
    }
  }

  return (

    <section className="py-10 sectin">
      <div className="container">
        <div className="card shadow-md p-5 w-[400px] m-auto rounded-md bg-white flex flex-col  items-center">
          <div className="items-center flex text-center justify-center w-20">
            <img src="src/assets/icons8-shield-94.png" alt="Verify" className="w-full h-auto" />
          </div>
          <h2 className="text-2xl font-bold">Verify OTP</h2>
          <p className='text-center' >OTP Sent To <span className='primary font-bold'>user@example.com</span></p>

          <OtpPage length={6} onChange={onhadelOtpChange} />



        </div>
      </div>

    </section>
  )
}

export default VerifyPage