import React from 'react';
import "../../User.css";
import Profile from './Profile';
import Header from '../headers';

class Userprofile extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Profile/>
            </div>
        );
    }
}

export default (Userprofile)