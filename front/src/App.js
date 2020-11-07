import React from 'react';
import './App.css';
import Main from './components/main.js'
import PostCreate from './components/post/postCreate.js'
import Post from './components/post/post.js'
import PostUpdate from './components/post/postUpdate.js'
import ProfileUpdate from './components/user/ProfileUpdate'

import BackUpdate from './components/routine/BackUpdate'
import Profile from './components/user/Profile.js'
import User from './components/user/User.js'
import OtherUser from './components/user/Other_user.js'
import Mypage from './components/user/Mypage.js'
import Routinetable from './components/routine/Routine_table'
import UserRoutine from './components/user/UserRoutine'
import Userprofile from './components/user/Userprofile'

import { Switch, HashRouter as Router, Route } from "react-router-dom";import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from './actions/user'; // added
import LoginForm from './components/user/LoginForm';
import PrivateRoute from './components/common/PrivateRoute';
import RegisterForm from './components/user/RegisterForm'; // added
import history from './components/common/history';

class App extends React.Component {

  componentDidMount() {
    this.props.loadUser();
  }
  
  render(){
    console.log(this.props)
    return (
        <Router history={history}>
          <div>
          <Switch>
            <Route exact path="/" component={Main}/>
            <PrivateRoute exact path="/postCreate" component={PostCreate}/>
            <Route path="/post/:id/update" component={PostUpdate}/>
            <Route path="/post/:id" component={Post}/>
            <Route path='/login' component={LoginForm} />
            <Route path='/register' component={RegisterForm} />
            <Route exact path='/user/:id/' component={Mypage} />
            <Route path='/profile/update' component={ProfileUpdate} />
            <Route exact path='/profile' component={Userprofile} />
            <Route path='/routine/back' component={BackUpdate} />
            <Route path='/routine/table' component={UserRoutine} />
            <Route path='/otheruser' component={OtherUser} />
          </Switch>
          </div>
        </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.user
});

export default connect(mapStateToProps, {loadUser} )(App);
