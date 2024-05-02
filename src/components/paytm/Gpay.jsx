import './Gpay.css';
import GooglePayButton from '@google-pay/button-react';
import React from 'react';
import QRCode from 'react-qr-code';
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

function UpiQrCode() {
  
  const  navigate=useNavigate()

  const upiDetails = 'upi://pay?pa=viknesh0725-1@okicici&pn=viknesh&cu=INR';
  // Replace the upiDetails variable above with your UPI payment detailsupi://pay?pa=viknesh0725-1@okicici&pn=viknesh&mc=123&tid=123456&tr=9345484086'
 const handleClick= () => {
  navigate("/Booking")

 }
  return (
    <div className="App">
      <Navbar />
      {/* <Header/> */}
      <h1>UPI QR Code</h1>
      <QRCode value={upiDetails} />
      <h1>Pay with Gpay</h1>
      <div>
      <form >
                  <span className="itemKey">Enter Transaction Id</span>
                  <input className="tp1"     type="text" id="bid" required="true" />
                  <button  className='left'onChange={handleClick()} >Submit</button>
       </form>
       </div>
      <Footer/>

    </div>

  );
}

export default UpiQrCode;
