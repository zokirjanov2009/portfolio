import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <div className="main-footer">
          <div className="footer-text">
            <h1>Ready to make something kickass?</h1>
            <h2>Let's get on a call.</h2>
          </div>
          <div className="footer-creator">
            <h2>Zokirjanov Akbarjon</h2>
            <p>Uzbekistan, Namangan</p>
            <p>Phone number:<a href="/">+998 91 369-54-04</a></p>
            <div className="informations">
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Dribble</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Services</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Instagram</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Experience</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Projects</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;