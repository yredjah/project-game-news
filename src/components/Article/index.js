// == Import : npm
import React from 'react';
import YouTube from 'react-youtube';
import { Icon, Form, TextArea, Button, Label } from 'semantic-ui-react';
import ShareLink from 'react-twitter-share-link';
import FacebookShareLink from 'react-facebook-share-link';
import PropTypes from 'prop-types';

// == Import : local
import './article.scss';

// import { findArticle } from '../../store/reducer';
// import articles from 'src/data';

const opts = {
  height: '300',
  width: '600',
  playerVars: {
    modestbranding: 1,
    autohide: 1,
    showinfo: 0,
  },
};

// == Composant
const Article = ({ match, articles }) => {

  const article = articles.find(element => (
    // console.log(props.match.params);
    element.id===match.params.id
  ));

  const checkVideoExistance = () => {
    if (typeof article.videoId === 'undefined') {
      return (<img className="video" src={article.image} alt="" />);
    }
    // eslint-disable-next-line no-else-return
    else {
      return (
        <YouTube
          className="video"
          videoId={article.videoId}
          opts={opts}
        />
      );
    }
  };

  return (
    <div>
      <div id="Article">
        {checkVideoExistance()}
        <h2 className="title">{article.title}</h2>
        <p className="text">{article.text}</p>
      </div>
      <div className="communication">
        <div className="share-link">
          <ShareLink>
            {link => (
              <a href={link}><Icon name="twitter square" color="blue" size="big" /></a>
            )}
          </ShareLink>
          <FacebookShareLink>
            {link => (
              <a href={link}><Icon name="facebook official square" color="blue" size="big" /></a>
            )}
          </FacebookShareLink>
          <Button as="div" labelPosition="right">
            <Button icon>
              <Icon name="thumbs up" />
              Like
            </Button>
            <Label as="a" basic pointing="left">
              2,048
            </Label>
          </Button>
          <Button as="div" labelPosition="left">
            <Label as="a" basic pointing="right">
              2,048
            </Label>
            <Button icon>
              <Icon name="thumbs down" />
                Dislike
            </Button>
          </Button>
        </div>
        <div className="form">
        Espace commentaire:
          <Form className="form-text">
            <TextArea placeholder="Ecrit tout commentaire ici..." />
          </Form>
          <Button>Envoyer</Button>
        </div>
        <div className="commentaries">
          <h4>xXblackShadowDu30Xx</h4>
          <p className="date">10H34, 11/11/1111</p>
          <p>trololololololololo</p>
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  match: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
};


// == Export
export default Article;
