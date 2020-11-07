import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/post';
import PostForm from './postForm';
import Headers from '../headers';

class PostCreate extends Component {
  
    onSubmit = formValues => {
    this.props.addTodo(formValues);
    console.log(this.props)
    this.props.history.push('/')
  };

  render() {
    return (
      <div>
        <Headers/>
        <PostForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(PostCreate);