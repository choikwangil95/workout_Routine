import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../headers'
import '../../index.css'
import {getUsers} from '../../actions/user'
import { Link, Redirect } from 'react-router-dom';


class OtherUser extends Component {

    componentDidMount() {
        const { getUsers } = this.props;
        getUsers();
    }

  render() {
    const users = this.props.users;
    return (
      <div className="other_container">

        <div className="topi">
          <Header/>
        </div>
        <div className = "blank1">

        </div>
        <div className = "blank2">
          
        </div>
        <div className="mission">
            <div class = "main_page">
              {users ? 
              users.map(item => (
                <Link to ={`/user/${item.pk}`}>
              <div className="card1">

                <div className="card_img">
                  <h3>사진</h3>
                </div>

                <div className="card_title">
                  <p>ID : {item.username}</p>
                </div>

                <div className = "card_content">
                  <p>{item.selfme}</p>
                </div> 
              </div>
              </Link>
              ))
              : ''}            
        </div>

      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
user: state.user.user,
users : state.user.users
});

const mapDispatchToProps = (dispatch) => {  
    console.log(dispatch)
    return {
      getUsers: () => {dispatch( getUsers() ) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherUser)
