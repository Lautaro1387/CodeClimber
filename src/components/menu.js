import React from 'react';
import Aboutus from './about.js';
export const Menu = () => {
    return (
        <div>
            <h1 className='title-main'>Code Climber</h1>
            <p className='info-main'>Code Climber is a game that consists of answering programming questions, such as HTML, CSS, Javascript and Python
                , to test your skills and compete against other users.</p>
            <div className='container-main'>
                <a href='/quiz/html' className='link-project'>
                    <div className='container-menu'>
                        <img
                            className='img-medals'
                            src='https://imgs.search.brave.com/LsLHD6ZjCe-nruurMz3p8BUwFC88DaWnJMB3bHX_pSU/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvNjEwLzYxMDMz/My5wbmc'
                            alt='medals' />
                        <div>
                            <p className='name-project'>HTML</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className='container-main'>
                <a href='/quiz/css' className='link-project'>
                    <div className='container-menu'>
                        <img
                            className='img-medals'
                            src='https://imgs.search.brave.com/LsLHD6ZjCe-nruurMz3p8BUwFC88DaWnJMB3bHX_pSU/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvNjEwLzYxMDMz/My5wbmc'
                            alt='medals' />
                        <div>
                            <p className='name-project'>CSS</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className='container-main'>
                <a href='/quiz/javascript' className='link-project'>
                    <div className='container-menu'>
                        <img
                            className='img-medals'
                            src='https://imgs.search.brave.com/LsLHD6ZjCe-nruurMz3p8BUwFC88DaWnJMB3bHX_pSU/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvNjEwLzYxMDMz/My5wbmc'
                            alt='medals' />
                        <div>
                            <p className='name-project'>JavaScript</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className='container-main'>
                <a href='/quiz/python' className='link-project'>
                    <div className='container-menu'>
                        <img
                            className='img-medals'
                            src='https://imgs.search.brave.com/LsLHD6ZjCe-nruurMz3p8BUwFC88DaWnJMB3bHX_pSU/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvNjEwLzYxMDMz/My5wbmc'
                            alt='medals' />
                        <div>
                            <p className='name-project'>Python</p>
                        </div>
                    </div>
                </a>
            </div>
            <footer>
                <Aboutus />
            </footer>
        </div>
    )
}