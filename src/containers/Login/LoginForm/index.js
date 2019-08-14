// imports NPM
import { connect } from 'react-redux';

// imports locaux
import Field from 'src/components/Login/LoginForm';
// import { onInputChange } from '../../../store/reducer';
import { onInputChange } from 'src/store/reducer';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({

  InputChange: (name, value) => {
    // console.log('dispatch');
    dispatch(onInputChange(name, value));
  },
});

const FieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Field);

// export
export default FieldContainer;
