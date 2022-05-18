import React from 'react'
import './footer.css'
function Footer() {
  return (
   <div className="footer-dark">
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-3 item">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web design</a></li>
            <li><a href="#">Development</a></li>
            <li><a href="#">Hosting</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3 item">
          <h3>About</h3>
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="col-md-6 item text">
          <h3>Telicom Movie</h3>
          <p> HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
        </div>
        <div className="col item social">
            <a href="#"><i className="icon ion-social-facebook"  /></a>
            <a href="#"><i className="icon ion-social-twitter" /></a>
            <a href="#"><i className="icon ion-social-snapchat" /></a>
            <a href="#"><i className="icon ion-social-instagram" /></a></div>
      </div>
      <p className="copyright">© 2022 STAR. All Rights Reserved.</p>
    </div>
  </footer>
</div>

  )
}

export default Footer