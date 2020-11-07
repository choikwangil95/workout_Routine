import React from 'react';
import "../../User.css";
import {connect} from 'react-redux'
import {getProfile} from '../../actions/profile'

class UserInfo extends React.Component {

    componentDidMount() {
        const { getProfile } = this.props;
        const id = this.props.id;
        console.log(id)
        getProfile(id);
    }

    render() {
        return (
            <div class = "user_info">
                <div className = "user_img">
                    <h2>사진</h2>
                </div>

                <div className = "info">
                    <h3> 닉네임 : {this.props.profile.nickname}</h3>
                    <h4> 운동 목적 : {this.props.profile.perpose}</h4>
                    <h4> 3대 중량 : {this.props.profile.bench + this.props.profile.deadlift + this.props.profile.squat}</h4>
                </div>

            </div>

        );
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)