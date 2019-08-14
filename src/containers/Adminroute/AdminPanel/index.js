// imports NPM
import { connect } from 'react-redux';

// imports locaux
import AdminPanel from 'src/components/Adminroute/AdminPanel';
import { onsubmitArticle, onInputChange } from 'src/store/reducer';

const mapStateToProps = state => ({
  creatGameName: state.creatGameName,
  creatTitle: state.creatTitle,
  creatText: state.creatText,
  createResume: state.createResume,
  creatVideo: state.creatVideo,
  creatImage: state.creatImage,
  creatPlatform: state.creatPlatform,
  creatPlatform2: state.creatPlatform2,
  creatPlatform3: state.creatPlatform3,
  creatGenre: state.creatGenre,
  creatGenre2: state.creatGenre2,
  creatGenre3: state.creatGenre3,
});

const mapDispatchToProps = dispatch => ({
  InputChange: (name, value) => {
    dispatch(onInputChange(name, value));
  },
  onSubmitForm: () => {
    dispatch(onsubmitArticle());
  },

});

const AdminPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPanel);

// export
export default AdminPanelContainer;
