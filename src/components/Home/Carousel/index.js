// == Import : npm
import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

// == Import : local
import './carousel.scss';

// == Composant
class Carousel extends Component {
  state ={}

  videoLinks = [];

  getVideo() {
    const { articles } = this.props;
    let nbOfVideo = 0;
    let index = articles.length - 1;
    while (nbOfVideo < 4) {
      if (typeof (articles[index].videoId) !== 'undefined') {
        this.videoLinks.push({
          link: articles[index].videoId,
          title: articles[index].title,
        });
        nbOfVideo += 1;
      }
      index -= 1;
    }
  }

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
    this.getVideo();
    return (
      <div id="Carousel">
        <ReactCarousel showThumbs={false}>
          {this.videoLinks.map(video => (
            <div key={video.link}>
              <YouTube
                videoId={video.link}
                opts={opts}
              />
              <p className="legend">{video.title}</p>
            </div>
          ))}
        </ReactCarousel>
      </div>
    );
  }
}

Carousel.propTypes = {
  articles: PropTypes.array.isRequired,
};


// == Export
export default Carousel;
