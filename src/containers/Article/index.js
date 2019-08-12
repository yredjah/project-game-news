// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Article from 'src/components/Article';
import {
  onsubmitCommentary,
  getCommentary,
  onInputChange,
  getOneArticle,
  addALike,
  addADislike,
} from 'src/store/reducer';


// Action Creators
// import { findArticle } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  article: state.article,
  messagesList: state.messagesList,
  newMessage: state.newMessage,

});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  InputChange: (name, value) => {
    dispatch(onInputChange(name, value));
  },
  onSubmitForm: () => {
    console.log('add message');
    dispatch(onsubmitCommentary());
  },
  getAllCommentary: (articleId) => {
    dispatch(getCommentary(articleId));
  },
  getArticle: (articleId) => {
    console.log('add message');
    dispatch(getOneArticle(articleId));
  },
  addLike: () => {
    console.log('add message');
    dispatch(addALike());
  },
  addDislike: () => {
    console.log('add message');
    dispatch(addADislike());
  },
});

// Container
const ArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Article);

// == Export
export default ArticleContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
