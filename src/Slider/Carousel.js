import React from 'react';
import './Slider.css';

import { Slider } from 'react-slick';

function Carousel() {

    return (
        <div className="carouselContainer">
            <Slider>
                <div>
                    <img className="carouselImage" src="https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg" />
                </div>
                <div>
                    <img className="carouselImage" src="https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg" />
                </div>
                <div>
                    <img className="carouselImage" src="https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg" />
                </div>
            </Slider>
        </div>
    )
}

export default Carousel;
