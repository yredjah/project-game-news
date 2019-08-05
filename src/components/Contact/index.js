import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, TextArea } from 'semantic-ui-react';

import './contact.scss';

const Contact = ({
  InputChange,
  contactMessage,
  changeTextAreaValue,
  firstName, 
  lastName,
  email,
  onSubmitContact,
}) => {
  const submitHandler = (event) => {
    event.preventDefault();

    onSubmitContact();
  };

  const changeHandler = (event) => {
    InputChange(event.target.name, event.target.value);
    changeTextAreaValue(event.target.value);
  };

  return (
  <div id="contact">
    <Form onSubmit={submitHandler}>
    <Form.Group widths='equal'>
      <Form.Input
        onChange={changeHandler}
        value={firstName}
        fluid
        id='form-subcomponent-shorthand-input-first-name'
        label='First name'
        name={firstName}
        placeholder='First name'
      />
      <Form.Input
        onChange={changeHandler}
        value={lastName}
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        label='Last name'
        name={lastName}
        placeholder='Last name'
      />
    </Form.Group>
      <Form.Field>
        <label>E-mail</label>
        <input 
        onChange={changeHandler}
        value={email}
        className="contactForm" 
        label='Mail' 
        name={email} 
        placeholder='Your e-mail' />
      </Form.Field>
      <label>Message</label>
      <TextArea 
      className="contactForm" 
      placeholder='Your message' 
      style={{ minHeight: 100 }} 
      onChange={changeHandler}
      value={contactMessage}
      name={contactMessage}
      />
  
        <Button type='submit'>Submit</Button>
      </Form>
  </div>
);
  }

Contact.propTypes = {
  lastName: PropTypes.string.isRequired,  
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  InputChange: PropTypes.func.isRequired,
  contactMessage: PropTypes.string.isRequired,
  changeTextAreaValue: PropTypes.func.isRequired,
  onSubmitContact: PropTypes.func.isRequired,
};

export default Contact; 
