import React from 'react';
import banner2 from '../../assets/playstore_2x.webp'
import phoneapp from '../../assets/phone-app.webp'
import appstore_2x from '../../assets/appstore_2x.webp'
import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
        <div className='Footertopbox'>
            <img src={phoneapp} alt="" />
            <div>
            <h2>TRY THE OLX APP</h2>
            <p>Buy, sell and find just about anything <br></br>using the app on your mobile.</p>
            </div>
            <div className="drawline">
            </div>
           
            <div className='gpay'>
                <h2>GET YOUR APP TODAY</h2>
                <img src={banner2} alt="" />
                <img src={appstore_2x} alt="" />
            </div>
        </div>
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>TRENDING LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Bhubaneshwar</li>
              <li>Hyderabad</li>
              <li>Chandigarh</li>
              <li>Nashik</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About OLX Group</li>
              <li>Careers</li>
             
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
              <li>Vulnerability Disclosure Program</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>Fellow</p>
          </div>
          <div className="list">
            <ul>
              <li>.</li>
              <li>.</li>
              <li>. </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Help - Sitemap</p>
        <p>All rights reserved © 2006-2024 OLX</p>
      </div>
    </div>
  );
}

export default Footer;
