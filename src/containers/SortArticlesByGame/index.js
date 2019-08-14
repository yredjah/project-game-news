// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SortArticlesByGame from 'src/components/SortArticlesByGame';

// Action Creators
import { getArticlesByGames } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  articlesSort: state.articlesSort,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  getArticlesByGames: (gameId) => {
    dispatch(getArticlesByGames(gameId));
  },
});

// Container
const SortArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortArticlesByGame);

// == Export
export default SortArticleContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/