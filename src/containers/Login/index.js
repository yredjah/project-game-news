// imports NPM
import { connect } from 'react-redux';

// imports locaux
import Login from 'src/components/Login';
import { onsubmitLogin } from 'src/store/reducer';

const mapStateToProps = state => ({
  loginEmail: state.loginEmail,
  loginPassword: state.loginPassword,
});

const mapDispatchToProps = dispatch => ({
  onSubmitForm: () => {
    dispatch(onsubmitLogin());
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

// export
export default LoginContainer;
