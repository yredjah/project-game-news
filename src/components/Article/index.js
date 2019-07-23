// == Import : npm
import React from 'react';
import YouTube from 'react-youtube';
import { Icon, Form, TextArea, Button, Label } from 'semantic-ui-react';
import ShareLink from 'react-twitter-share-link';
import FacebookShareLink from 'react-facebook-share-link';

// == Import : local
import './article.scss';

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
const Article = () => (
  <div>
    <div id="Article">
      <YouTube
        className="video"
        videoId="qIcTM8WXFjk"
        opts={opts}
      />
      <h2 className="title">Cyberpunk 2077</h2>
      <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti itaque voluptas perferendis debitis. Consectetur modi dicta dolor accusamus? Omnis, temporibus obcaecati quasi recusandae ex officiis necessitatibus ipsam voluptates vel qui optio, accusantium animi rem mollitia repellat quod nemo, dolores atque numquam totam voluptatibus cumque. Itaque officiis saepe cumque. Facere repudiandae tempore quisquam perferendis quaerat quae harum, reprehenderit necessitatibus ipsum tenetur fugit, vero tempora. Officia similique reprehenderit debitis quia sint incidunt voluptatem unde, magni facere quod odio accusamus culpa praesentium eum vel, ducimus rem iste inventore dolore iusto vero provident dolor? Repellat, unde culpa! Facere architecto debitis, explicabo optio tenetur quae? Explicabo sed, molestiae ratione qui ut magnam aperiam. Odio ipsum tenetur facere fugiat, distinctio eveniet sed quas facilis deserunt esse eligendi, quod a autem sit aut, veniam omnis porro vel blanditiis voluptatibus corrupti. Reiciendis quae et quidem delectus earum quam quaerat. Natus nihil eum dolorem consectetur pariatur quia libero. Perspiciatis harum eaque molestias sed reiciendis. Voluptatibus numquam quos beatae nostrum dolorem quae voluptatem similique temporibus! Voluptatum totam at quos quisquam quaerat. Ab odit qui maiores! Eius voluptates, consectetur ex impedit dolorum est atque rerum explicabo inventore qui voluptatem quidem, quam aliquam enim nemo beatae cumque natus in. Ex consectetur quibusdam labore adipisci, dolor nostrum a? Harum, optio praesentium. Dolorem eius perferendis velit amet suscipit laboriosam rerum ipsa reprehenderit quisquam enim nulla accusamus dignissimos quis sequi nam accusantium architecto doloribus, ut corporis vel voluptas. Deleniti perspiciatis facilis nemo soluta animi, excepturi enim itaque iusto, quae corrupti recusandae explicabo fugiat officia.</p>
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

// == Export
export default Article;
