import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // added
import { connect } from 'react-redux'; // added
import { logout } from '../actions/user'; // added
import { Button } from "react-bootstrap";
import {getProfile} from '../actions/profile'
import {getDrips} from '../actions/routine'
import "../Header.css";

class Header extends Component {

  componentDidMount() {
    const { getProfile } = this.props;
    const user = this.props.auth.user;
    const {getDrips} = this.props;
    getDrips();
    console.log(this)

    if (user){
      let id = this.props.auth.user.id;
      console.log(id)
      getProfile(id);
    }
}

  logout = () => {
      const { logout } = this.props;
      logout();
    }

  render() {
    console.log(this)
    const { user, isAuthenticated } = this.props.auth; // added\
    console.log(user)
    const {drip} = this.props;
    const number = Math.floor(Math.random() * 10);
    console.log(number)
    const drip_array = drip.map(item => (
      item.drip
    ))
    console.log(drip_array[number])
    return (
      <div className = "Header">
        <div className = "title">
          <Link to="/" className = "link">헬창</Link>
        </div>

        <div className = "blank">

        </div>

        <div className = "auth">
          {isAuthenticated && user ? 
          <div className = "guest">
              <Link className = "link3" to={`/user/${user.id}`}>
                {user ? `My Page` : ''}
              </Link>
            </div>
            :
            <div className = "guest">
              <Link className = "link3" to="/register">
                SignUp
              </Link>
            </div>
          }
        </div>

        <div className = "auth2">
          {isAuthenticated && user ? 
            <Button variant="outline-light" onClick={this.logout}>로그아웃</Button>
          : 
          <div className = "guest">
          <Link className = "link3" to="/login">
          Login
        </Link>
        </div>
        }
        </div>
        <div className = "navi1">
        </div>
        <div className = "navi2">
          <div className = "link_table">
            <div className = "link_bok">
              <Link className = "link2" to ={"/"}>
                홈
              </Link>
            </div>
            <div className = "link_bok">
              <Link className = "link2" to ={`/otheruser`}>
                루틴 구경가기
              </Link>
            </div>
            <div className = "link_bok">
              <Link className = "link2" to ={`/`}>
                전문가에게 루틴 컨펌받기(미구현)
              </Link>
            </div>
          </div>
        </div>
          <div className = "drip1">
          <h4>헬창 어록</h4>
          </div>
          <div className = "drip2">
          <h5>{drip_array[number]}</h5>
          </div>
          <div className = "drip3">
            
          </div>
          <div className = "drip4">
            
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  console.log(state);

  return {
  auth: state.user,
  profile : state.profile,
  drip : state.routine.drip
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    getProfile: (id) => {dispatch( getProfile(id) ) },
    getDrips: () => {dispatch( getDrips() ) },
    logout : () => { dispatch ( logout() ) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);