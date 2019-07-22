// == Import : npm
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';

// == Import : local

import './carousel.scss';

// == Composant
const Carousel = () => (
  <div id="Carousel">
    <ReactCarousel infiniteLoop autoPlay>
      <div>
      <iframe width="1000" height="1000" src="https://www.youtube.com/embed/5oc_HnczBIU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="src/Assets/img/logo.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="src/Assets/img/logo.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </ReactCarousel>
  </div>
);

// == Export
export default Carousel;
