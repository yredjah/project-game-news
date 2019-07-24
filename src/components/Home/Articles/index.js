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
    <div id="articles">
      {
        articles.map((article) => {
          return (
            <Link to={`/article/${article.id}`} exact>
              <Card key={article.id} id="cards" className={classes.card}>
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
  );
}
