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

// == Import : local

import './articles.scss';

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
      <Card id="cards" className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="src/Assets/img/wow.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Wow classic
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card id="cards" className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="src/Assets/img/battle.jpeg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Battlefield V
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card id="cards" className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="src/Assets/img/cyber.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cyberpunk 2077
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card id="cards" className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="src/Assets/img/last.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              The Last of Us Part II
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

      <Card id="cards" className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="src/Assets/img/watch.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Watch Dogs 3
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis praesentium ex accusantium maiores vero inventore earum voluptas quo iure.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
