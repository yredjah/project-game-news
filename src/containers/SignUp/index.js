// imports NPM
import { connect } from 'react-redux';

// imports locaux
import SignUp from 'src/components/SignUp';
import { onsubmitRegister } from 'src/store/reducer';

const mapStateToProps = state => ({
  registerEmail: state.registerEmail,
  registerPassword: state.registerPassword,
  registerUserName: state.registerUserName,
  registerLastName: state.registerLastName,
  registerFirstName: state.registerFirstName,

});

const mapDispatchToProps = dispatch => ({
  onSubmitForm: () => {
    dispatch(onsubmitRegister());
  },
});

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

// export
export default SignUpContainer;
