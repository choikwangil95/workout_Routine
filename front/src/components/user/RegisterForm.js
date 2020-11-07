import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from '../../actions/user';
import Header from '../headers';
import '../../User.css'

class RegisterForm extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div className = "authform">
        <div className="form-group">
          <label class ="form_label">{label}</label>
          <input class="form-control" {...input} type={type} />
        </div>
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues)
    this.props.register(formValues);
    this.props.history.push('/login');
  };

  render() {
    console.log(this.props)
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }
    return (
<div className="login_container">

<div className="topi">
  <Header/>
</div>

<div className = "login_blank1"></div>
<div className = "login_blank2"></div>
<div className = "login_blank3"></div>

<div className="login_form">
<div className = "login">
          <div className='ui container'>
            <div className='ui segment'>
              <h2>회원가입</h2>
              <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className='ui form'
              >
                <Field
                  name='username'
                  type='text'
                  component={this.renderField}
                  label="ID"
                  validate={[required, minLength3, maxLength15]}
                />
                <Field
                  name='password'
                  type='password'
                  component={this.renderField}
                  label='Password'
                  validate={required}
                />
                {/* <Field
                  name='password2'
                  type='password'
                  component={this.renderField}
                  label='Confirm Password'
                  validate={[required, passwordsMatch]}
                /> */}
                <button className="btn btn-outline-primary">회원가입</button>
              </form>
              <h4 style={{ marginTop: '1rem' }}>
                계정이 있으신가요? <Link to='/login'>로그인</Link>
              </h4>
            </div>
          </div>
          </div>
          </div>

</div>

    );
  }
}

const required = value => (value ? undefined : 'Required');

const minLength = min => value =>
  value && value.length < min
    ? `Must be at least ${min} characters`
    : undefined;

const minLength3 = minLength(3);

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength15 = maxLength(15);

const passwordsMatch = (value, allValues) =>
  value !== allValues.password ? 'Passwords do not match' : undefined;

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

RegisterForm = connect(
  mapStateToProps,
  { register }
)(RegisterForm);

export default reduxForm({
  form: 'registerForm'
})(RegisterForm);