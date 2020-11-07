import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../actions/user';
import Header from '../headers';
import '../../User.css'
import '../../index.css'


class LoginForm extends Component {
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

  hiddenField = ({ type, meta: { error } }) => {
    return (
      <div className='field'>
        <input type={type} />
        {error && <div className='ui red message'>{error}</div>}
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues)
    this.props.login(formValues);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }
    return (
      <div className="login_container">
        <div className = "topi">
          <Header/>
        </div>
<div className = "login_blank1"></div>
<div className = "login_blank2"></div>
<div className = "login_blank3"></div>

        <div className="login_form">
          <div className = "login_box">
          <div className = "login">
            <div className='ui container'>
            <div className='ui segment'>
            <h2>로그인</h2>
              <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className='ui form'
              >
                <Field
                  name='username'
                  type='text'
                  component={this.renderField}
                  label='ID'
                />
                <Field
                  name='password'
                  type='password'
                  component={this.renderField}
                  label='Password'
                />
                <Field
                  name='non_field_errors'
                  type='hidden'
                  component={this.hiddenField}
                />
                <button className="btn btn-outline-primary">로그인</button>
              </form>
              <h4 style={{ marginTop: '1rem' }}>
                계정이 없으신가요? <Link to='/register'>회원가입</Link>
              </h4>
            </div>
          </div>
          </div>

          </div>
        </div>

      </div>

    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

LoginForm = connect(
  mapStateToProps,
  { login }
)(LoginForm);

export default reduxForm({
  form: 'loginForm'
})(LoginForm);