// components/todos/TodoList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../actions/post';
import { Link } from 'react-router-dom';
import Header from '../headers';
import '../../App.css'

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {

    const {isdata} = this.props.todos;
    const {posts} = this.props.todos

    return (
        <div>
        <Header/>
        <div className = "container">
          <Link to='/postCreate'>글 작성하러가기</Link>
          { isdata && posts ? (
              <div>
                  {posts.map(todo => (
                      <div key={todo.id}>
                          <Link to={`post/${todo.id}`}><h1>{todo.post}</h1></Link>
                          <div>{todo.created_at}</div>
                      </div>
                  ))}
              </div>
          ) : (
              <h2>loading</h2>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(state)
    return{
      todos: state.post
  }
}

const mapDispatchToProps = (dispatch) => {  
    return {
      getTodos: () => {dispatch( getTodos() ) },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);