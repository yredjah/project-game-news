// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Home from 'src/components/Home';

// Action Creators
// import { doSomething } from 'src/store/reducer';
import { getArticle } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({

});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  getListArticles: () => {
    dispatch(getArticle());
  },
});

// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// == Export
export default HomeContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
