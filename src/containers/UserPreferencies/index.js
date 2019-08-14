// imports NPM
import { connect } from 'react-redux';

// imports locaux
import UserPreferencies from 'src/components/User/UserPreferencies';
import { getPreferencies, sendPreferencies, delPreferencies } from 'src/store/reducer';


const mapStateToProps = state => ({
  genres: state.genres,
  plateforms: state.categories,
  preferencies: state.preferencies,
});

const mapDispatchToProps = dispatch => ({
  getUserPreferencies: () => {
    dispatch(getPreferencies());
  },
  sendUserPreferencies: (name, category) => {
    dispatch(sendPreferencies(name, category));
  },
  delUserPreferencies: (name, category) => {
    dispatch(delPreferencies(name, category));
  },
});

const UserPreferenciesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPreferencies);

// export
export default UserPreferenciesContainer;
