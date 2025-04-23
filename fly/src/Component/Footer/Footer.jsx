import React from 'react'
import { TiSocialFacebook, TiSocialInstagram, TiSocialYoutube, TiSocialTwitter } from 'react-icons/ti'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer container grid">

        {/* ABOUT US Section */}
        <div className="footerSection">
          <h4 className="sectionTitle">ABOUT US</h4>
          <ul>
            <li><a href="#">About SriLankan Airlines</a></li>
            <li><a href="#">Awards and Accolades</a></li>
            <li><a href="#">Right to Information Act</a></li>
            <li><a href="#">Tender and GSA notices</a></li>
            <li><a href="#">Advertise with us</a></li>
            <li><a href="#">Sri Lanka Tourism</a></li>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* HELP Section */}
        <div className="footerSection">
          <h4 className="sectionTitle">HELP</h4>
          <ul>
            <li><a href="#">24 Hours Contact Center</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>

          <h4 className="sectionTitle">DIRECT CONNECT</h4>
          <ul>
            <li><a href="#">Agent Registration</a></li>
            <li><a href="#">Supplier Registration</a></li>
          </ul>
        </div>

        {/* SERVICES Section */}
        <div className="footerSection">
          <h4 className="sectionTitle">SERVICES</h4>
          <ul>
            <li><a href="#">MICE</a></li>
            <li><a href="#">Cargo</a></li>
            <li><a href="#">Training</a></li>
            <li><a href="#">Ground Handling</a></li>
            <li><a href="#">SriLankan Holidays</a></li>
            <li><a href="#">SriLankan Catering</a></li>
          </ul>
        </div>

        {/* TERMS & CONDITIONS Section */}
        <div className="footerSection">
          <h4 className="sectionTitle">TERMS & CONDITIONS</h4>
          <ul>
            <li><a href="#">Online Booking Terms of Use</a></li>
            <li><a href="#">Conditions of Carriage</a></li>
            <li><a href="#">Notices For Travel Agents</a></li>
            <li><a href="#">Permission Center</a></li>
          </ul>
        </div>

      </div>

      {/* Social + Copyright */}
      <div className="bottomFooter flex">
        <div className="socialIcons flex">
          <TiSocialFacebook className="icon" />
          <TiSocialInstagram className="icon" />
          <TiSocialYoutube className="icon" />
          <TiSocialTwitter className="icon" />
        </div>
        <p>2025 © SriLankan IT Systems | Courtesy Design | Developed By @DasunSamarasingha</p>
      </div>
    </div>
  )
}

export default Footer
