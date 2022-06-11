import React from 'react';
import './footer.scss';
import { GrFacebookOption } from 'react-icons/gr';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <GrFacebookOption />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
      <div className="links">
        <span>Audio and Subtitles</span>
        <span>Audio Description</span>
        <span>Help Center</span>
        <span>Gift Cards</span>
        <span>Media Center</span>
        <span>Investor Relations</span>
        <span>Jobs</span>
        <span>Terms of Use</span>
        <span>Privacy</span>
        <span>Legal Notices</span>
        <span>Cookie Preferences</span>
        <span>Corporate Information</span>
        <span>Contact us</span>
      </div>
      <div className="service">Service Code</div>
      <div className="copyright">© 1997 - 2022 Netflix, Inc.</div>
    </div>
  );
};

export default footer;
