import React, { Component } from 'react';
import Header from '../headers';
import Back from './Routine_back';
import { Link } from 'react-router-dom';
import UserInfo from '../user/UserInfo';


class BackUpdate extends Component {
    render(){
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
                    <Link className = "user_link" to = "/profile">프로필</Link>
                    <Link className = "user_link" to = "/routine/table">식단(구현X)</Link>
                </div>

                <div className = "nav3">
                    
                </div>

                <div className = "user_blank3">
                <div class = "navi_1">
                    <div className = "navi_title"><h3>루틴 수정 </h3></div>
                        <Link className = "navis1" to="/routine/back">등</Link>
                        <Link className = "navis2" to="/routine/back">가슴(구현X)</Link>
                        <Link className = "navis3" to="/routine/back">하체(구현X)</Link>
                        <Link className = "navis4" to="/routine/back">어깨(구현X)</Link>
                        <Link className = "navis5" to="/routine/back">이두, 삼두(구현X)</Link>
                    </div>
                </div>

                <div className = "content">
                    <Back/>
                </div>

                <div className = "user_blank4">
                </div>

                    </div>
        </div>
    );
  }
}

export default BackUpdate;