import React from 'react'

const Landing = () => {
  return (
    <div className='all-landing'>
              <div class="big-wrapper light">
        <img src="./img/shape.png" alt="" class="shape" />

        <header className='header-landing'>
          <div class="container-landing">
            <div class="logo-landing">
              <img src="../images/default.png" alt="Logo" />
              <h3 className='h3-landing'>Danvo in a new branch</h3>
            </div>

            <div class="links-landing">
              <ul className='ul-landing'>
              <li><a className='a-landing' href="#" class="signin-landing">Sign In</a></li>
              <li><btn> <a className='a-landing' href="#" class="btn-landing">Sign Up</a></btn></li>
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
                <h1 className='h1-landing'>Future is here,</h1>
                <h1 className='h1-landing'>Start Exploring now.</h1>
              </div>
              <p class="text-landing">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!
              </p>
              <div class="cta-landing">
                <a href="#" class="btn-landing">Get started</a>
              </div>
            </div>

            <div class="right-landing">
              <img src="./img/person.png" alt="Person Image" class="person-landing" />
            </div>
          </div>
        </div>

        <div class="bottom-area-landing">
          <div class="container-landing">
            <button class="toggle-btn-landing">
              <i className='i-landing' class="far fa-moon"></i>
              <i className='i-landing' class="far fa-sun"></i>
            </button>
          </div>
        </div>
      </div>

    <script src="https://kit.fontawesome.com/a81368914c.js"></script>
    <script src="./app.js"></script>
    </div>
  )
}

export default Landing