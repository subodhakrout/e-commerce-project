import React from "react";
import "./Footer.css"

export default function Footer() {
  return (
    <>
      <div>
        <footer class="main-footer">
          <div class="container">
            <div class="footer-content">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div class="logo-widget footer-widget">
                    <figure class="logo-box"><a href="#"><img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="" /></a></figure>
                    <div class="text">
                      <p>Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure.</p>
                    </div>
                    <ul class="footer-social">
                      <li><a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                      <li><a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fab fa-vimeo-v"></i></a></li>
                      <li><a href="https://www.google.com" target="_blank"><i class="fab fa-google-plus-g"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 column">
                <div class="copyright"><a href="#">Subodha</a> &copy; 2019 All Right Reserved</div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 column">
                <ul class="footer-nav">
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}