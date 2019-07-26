// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Article from 'src/components/Article';

// Action Creators
import { findArticle } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  articles: state.articles,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  // findArticle: (id) => {
  //   dispatch(findArticle(id));
  // },
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
