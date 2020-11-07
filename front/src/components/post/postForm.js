import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostForm extends Component {
    
    renderField = ({ input, label, meta: { touched, error } }) => {
        return (
          <div>
            <label>{label}</label>
            <input {...input} autoComplete='off' />
            {touched && error && (
              <span className='ui pointing red basic label'>{error}</span>
            )}
          </div>
        );
      };
    
    onSubmit = data => {
        console.log(data)
        this.props.onSubmit(data);
      };

    render() {
      console.log(this.props)
      const button = `${ this.props.initialValues ? "Update" : "Add"}`
        return (
          <div>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field name='post' component={this.renderField} label='포스트' />
              <button>{button}</button>
            </form>
          </div>
        );
      }
  }

export default reduxForm({
    form: 'postForm',
    touchOnBlur: false,
  })(PostForm);