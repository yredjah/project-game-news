// imports NPM
import { connect } from 'react-redux';

// imports locaux
import SignUp from 'src/components/SignUp';

const mapStateToProps = state => ({
  email: state.email,
  password: state.password,
  userName: state.userName,
  lastName: state.lastName,
  firstName: state.firstName,

});

const mapDispatchToProps = {};

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

// export
export default SignUpContainer;
