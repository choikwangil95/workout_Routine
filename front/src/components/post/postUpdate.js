import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost, editTodo } from '../../actions/post';
import PostForm from './postForm';
import Headers from '../headers'

class PostUpdate extends Component {
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getPost(id);
  }

  onSubmit = formValues => {
    let id = this.props.match.params.id
    this.props.editTodo(id, formValues);
  };

  render() {
      console.log(this.props)
    return (
      <div>
        <Headers/>
        <h2 style={{ marginTop: '2rem' }}>Edit Todo</h2>
        <PostForm
          initialValues={_.pick(this.props.todo, 'post')}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => (
    console.log(state, ownProps),
    {
  todo: state.post.posts
});

export default connect(
  mapStateToProps,
  { getPost, editTodo }
)(PostUpdate);