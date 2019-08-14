// == Import : npm
import React, { useEffect } from 'react';
import { Card, Icon, Image, Button, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local

import './articles.scss';

// == Composant


export default function Articles({ articles, gamesList, getGames }) {
  useEffect(() => {
    getGames();
  }, []);

  const news = articles.newsOfTheWeek;
  const articlesList = articles.news;

  return (
    <>
      <h1 className="news-BigTitle">News of the week</h1>
      <div id="divPincipal">
        <div className="news">
          <div id="news-title">
            <Link to={`/article/${news[0].id}`} exact><h2>{news[0].title}</h2></Link>
          </div>
          <div>
            <Link to={`/article/${news[0].id}`} exact>
              <div className="news-header">
                <img className="news-header-image" src={news[0].image} alt="" />
              </div>
            </Link>
          </div>
        </div>
        <div className="divSecondaire2">
          <div className="news-smallTitle"><h3>last news</h3></div>
          {news.map((newss, index) => {
            if (index !== 0) {
              return (
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
              );
            }
          })}
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
                        <button class="buttonv5">{game.name}</button>
                    </Link>
                  );
                })
              }
            </div>
          </>
        )
      }
      <h1 className="news-BigTitle">Articles</h1>
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
