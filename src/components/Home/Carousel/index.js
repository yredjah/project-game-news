// == Import : npm
import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import YouTube from 'react-youtube';

// == Import : local
import './carousel.scss';

// == Composant
class Carousel extends Component {
  state ={}

  render() {
    const opts = {
      height: '500',
      width: '300',
      playerVars: {
        modestbranding: 1,
        autohide: 1,
        showinfo: 0,
      },
    };
    return (
      <div id="Carousel">
        <ReactCarousel showThumbs={false}>
          <div>
            <YouTube
              videoId="TcZyiYOzsSw"
              opts={opts}
            />
          </div>
          <div>
            <YouTube
              videoId="qIcTM8WXFjk"
              opts={opts}
            />
          </div>
          <div>
            <YouTube
              videoId="ENjwexZnLPI"
              opts={opts}
            />
          </div>
          <div>
            <YouTube
              videoId="0GLbwkfhYZk"
              opts={opts}
            />
          </div>
          <div>
            <YouTube
              videoId="Zi8k4KGyW6o"
              opts={opts}
            />
          </div>
        </ReactCarousel>
      </div>
    );
  }
}


// == Export
export default Carousel;

