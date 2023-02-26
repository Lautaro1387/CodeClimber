import React from 'react'

export const Landing = () => {
  return (
    <div className='all-landing'>
              <div class="big-wrapper">

        <header className='header-landing'>
          <div class="container-landing">
            <div class="logo-landing">
              <img src={require('../images/Logo.png')} />
            </div>

            <div class="links-landing">
              <ul className='ul-landing'>
              <li><a className='a-landing' href="/login" class="signin-landing">Sign In</a></li>
              <li><btn> <a className='a-landing' href="/signup" class="btn-landing">Sign Up</a></btn></li>
              </ul>
            </div>

            <div class="overlay-landing"></div>

            <div class="hamburger-menu-landing">
              <div class="bar-landing"></div>
            </div>
          </div>
        </header>

        <div class="showcase-area-landing">
          <div class="container-landing">
            <div class="left-landing">
              <div class="big-title-landing">
                <h1 className='h1-landing'>Code Climber</h1>
              </div>
              <p class="text-landing">
              Code Climber is a game that consists of answering programming questions, such as HTML, CSS, Javascript and Python
                , to test your skills and compete against other users
              </p>
              <div class="cta-landing">
                <a href="/signup" class="getstarted-landing">Get started</a>
              </div>
            </div>

            <div class="right-landing">
              <img src={require('../images/person.png')} />
            </div>
          </div>
        </div>
        <div class="bottom-area-landing">
          <div class="container-landing">
          </div>
        </div>
        <div className='container-pro'>
        <div className='card-pro'>
          <div className='icon-pro'><i class="fa-brands fa-python"></i></div>
          <div className='content-pro'>
              <h2>Python</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a felis sit amet felis aliquam tincidunt et at tellus. Sed ut lobortis metus,</p>
            </div>
        </div>
        <div className='card-pro'>
          <div className='icon-pro'><i class="fa-brands fa-js"></i></div>
            <div className='content-pro'>
              <h2>JavaScript</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a felis sit amet felis aliquam tincidunt et at tellus. Sed ut lobortis metus, id posuere justo. aliquet orci felis, id ultrices odio vulputate eu. Cras congue nibh vel ipsum vehiis euismod.ere neque.</p>
            </div>
        </div>
        <div className='card-pro'>
          <div className='icon-pro'><i class="fa-brands fa-css3-alt"></i></div>
          <div className='content-pro'>
              <h2>Css</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a felis sit amet felis aliquam tincidunt et at tellus. Sed ut lobortis metus, id posuere justo. aliquet orci felis, id ultrices odio vulputate eu. Cras congue nibh vel ipsum vehiis euismod.ere neque.</p>
            </div>
        </div>
        </div>
        <div className='footer-landing'>
          <div className='waves'>
          <div className='wave' id='wave1'></div>
          <div className='wave' id='wave2'></div>
          <div className='wave' id='wave3'></div>
          <div className='wave' id='wave4'></div>
          </div>
            <ul className='lists-landing'>
            <li className='li-footer' ><a className='a-footer'  href="/quiz"><i class="fa-brands fa-twitter"></i></a></li>
            <li className='li-footer' ><a className='a-footer'  href="/quiz"><i class="fa-brands fa-linkedin"></i></a></li>
            <li className='li-footer' ><a className='a-footer'  href="/quiz"><i class="fa-solid fa-envelope"></i></a></li>
            <li className='li-footer' ><a className='a-footer'  href="/quiz"><i class="fa-brands fa-github"></i></a></li>
            </ul>
            <ul className='footermenu-landing'>
            <li className='menu-footer' ><a className='amenu-footer'  href="/quiz">Home</a></li>
            <li className='menu-footer' ><a className='amenu-footer'  href="/quiz">About Us</a></li>
            <li className='menu-footer' ><a className='amenu-footer'  href="/quiz">Play</a></li>
            <li className='menu-footer' ><a className='amenu-footer'  href="/quiz">Contact</a></li>
            </ul>
            <p className='rights-landing' > ©2023 CodeClimber | All rights reserved </p>
        </div>
      </div>
      
    <script src="https://kit.fontawesome.com/a81368914c.js"></script>
    <script src="./app.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    </div>
  )
}

