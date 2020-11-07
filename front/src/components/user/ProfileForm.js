import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { editProfile } from '../../actions/profile';

class ProfileForm extends Component {
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

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className = "auth_container">
        <div className='ui container'>
          <div className='ui segment'>
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className='ui form'
            >
              <Field
                name='nickname'
                type='text'
                component={this.renderField}
                label='닉네임'
              />
              <Field
                name='weight'
                type='text'
                component={this.renderField}
                label='몸무게'
              />
              <Field
                name='height'
                type='text'
                component={this.renderField}
                label='키'
              />
              <Field
                name='age'
                type='text'
                component={this.renderField}
                label='나이'
              />
              <Field
                name='selfme'
                type='text'
                component={this.renderField}
                label='자기소개'
              />
              <Field
                name='perpose'
                type='text'
                component={this.renderField}
                label='운동목적'
              />
              <Field
                name='bench'
                type='text'
                component={this.renderField}
                label='BenchPress'
              />
              <Field
                name='deadlift'
                type='text'
                component={this.renderField}
                label='Deadlift'
              />
              <Field
                name='squat'
                type='text'
                component={this.renderField}
                label='Squat'
              />
              <Field
                name='phone'
                type='text'
                component={this.renderField}
                label='Tel'
              />
              <button className = "btn btn-outline-primary">수정</button>
            </form>
          </div>
        </div>
        </div>
    );
  }
}

const mapStateToProps = state => (
  {
  isAuthenticated: state.user.isAuthenticated,
});

ProfileForm = connect(
  mapStateToProps,
  {editProfile}
)(ProfileForm);

export default reduxForm({
  form: 'ProfileForm'
})(ProfileForm);