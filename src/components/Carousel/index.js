// == Import : npm
import React from 'react';
import Coverflow from 'react-coverflow';

// == Import : local
import './carousel.scss';

// == Composant
const Carousel = () => (
  <div id="Carousel">
    <Coverflow
      width="960"
      height="500"
      displayQuantityOfSide={2}
      navigation={true}
      enableScroll
      clickable
      active={0}
    >
      <iframe title="wow" width="560" height="315" src="https://www.youtube.com/embed/TcZyiYOzsSw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe title="cyber" width="560" height="315" src="https://www.youtube.com/embed/8X2kIfS6fb8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Gu8X7vM3Avw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture" allowFullScreen></iframe>
    </Coverflow>
  </div>
);

// == Export
export default Carousel;
