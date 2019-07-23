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
        modestbranding: 1,
        autohide: 1,
        showinfo: 0
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
            videoId="qIcTM8WXFjk"
            opts={opts}
          />

          <YouTube
            videoId="ENjwexZnLPI"
            opts={opts}
          />

        </Coverflow>

      </div>

    );
  }
}


// == Export
export default Carousel;
