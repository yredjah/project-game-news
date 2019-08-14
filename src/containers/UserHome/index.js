// imports NPM
import { connect } from 'react-redux';

// imports locaux
import UserHome from 'src/components/User/UserHome';
import { getUserInfo } from 'src/store/reducer';


const mapStateToProps = state => ({
  userName: state.userInfo.userName,
  firstName: state.userInfo.firstName,
  lastName: state.userInfo.lastName,
  mail: state.userInfo.mail,
  role: state.userInfo.role,
});

const mapDispatchToProps = dispatch => ({
  userInfo: () => {
    dispatch(getUserInfo());
  },
});

const UserHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserHome);

// export
export default UserHomeContainer;
