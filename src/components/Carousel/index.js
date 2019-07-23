// == Import : npm
import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import YouTube from 'react-youtube';

// == Import : local
import './carousel.scss';

// == Composant
class Carousel extends Component {
  state ={}
  render() {

    const opts = {
      height: '300',
      width: '600',
      playerVars: {
        controls: 0,
        modestBranding: 1,
        showInfo: 0,
      }
    };

    return (
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

          <YouTube
            videoId="TcZyiYOzsSw"
            opts={opts}
          />

          <YouTube
            videoId="8X2kIfS6fb8"
            opts={opts}
          />

          <YouTube
            videoId=" Gu8X7vM3Avw"
            opts={opts}
          />

        </Coverflow>

      </div>

    );
  }
}


// == Export
export default Carousel;
