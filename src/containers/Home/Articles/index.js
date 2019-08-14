// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Articles from 'src/components/Home/Articles';

// Action Creators
// import { doSomething } from 'src/store/reducer';
import { getGamesList } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  articles: state.articles,
  gamesList: state.gamesList,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  getGames: () => {
    dispatch(getGamesList());
  },
});

// Container
const ArticlesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);

// == Export
export default ArticlesContainer;
