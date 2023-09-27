import React, { useRef } from 'react';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { AiFillLinkedin } from 'react-icons/ai'
import axios from 'axios';
import validator from 'validator';
import Button from '@mui/material/Button'
export const Contact = ({isloading, setIsLoading}) => {

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');

  const form = useRef();


  const onFormUpdate = (e) => {
    const { name, value } = e.target
    setFormDetails({
      ...formDetails,
      [name]: value
    })
  }


  const sendEmail = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    if (!validator.isEmail(formDetails.email)) {
      return;
    }
    try {
     const ok = await axios.post("http://13.233.237.103/api/", formDetails);
      console.log(ok);
      setIsLoading(false); 
      setButtonText('Thank you!');
      setTimeout(() => {
        setButtonText('Send');
        setFormDetails(formInitialDetails);
      }, 2000);
    } catch (err) {
      console.log(err);
      setIsLoading(false); // Handle the loading state here if there's an error
      setButtonText('Error!');

      setTimeout(() => {
        setButtonText('Send');
      }, 2000);
    }
  };
  

  return (
    <>

      <section className="contact" id="connect">
        <div className='contacthead'>
          <h2>Get In Touch</h2>
        </div>
        <div className='mycontactlink'>
          <div className='linkbody'><div className='mycon'><BsFillTelephoneFill className='myconok' />  (+91) 9587909621</div><a className='mylinkedin' href="https://www.linkedin.com/in/rudhram-saraswat-396487209/"><div className='mycon'><AiFillLinkedin className='myconok' /> Linkedin</div></a><div className='mycon'><BiMap className='myconok' /> Jaipur,Rajasthan</div><div className='mycon'><AiOutlineMail className='myconok' /> rudhramsaraswat2770@gmail.com</div></div>
        </div>
        <Container>

          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <img id="mychange" className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                }
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                    <form ref={form} onSubmit={sendEmail}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input required type="text" placeholder="First Name" name="firstName" onChange={onFormUpdate} value={formDetails.firstName} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input required type="text" placeholder="Last Name" name="lastName" onChange={onFormUpdate} value={formDetails.lastName} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input required type="email" placeholder="Email Address" name="email" onChange={onFormUpdate} value={formDetails.email} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input required type="tel" placeholder="Phone No." name="phone" onChange={onFormUpdate} value={formDetails.phone} />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea rows="6" required placeholder="Message" name="message" onChange={onFormUpdate} value={formDetails.message}></textarea>
                        </Col>
                      </Row>
                      <Col size={12} className="text-center">
                      <Button type='submit' ><span>{buttonText}</span></Button>
                      </Col>
                    </form>
                   
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>

      </section>
    </>
  )
}