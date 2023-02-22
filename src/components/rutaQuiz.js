import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";



const Circles = () => {
    const { category, pagination } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/quiz/${category}?p=${pagination}`);
            const data = await response.json();
        };
        fetchData();
    }, [category, pagination]);

    return (
        <div className='container-circles'>
            <div className='circle-1'>
                <div className='circle-2'>
                    <div className='tosco'>
                        <a href='/quiz/html/1' className='link-btn'><i class="fa-solid fa-trophy fa-3x"></i></a>
                    </div>
                </div>
            </div>
            <div className='rectangulo'>
            </div>
            <div className='circle-1'>
                <div className='circle-2'>
                    <div className='tosco'>
                        <a href='/quiz/${category}/2' className='link-btn'><i class="fa-solid fa-trophy fa-3x"></i></a>
                    </div>
                </div>
            </div>

            <div className='circle-1'>
                <div className='circle-2'>
                    <div className='tosco'>
                        <a href='/quiz/html/3' className='link-btn'><i class="fa-solid fa-trophy fa-3x"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Circles;