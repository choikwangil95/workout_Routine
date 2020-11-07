import React from 'react';
import {connect} from 'react-redux'
import {getProfile} from '../../actions/profile'
import {editProfile} from '../../actions/profile'
import { Link } from 'react-router-dom';
import '../../User.css'
import UserInfo from './UserInfo';

class Profile extends React.Component {

    componentDidMount() {
        const { getProfile } = this.props;
        const id = this.props.id;
        console.log(id)
        getProfile(id);
    }

    render() {
        console.log(this.props)
        let id = this.props.id;
        const user = this.props.user;
        const profile = this.props.profile ? (
                  <div className = "profile">
                    <h2>{user.username}님의 프로필</h2>
                      <p> 닉네임 : {this.props.profile.nickname}</p>
                      <p> 몸무게 : {this.props.profile.weight}</p>
                      <p> 키 : {this.props.profile.height}</p>
                      <p> 나이 : {this.props.profile.age}</p>
                      <p> 운동목적 : {this.props.profile.perpose}</p>
                      <p> 자기소개 : {this.props.profile.selfme}</p>
                      <p> 3대 중량 : {this.props.profile.bench + this.props.profile.deadlift + this.props.profile.squat}</p>
                      <p> BenchPress : {this.props.profile.bench}</p>
                      <p> DeadLift : {this.props.profile.deadlift}</p>
                      <p> Squat : {this.props.profile.squat}</p>
                      <p> Tel : {this.props.profile.phone}</p>
                          <Link to={`/profile/update`}>
                          <button className = "btn btn-outline-primary">수정</button>
                          </Link>
            </div>
        ) : (
            <div>
                <p>Loading</p>
            </div>
        );

        return (
<div className = "user_container">
        <div className = "user_blank1">
        </div>

        <div className = "user">
            <UserInfo/>
        </div>

        <div className = "user_blank2">
        </div>

        <div className = "nav1">

        </div>

        <div className = "nav2">
                <Link className = "user_link" to = "/routine/table">운동루틴</Link>
                <Link className = "user_link_on" to = "/profile">프로필</Link>
                <Link className = "user_link" to = "/routine/table">식단(구현X)</Link>
        </div>

        <div className = "nav3">
            
        </div>

        <div className = "user_blank3">
        </div>

        <div className = "content">
            {profile}
        </div>

        <div className = "user_blank4">
        </div>


    </div>        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = state.user.user.id;
    console.log(state);
    const profile = state.profile.profile
    const user = state.user.user
    return  {
      id, profile, user
    }
  }

const mapDispatchToProps = (dispatch) => {  
    console.log(dispatch)
    return {
      getProfile: (id) => {dispatch( getProfile(id) ) },
      editProfile: (id, formvalues) => {dispatch( editProfile(id, formvalues) ) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)