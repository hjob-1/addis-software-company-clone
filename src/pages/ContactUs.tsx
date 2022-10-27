import React from "react";
import "./contact.scss";
import contactimg from "../assets/contact-us.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className='contact-container'>
      <div className='contact-header'>
        <h1>VERY EXCITED TO HEAR FROM YOU</h1>
      </div>
      <div className='form-wrapper'>
        <form className='form-feilds'>
          <div className='input-wrapper'>
            <p>name *</p>
            <input type='text' />
          </div>
          <div className='input-wrapper'>
            <p>email *</p>
            <input type='text' />
          </div>
          <div className='input-wrapper'>
            <p>message *</p>
            <textarea />
          </div>
          <div className='form-btn'>
            <button>Submit</button>
          </div>
        </form>
        <div className='contact-illustrator'>
          <img src={contactimg} alt='contact illustrator' />
        </div>
      </div>
      <div className='company-info'>
        <div className='address'>
          <FaMapMarkerAlt className='map-icon' />
          <p>
            Kelela Bldg (Bole Atlas on the way to Rowanda) Cape Verde St, Addis
            Ababa
          </p>
        </div>
        <div className='phone'>
          <BsFillTelephoneFill className='phone-icon' />
          <p>+251-978-783525</p>
        </div>
        <div className='email'>
          <AiTwotoneMail className='email-icon' />
          <p>info@addissoftware.com</p>
        </div>
      </div>
      <div className='company-map'>
        <h2>Locate us</h2>
        <div className='map'>
          <iframe
            title='addis software'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30851.10755143387!2d38.762739481982244!3d8.987576858793066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c3d730e5dd%3A0x7bf95cf9eb5b5cc4!2sAddis%20Software!5e0!3m2!1sen!2set!4v1666362576059!5m2!1sen!2set'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
