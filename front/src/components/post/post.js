import React from 'react';
import {connect} from 'react-redux'
import {getPost} from '../../actions/post'
import {deleteTodo} from '../../actions/post'
import {editTodo} from '../../actions/post'

class Post extends React.Component {

    componentDidMount() {
        const { getPost } = this.props;
        const id = this.props.id;
        console.log(id)
        getPost(id);
    }

    deleteTodo = (id) => {
        const { deleteTodo } = this.props;
        deleteTodo(id);
    }

    updatePost = (id) => {
        console.log(id);
        this.props.history.push(`/post/${id}/update`);
    }

    render() {
        console.log(this.props)
        let id = this.props.id;
        const post = this.props.post ? (
            <div>
                <h2>{id}번째 글입니당</h2>
                <p> title : {this.props.post.post}</p>
                <button onClick={this.deleteTodo.bind(this, id)}>삭제</button>
                <button onClick={this.updatePost.bind(this, id)}>수정</button>
            </div>
        ) : (
            <div>
                <p>Loading</p>
            </div>
        )

        // async니까 이렇게 해줘야하는듯

        return (
            <div>
                {post}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    let id = ownProps.match.params.id;
    console.log(state.post.posts);
    const post = state.post.posts
    return  {
      id, post
    }
  }

const mapDispatchToProps = (dispatch) => {  
    console.log(dispatch)
    return {
      getPost: (id) => {dispatch( getPost(id) ) },
      editTodo: (id, formvalues) => {dispatch( editTodo(id, formvalues) ) },
      deleteTodo: (id) => {dispatch( deleteTodo(id) ) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)