import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
   <section className="f-wrapper inner-container " id='footer'>
    <div className="paddings innerWidth flexCenter f-container">
       {/* left side */}
       <div className="flexColStart f-left">
        <img src="./logo2.png" alt="" width={120}/>
        <span className='secondaryText'>
            Our vision is to make all people <br />
            the best place to live for them.
        </span>
       </div>
       <div>
       <div className="flexColCenter ">
                <span className='primaryText'>Get Started with Homyz</span>
                <span className='secondaryText'> Subscribe and find super attractive price quotes from us. <br />  Find your residence soon</span>
                  <button className="button">
                    <a href="mailto:ps431352@gmail.com">Get Started</a>
                  </button>
            </div>
       </div>
       <div className="flexColStart f-right">
        <span className='primaryText'>Information </span>
        
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Service</span>
            <span>Product</span>
            <span>About Us</span>

          </div>
       </div>
       
    </div>
   </section>
  )
}

export default Footer