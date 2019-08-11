// == Import : npm
import React, {useEffect} from 'react';
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
  height: '315',
  width: '560',
  playerVars: {
    modestbranding: 1,
    autohide: 1,
    showinfo: 0,
  },
};

// == Composant
const Article = ({
  match,
  article,
  messagesList,
  newMessage,
  InputChange,
  addMessage,
  getArticle,
  addLike,
  addDislike,
}) => {
  // const article = articles.find(element => (
  //   // console.log(props.match.params);
  //   element.id === match.params.id
  // ));
  useEffect(() => {
    getArticle(parseInt(match.params.id, 10));
  }, []);

  const checkVideoExistance = () => {
    if (typeof article.videoId === 'undefined') {
      return (<img className="video" src={article.image} alt="" />);
    }
    // eslint-disable-next-line no-else-return
    else {
      return (
        <div className="video-container">
          <YouTube
            className="video"
            videoId={article.videoId}
            opts={opts}
          />
        </div>
      );
    }
  };
  const handleChange = (evt) => {
    const { name: fieldName, value: fieldValue } = evt.target;
    InputChange(fieldName, fieldValue);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log('submit handler');
    addMessage();
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
            <Button icon onClick={addLike}>
              <Icon name="thumbs up" />
              Like
            </Button>
            <Label as="a" basic pointing="left">
              {article.like}
            </Label>
          </Button>
          <Button as="div" labelPosition="left" onClick={addDislike}>
            <Label as="a" basic pointing="right">
              {article.dislike}
            </Label>
            <Button icon>
              <Icon name="thumbs down" />
                Dislike
            </Button>
          </Button>
        </div>
        <div className="form">
        Espace commentaire:
          <Form onSubmit={submitHandler} className="form-text">
            <TextArea
              onChange={handleChange}
              type="newMessage"
              value={newMessage}
              name="newMessage"
              placeholder="Ecrit tout commentaire ici..."
            />
            <Button>Envoyer</Button>
          </Form>
        </div>
        <div className="commentaries">

          <ul>
            {messagesList.map(message => (
              <li id="commentaries-list" key={message.id}>
                <h4>{message.username}</h4>
                <p className="date">{message.time}</p>
                <span>{message.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  match: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
  addMessage: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  addDislike: PropTypes.func.isRequired,
  InputChange: PropTypes.func.isRequired,
  getArticle: PropTypes.func.isRequired,
  newMessage: PropTypes.string.isRequired,
  messagesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};


// == Export
export default Article;
