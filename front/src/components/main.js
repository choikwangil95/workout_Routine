import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './headers'
import '../index.css'

class Main extends Component {
  render() {
    console.log(this)
    return (
      <div className="main_container">

        <div className="topi">
          <Header/>
        </div>

      <div className = "blank2">

      </div>

      <div className = "blank3">
        
        </div>
        <div className = "blank4">
        
      </div>
      <div className = "blank5">
        
      </div>
      <div className = "blank6">
        
      </div>
      <div className = "blank1">
        
      </div>
        <div className="mission1">
        <h3 className = "mission1_h3">근비대, 파워리프팅, 체지방감소, 재활, 체중조절, 체력증진 등</h3>
        <br></br>
              <h2 className = "mission1_h2">운동은 목적에 따라 루틴과 식단, 중량이 달라야 합니다</h2>
              <br></br>
              <h3 className = "mission1_h3">다른사람들과 루틴을 공유하고</h3>
              <br></br>
              <h3 className = "mission1_h3">운동 목적에 따른 본인만의 루틴을 확립해보세요</h3>
        </div>

        <div className="mission3">
              <h3>또, 전문가에게 피드백을 받아보세요</h3>
        </div>

        <div className="mission2">
            <div class = "main_page">
              <table className = "table_ex">
                <thead>
                    <tr className = "table_days">
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                        <th>일</th>
                    </tr>
                </thead>
                    
                <tbody>
                <tr className = "table_where">
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>운동부위</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>

        <div className="footer_real">
          <h3>아주대학교 멋쟁이사자처럼 7기</h3>
          <h4>최광일</h4>
          <p>tel 010-2661-9693</p>
        </div>


        <div className="footer_origin"></div>
        <div className="footer_origin2"></div>


      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
user: state.user.user,
});

export default connect(mapStateToProps)(Main)
