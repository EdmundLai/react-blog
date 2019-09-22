import React from 'react';
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel';

import KoreanFood from '../../images/korean.jpg';
import HealthyFood from '../../images/healthy_v2.jpg';
import Fruits from '../../images/fruits_veggies.jpg';

class CarouselContainer extends React.Component {
  render() {
    const imgURLsArray = [KoreanFood, HealthyFood, Fruits];

    return (
      <div className="CarouselContainer">
        <h2>Portfolio</h2>
        <PhotoCarousel imgURLs={imgURLsArray}/>
      </div>
    );
  }
}

export default CarouselContainer;