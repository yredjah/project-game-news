// imports NPM
import { connect } from 'react-redux';

// imports locaux
import AdminPanel from 'src/components/AdminPanel';
import { onsubmitArticle, onInputChange } from 'src/store/reducer';

const mapStateToProps = state => ({
  creatGameName: state.creatGameName,
  creatTitle: state.creatTitle,
  creatText: state.creatText,
  creatVideo: state.creatVideo,
  creatImage: state.creatImage,
  creatPlatform: state.creatPlatform,
  creatGenre: state.creatGenre,
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
