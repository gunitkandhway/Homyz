import React from 'react'
import {MdCall } from "react-icons/md";
import {BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter } from "react-icons/hi2";
import "./Contact.css"


const Contact = () => {
  return (
    <div id='Contact'>
        <section className='c-wrapper'>
            <div className="paddings innerWidth flexCenter c-container">
                {/* left part */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy to Contact us</span>
                    <span className='secondaryText'>We always ready to help by providing the best service for u,we beleive a <br /> good place to live can make your life better </span>
                     <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>+91 6392239003</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Call Now
                                </div>
                            </div>
                            {/* second mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>+91 6392239003</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Chat Now
                                </div>
                            </div>
                        </div>
                        {/* second row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>+91 6392239003</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Video Call Now
                                </div>
                            </div>
                            {/* second mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>+91 6392239003</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Message Now
                                </div>
                            </div>
                        </div>
                     </div>
                    
                </div>
                {/* Right part */}
                <div className="c-right">
                    <div className="image-conatiner">
                        <img src="./contact.jpg" alt="" height="100%" width="100%" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact