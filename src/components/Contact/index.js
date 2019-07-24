import React from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';

import './contact.scss';

const Contact = () => (
  <div id="contact">
    <Form>
    <Form.Group widths='equal'>
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-first-name'
        label='First name'
        placeholder='First name'
      />
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        label='Last name'
        placeholder='Last name'
      />
    </Form.Group>
    </Form>
    <Form>
      <Form.Field>
        <label>E-mail</label>
        <input className="contactForm" label='Mail' placeholder='Your e-mail' />
      </Form.Field>
    </Form>
    <Form>
      <label>Message</label>
      <TextArea className="contactForm" placeholder='Your message' style={{ minHeight: 100 }} />
    </Form>
        <Button type='submit'>Submit</Button>
  </div>
)
export default Contact; 
