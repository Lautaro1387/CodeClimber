import React from 'react'

const Aboutus = () => {
    return (
        <div>
            <div class="container-about">
                <div class="card-about">
                    <div class="content-about">
                        <div class="imgBx">
                            <img src={require('../images/Lautaro.jpg')} alt="Logo" className="logo-about" />
                        </div>
                        <div class="contentBx">
                            <h4>Lautaro Illa</h4>
                            <h5 className='lautros'>Project Manager <br></br>Front End Developer</h5>
                        </div>
                        <div class="sci">
                            <a href="https://github.com/Lautaro1387" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/lautaro-illa-32574b231/" target="_blank"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
                            <a href="mailto:lautaro12387@gmail.com" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>

                <div class="card-about">
                    <div class="content-about">
                        <div class="imgBx">
                            <img src={require('../images/santoreco.jpg')} alt="Logo" className="logo-about" />
                        </div>
                        <div class="contentBx">
                            <h4>Santiago Alves </h4>
                            <h5>Front End Developer</h5>
                        </div>
                        <div class="sci">
                            <a href="https://github.com/santialvesz" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/lautaro-illa-32574b231/" target="_blank"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
                            <a href="mailto:lautaro12387@gmail.com" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div class="card-about">
                    <div class="content-about">
                        <div class="imgBx">
                            <img src={require('../images/Marcelo.jpg')} alt="Logo" className="logo-about" />
                        </div>
                        <div class="contentBx">
                            <h4 className='marce'>Marcelo Rodriguez</h4>
                            <h5>Front End Developer</h5>
                        </div>
                        <div class="sci">
                            <a href="https://github.com/Lautaro1387" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/lautaro-illa-32574b231/" target="_blank"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
                            <a href="mailto:marcelorodb@gmail.com" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div class="card-about">
                    <div class="content-about">
                        <div class="imgBx">
                            <img src={require('../images/Felipe.jpg')} alt="Logo" className="logo-about" />
                        </div>
                        <div class="contentBx">
                            <h4>Felipe Sandim</h4>
                            <h5>Back End Developer</h5>
                        </div>
                        <div class="sci">
                            <a href="https://github.com/m1dnas" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/felipe-sandim-616672242/" target="_blank"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
                            <a href="mailto:felipesandimguliermone@gmail.com" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div class="card-about">
                    <div class="content-about">
                        <div class="imgBx">
                            <img src={require('../images/Vico.jpg')} alt="Logo" className="logo-about" />
                        </div>
                        <div class="contentBx">
                            <h4 className='vico'>Victoria Marquez</h4>
                            <h5>Back End Developer</h5>
                        </div>
                        <div class="sci">
                            <a href="https://github.com/vicomarquez" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/victoria-m%C3%A1rquez-819369247/" target="_blank"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
                            <a href="mailto:vicomarquezmu@gmail.com" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='reference-about'>
            </div>
        </div>
    )
}

export default Aboutus