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
      height: '200',
      width: '150',
      playerVars: {
        modestbranding: 1,
        autohide: 1,
        showinfo: 0
      }
    };

  return (
    
    <div id="Carousel">

      <Coverflow
        className="media"
        displayQuantityOfSide={2}
        navigation={true}
        enableScroll
        clickable
        active={0}
        media={{
        '@media (max-width: 900px)': {
          width: '100%',
          height: '150px'
        },
        '@media (min-width: 900px)': {
          width: '100%',
          height: '320px'
        }
      }}
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
