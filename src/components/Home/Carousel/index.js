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
    this.videoLinks = [];
    const { articles } = this.props;
    console.log(articles);
    const articlesList = articles.newsOfTheWeek;
    // if(articlesList)
    articlesList.forEach((article) => {
      if (article.videoId !== '') {
        this.videoLinks.push({
          link: article.videoId,
          title: article.title,
        });
      }
    });
  }

  render() {
    const opts = {
      height: '560',
      width: '315',
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
            <div className="video-container-carousel video-wrapper" key={video.link}>
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
  articles: PropTypes.object.isRequired,
};


// == Export
export default Carousel;
