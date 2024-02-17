import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="colophon" className="site-footer">
      <div className="wrapper">
        <div className="flex_container flex_two">
          <div className="flex_item one_third">
            <a href="/">
              <div className="footer-logo"></div>
            </a>
            <div className="footer-content">
              <p>The event specialists at our Southern California headquarters are available to help with every aspect of your event.</p>
            </div>
            <hr />
          </div>
          <div className="flex_item two_thirds">
            <nav className="footer-menu">
              <ul>
                <li><a href="https://24carrots.com/about/">About</a></li>
                <li><a href="https://24carrots.com/services/">Services</a></li>
                <li><a href="https://24carrots.com/events/">Events</a></li>
                <li><a href="https://24carrots.com/venues/">Venues</a></li>
                <li><a href="https://24carrots.com/careers/">Careers</a></li>
                <li><a href="https://24carrots.com/contact/">Contact</a></li>
                <li className="social-menu">
                  <a href="https://www.facebook.com/24carrotscatering" target="_blank" rel="noopener">Facebook</a>
                  <a href="https://www.instagram.com/24carrotscatering/" target="_blank" rel="noopener">Instagram</a>
                  <a href="https://www.pinterest.com/24carrotscaters/" target="_blank" rel="noopener">Pinterest</a>
                  <a href="https://www.linkedin.com/company/24-carrots-catering-&-events/" target="_blank" rel="noopener">Linkedin</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex_container flex_two">
          <div className="flex_item one_third">
            <div className="footer-info">
              <div className="footer-info-block">
                <p><strong>Call Us</strong> 714.942.6000 • 800.717.1545</p>
              </div>
              <div className="footer-info-block">
                <p><strong>Email us</strong> <a href="mailto:info@24carrots.com">info@24carrots.com</a></p>
              </div>
              <div className="footer-info-block">
                <p><strong>Find us</strong>150 Baker Street East, Costa Mesa, CA 92626</p>
              </div>
            </div>
          </div>
          <div className="flex_item two_thirds">
            <p className="website-by">
              <a href="https://dooleycreativeco.com/">
                Site & design by Dooley Creative Co.
                <span className="dc-logo desktop-only"></span>
              </a>
            </p>
          </div>
        </div>
        <hr className="footer-break" />
        <div className="flex_container flex_two">
          <div className="flex_item">
            <p className="copyright">© 2023 24 Carrot Catering & Events. All rights reserved.</p>
          </div>
          <div className="flex_item">
            <nav className="legal-menu">
              <ul>
                <li><a href="https://24carrots.com/ada-accessibility-policy/">ADA Accessibility Policy</a></li>
                <li><a href="https://24carrots.com/privacy-policy/">Privacy Policy</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <p className="website-by mobile-only">
          <a href="https://dooleycreativeco.com/">
            <span className="dc-logo"></span><br />
            Site & design by Dooley Creative Co.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
