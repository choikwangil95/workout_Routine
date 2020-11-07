import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile, editProfile } from '../../actions/profile';
import ProfileForm from './ProfileForm';
import { Link } from 'react-router-dom';
import Header from '../headers';
import '../../User.css'
import UserInfo from './UserInfo'
class ProfileUpdate extends Component {
  componentDidMount() {
    let id = this.props.id
    this.props.getProfile(id);
  }

  onSubmit = formValues => {
    let id = this.props.id
    this.props.editProfile(id, formValues);
    this.props.history.push('/profile');
  };

  render() {
    const profile = this.props.profile;
    const initialValues = {
      nickname : profile.nickname,
      weight : profile.weight,
      height : profile.height,
      age : profile.age,
      selfme : profile.selfme,
      bench : profile.bench,
      deadlift : profile.deadlift,
      squat : profile.squat,
      phone : profile.phone,
      perpose : profile.perpose
    }
      console.log(this.props)
    return (
      <div>
        <Header/>
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
          <h2 style={{ marginTop: '2rem' }}>프로필 수정</h2>
          <ProfileForm
            initialValues={initialValues}
            enableReinitialize={true}
            onSubmit={this.onSubmit}
          />
        </div>

        <div className = "user_blank4">
        </div>

            </div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => (
    {
  id : state.user.user.id,
  user: state.user.user,
  profile : state.profile.profile
});

export default connect(
  mapStateToProps,
  { getProfile, editProfile }
)(ProfileUpdate);