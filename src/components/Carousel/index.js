// == Import : npm
import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import YouTube from 'react-youtube';

// == Import : local
import './carousel.scss';

// == Composant
class Carousel extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { 
        autoplay: 1
      }
    };
    return (
      <div id="Carousel">
      <Coverflow
        width="640"
        height="390"
        displayQuantityOfSide={2}
        navigation={true}
        enableScroll
        clickable
        active={0}
      >
        <YouTube
          videoId="TcZyiYOzsSw"
          opts={opts}
          onReady={this._onReady}
        />
        <YouTube
          videoId="8X2kIfS6fb8"
          opts={opts}
          onReady={this._onReady}
        />
        <YouTube
          videoId="fb1MR85XFOc"
          opts={opts}
          onReady={this._onReady}
        />
        <YouTube
          videoId="W01L70IGBgE"
          opts={opts}
          onReady={this._onReady}
        />
        <YouTube
          videoId="Zi8k4KGyW6o"
          opts={opts}
          onReady={this._onReady}
        />
      </Coverflow>
    </div>
  );
}
  _onReady(event) {
    event.target.pauseVideo();
  }
}

// == Export
export default Carousel;

/*<iframe width="560" height="315" src="https://www.youtube.com/embed/TcZyiYOzsSw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/8X2kIfS6fb8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/fb1MR85XFOc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/W01L70IGBgE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Zi8k4KGyW6o" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>*/
