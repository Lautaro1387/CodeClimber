import React from 'react'

export const Landing = () => {
  return (
    <div className='all-landing'>
              <div class="big-wrapper">
        <img src="./img/shape.png" alt="" class="shape" />

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
                <a href="#" class="getstarted-landing">Get started</a>
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
        <div className='footer-landing'>
          <div className='waves'>
          <div className='wave' id='wave1'></div>
          <div className='wave' id='wave2'></div>
          <div className='wave' id='wave3'></div>
          <div className='wave' id='wave4'></div>
          </div>
            <ul className='lists-landing'>
            <li className='li-footer' ><a className='a-footer'  href="/quiz"><i class="fa-sharp fa-solid fa-book"></i></a></li>
            <li className='li-footer' ><a className='a-footer'  href="/quiz"><i class="fa-sharp fa-solid fa-book"></i></a></li>
            <li className='li-footer' ><a className='a-footer'  href="/quiz"><i class="fa-sharp fa-solid fa-book"></i></a></li>
            <li className='li-footer' ><a className='a-footer'  href="/quiz"><i class="fa-sharp fa-solid fa-book"></i></a></li>
            </ul>
            <ul className='footermenu-landing'>
            <li className='menu-footer' ><a className='amenu-footer'  href="/quiz">Home</a></li>
            <li className='menu-footer' ><a className='amenu-footer'  href="/quiz">Home</a></li>
            <li className='menu-footer' ><a className='amenu-footer'  href="/quiz">Home</a></li>
            <li className='menu-footer' ><a className='amenu-footer'  href="/quiz">Home</a></li>
            </ul>
            <p className='rights-landing' > © CodeClimber hates Homosexuals kKkKKKkKKkkk | All rights reserved 2023</p>
        </div>
      </div>
      
    <script src="https://kit.fontawesome.com/a81368914c.js"></script>
    <script src="./app.js"></script>

    </div>
  )
}

