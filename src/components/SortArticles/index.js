// == Import : npm
import React, {useEffect} from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import 'src/components/Home/Articles/articles.scss';

// == Composant
const SortArticles = ({ match, getSortArticlesByPlateform, getSortArticlesByGenre, articlesSort }) => {
  const type = match.params.type;
  const category = match.params.category;

  useEffect(() => {
    if (type === 'plateform') {
      getSortArticlesByPlateform(category);
    }
    if (type === 'genre') {
      getSortArticlesByGenre(category);
    }
  }, []);

  return (
    <div>
      <h1 className="news-BigTitle">sort by {type} {category}</h1>
      <div id="articles">
        {
          articlesSort.map((article) => {
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
    </div>
  );
};

SortArticles.propTypes = {
  getSortArticles: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  articlesSort: PropTypes.array.isRequired,
};

// == Export
export default SortArticles;
