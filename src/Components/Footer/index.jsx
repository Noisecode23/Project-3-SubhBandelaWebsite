import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer m-1 p-1'>
      <div className='info-ctr'>
        <div className='info-wrapper '>
          <img src="https://shubhbundela.com/wp-content/uploads/2023/08/DSC_3002.00_05_18_14.Still003-768x432.jpg" alt="" />
          <p>Subh Bandela.</p>
        </div>
        <img src="https://cdn.hugeicons.com/icons/facebook-01-stroke-rounded.svg" alt="facebook-01" width="24" height="24" />
        <img src="https://cdn.hugeicons.com/icons/instagram-stroke-rounded.svg" alt="instagram" width="24" height="24" />
        <img src="https://cdn.hugeicons.com/icons/new-twitter-stroke-rounded.svg" alt="new-twitter" width="24" height="24" />
      </div>
      <div className='contact-wrapper'>
        <p>Contact Us</p>
        <p>About</p>
        <p>shubhbundela999@gmail.com</p>
      </div>
      <div className='guide-ctr'>
        {["Terms and Condition", "Privacy Policy", "Refund or Cancellation"].map((item, index)=>{
          return <p key={index}>{item}</p>
        })}
      </div>
    </div>
    </>
  )
}

export default Footer
