// imports NPM
import { connect } from 'react-redux';

// imports locaux
import Contact from 'src/components/Contact';
// import { onInputChange } from '../../../store/reducer';
import { onInputChange, onTextAreaChange, onsubmitContact } from 'src/store/reducer';

const mapStateToProps = state => ({
  firstName: state.firstName,
  lastName: state.lastName,
  email: state.email,
  contactMessage: state.contactMessage,
});

const mapDispatchToProps = dispatch => ({

  InputChange: (name, value) => {
    // console.log('dispatch');
    dispatch(onInputChange(name, value));
  },
  changeTextAreaValue: (name, value) => {
    // console.log('dispatch');
    dispatch(onTextAreaChange(name, value));
  },
  onSubmitContact: () => {
    dispatch(onsubmitContact());
  },
});

const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

// export
export default ContactContainer;
