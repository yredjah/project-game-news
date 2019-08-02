// imports NPM
import { connect } from 'react-redux';

// imports locaux
import ForgottenPassword from 'src/components/ForgottenPassword';

const mapStateToProps = state => ({
  email: state.email,
});

const mapDispatchToProps = {};

const ForgottenPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgottenPassword);

// export
export default ForgottenPasswordContainer;
