import React from 'react';
import Header from '../headers'
import User from './User';

class Mypage extends React.Component {
    render() {
        return (
        <div>
            <Header/>
            <User/>
        </div>
        );
    }
}

export default Mypage