// == Import : npm
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

// == Import : local

import './articles.scss';
import articles from 'src/data';
import news from 'src/data/news';
import bignews from 'src/data/bignews';

// == Composant
const useStyles = makeStyles({
  card: {
    maxWidth: 500,
  },
  media: {
    height: 250,
  },
});

export default function Articles() {
  const classes = useStyles();

  return (
    <>
      <h1 className="news-BigTitle">{bignews.bigTitle}</h1>
      <div id="divPincipal">
        <div className="news">
          <div id="news-title">
            <p>{bignews.title}</p>
          </div>
          <div>
            <div className="news-header">
              <img className="news-header-image" src={bignews.image} alt="" />
            </div>
          </div>
        </div>
        <div className="divSecondaire2">
          <div className="news-smallTitle"><h3>{bignews.smallTitle}</h3></div>
          {news.map(newss => (
            <div className="container" key={newss.id}>
              <div className="container-1">
                <Link to={`/${newss.title}`} exact>
                  <img className="container-1-img" src={newss.image} alt="" />
                </Link>
              </div>
              <div className="container-2">
                <Link to={`/${newss.title}`} exact>
                  <h3> {newss.title}</h3>
                </Link>
                <p>{newss.resume}<Link className="arrow" to={`/${newss.title}`} exact /></p>
              </div>
            </div>
          ))
        }
        </div>
      </div>


      <h1 className="news-BigTitle">{bignews.articlesTitle}</h1>
      <div id="articles">
        {
          articles.map((article) => {
            return (
              <Link key={article.id} to={`/article/${article.id}`} exact>
                <Card id="cards" className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={article.image}
                      title={article.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {article.resume}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Link>
            );
          })
        }
      </div>
    </>
  );
}
