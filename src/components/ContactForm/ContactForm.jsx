import React, { Component } from 'react';
import shortid from 'shortid';
import Name from '../Name'
import Number from '../Number'

class ContactForm extends Component {
    state = {
      name: '',
      number: ''
    };
    
    loginInputNameId = shortid.generate(); 
    loginInputNamberId = shortid.generate(); 
  
    hendleInputChange = event => {
      const {value, name} = event.currentTarget;
      this.setState({ [name]: value });
    }

    handleSubmit = event => {
      event.preventDefault();
      this.props.onSubmitForm(this.state)
      this.reset()
    };
    
    reset = () => {
      this.setState({ name: '', number: '' })
    };
  
    render() {
      const { name, number } = this.state;
      
      return (
        <form onSubmit = {this.handleSubmit}>
          
          <Name
            name={name}
            hendleInputChange={this.hendleInputChange}
            idInput={this.loginInputNameId}
            htmlFor={this.loginInputNameId}
          />

          <Number
            number={number}
            hendleInputChange={this.hendleInputChange}
            idInput={this.loginInputNamberId}
            htmlFor={this.loginInputNamberId}
          />
          
          <button type="submit">Add contact</button>
        </form>
      )
    }
}

export default ContactForm;