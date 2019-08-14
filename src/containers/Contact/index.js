// imports NPM
import { connect } from 'react-redux';

// imports locaux
import Contact from 'src/components/Contact';
// import { onInputChange } from '../../../store/reducer';
import { onInputChange, onSubmitContact } from 'src/store/reducer';

const mapStateToProps = state => ({
  contactFirstName: state.contactFirstName,
  contactLastName: state.contactLastName,
  contactEmail: state.contactEmail,
  contactMessage: state.contactMessage,
});

const mapDispatchToProps = dispatch => ({

  InputChange: (name, value) => {
    // console.log('dispatch');
    dispatch(onInputChange(name, value));
  },
  onSubmitContact: () => {
    dispatch(onSubmitContact());
  },
});

const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

// export
export default ContactContainer;
