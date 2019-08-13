// == Import : npm
import React, { useEffect } from 'react';
import { Card, Icon, Image, Button, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local

import './articles.scss';
// import news from 'src/data/news';
import bignews from 'src/data/bignews';

// == Composant


export default function Articles({ articles, gamesList, getGames }) {
  useEffect(() => {
    getGames();
  }, []);

  const news = articles.newsOfTheWeek;
  const articlesList = articles.news;

  return (
    <>
      <h1 className="news-BigTitle">{bignews.bigTitle}</h1>
      <div id="divPincipal">
        <div className="news">
          <div id="news-title">
            <Link to={`/article/${bignews.id}`} exact><h2>{bignews.title}</h2></Link>
          </div>
          <div>
            <Link to={`/article/${bignews.id}`} exact>
              <div className="news-header">
                <img className="news-header-image" src={bignews.image} alt="" />
              </div>
            </Link>
          </div>
        </div>
        <div className="divSecondaire2">
          <div className="news-smallTitle"><h3>{bignews.smallTitle}</h3></div>
          {news.map(newss => (
            <div className="container" key={newss.id}>
              <div className="container-1">
                <Link to={`/article/${newss.id}`} exact>
                  <img className="container-1-img" src={newss.image} alt="" />
                </Link>
              </div>
              <div className="container-2">
                <Link to={`/article/${newss.id}`} exact>
                  <h3> {newss.title}</h3>
                </Link>
                <p>{newss.resume}</p>
                <div className="arrow">
                  <Link to={`/article/${newss.id}`} exact />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      {JSON.parse(sessionStorage.getItem('token'))
        && (
          <>
            <h1 className="news-BigTitle">YOUR PREFERENCIES</h1>
            <div className="user-preferencies">
              {
                gamesList.map((game) => {
                  return (
                    <Link key={game.id} to={`/games/${game.name}/${game.id}`} exact>
                      <Card id="cards-pref">
                        <Card.Header className="pref-head">{game.name}</Card.Header>
                        {/* <Card.Description className="pref-desc">{game.resume}</Card.Description> */}
                      </Card>
                    </Link>
                  );
                })
              }
            </div>
          </>
        )
      }
      <h1 className="news-BigTitle">{bignews.articlesTitle}</h1>
      <div id="articles">
        {
          articlesList.map((article) => {
            return (
              <Link key={article.id} to={`/article/${article.id}`} exact>
                <Card id="cards">
                  <div className="divimg">
                    <Image
                      className="image"
                      src={article.image}
                    />
                  </div>
                  <Card.Content>
                    <Card.Header>{article.title}</Card.Header>
                    <Card.Description className="card-resume">
                      {article.resume}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Button>Learn more</Button>
                  </Card.Content>
                </Card>
              </Link>
            );
          })
        }
      </div>
    </>
  );
}

Articles.propTypes = {
  articles: PropTypes.object.isRequired,
};
