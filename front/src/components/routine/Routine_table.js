import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { getBack } from '../../actions/routine';
import "../../User.css";

class Routinetable extends React.Component {

    componentDidMount() {
        const { getBack } = this.props;
        const id = this.props.id;
        getBack(id);
    }

    render() {
        console.log(this.props)
        const user = this.props.user
        const back = this.props.back
        const mon = this.props.mon
        const tue = this.props.tue
        const wed = this.props.wed
        const thu = this.props.thu
        const fri = this.props.fri
        const sat = this.props.sat
        const sun = this.props.sun
        const dead = this.props.dead

        console.log(back);


        return (
        <div>
           <div className = "table_container">

            <div className = "blank7"></div>

            <div className = "table">
            <table className = "table1">
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
                    <th>
                    {this.props.back.mon && back ? 
                        <h3 className = {mon ? "on_routine" : "off_routine"}>
                            등
                        </h3> 
                    :''}
                    </th>
                    <th>
                    {this.props.back.tue && back ? 
                        <h3 className = {tue ? "on_routine" : "off_routine"}>
                            등
                        </h3> 
                    :''}
                    </th>
                    <th>
                    {this.props.back.wed && back ? 
                        <h3 className = {wed ? "on_routine" : "off_routine"}>
                            등
                        </h3> 
                    :''}
                    </th>
                    <th>
                    {this.props.back.thu && back ? 
                        <h3 className = {thu ? "on_routine" : "off_routine"}>
                            등
                        </h3> 
                    :''}
                    </th>
                    <th>
                    {this.props.back.fri && back ? 
                        <h3 className = {fri ? "on_routine" : "off_routine"}>
                            등
                        </h3> 
                    :''}
                    </th>
                    <th>
                    {this.props.back.sat && back ? 
                        <h3 className = {sat ? "on_routine" : "off_routine"}>
                            등
                        </h3> 
                    :''}
                    </th>
                    <th>
                    {this.props.back.sun && back ? 
                        <h3 className = {sun ? "on_routine" : "off_routine"}>
                            등
                        </h3> 
                    :''}
                    </th>

                    
                    </tr>
                    <tr>
                        <td>
                            {this.props.back.mon && back ?
                                <div>  
                                    {back.deadligft_reps? 
                                        <div>
                                            <h4> 데드리프트</h4>
                                            <p>{back.deadligft_weight}Kg {back.deadligft_set}set {back.deadligft_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.pullup_reps? 
                                        <div>
                                            <h4> 풀업 </h4>
                                            <p>{back.pullup_weight}Kg {back.pullup_set}set {back.pullup_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.d_row_reps? 
                                        <div>
                                            <h4> 덤벨로우 </h4>
                                            <p>{back. d_row_weight}Kg {back. d_row_set}set {back. d_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.b_row_reps? 
                                        <div>
                                            <h4> 바벨로우</h4>
                                            <p>{back.b_row_weight}Kg {back.b_row_set}set {back.b_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.o_a_d_row_reps? 
                                        <div>
                                            <h4> 원 암 덤벨 로우</h4>
                                            <p>{back.o_a_d_row_weight}Kg {back.o_a_d_row_set}set {back.o_a_d_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.lackpull_reps? 
                                        <div>
                                            <h4> 렉풀</h4>
                                            <p>{back.lackpull_weight}Kg {back.lackpull_set}set {back.lackpull_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.let_pull_down_reps? 
                                        <div>
                                            <h4> 렛 풀 다운 </h4>
                                            <p>{back.let_pull_down_weight}Kg {back.let_pull_down_set}set {back.let_pull_down_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.seated_cable_row_reps? 
                                        <div>
                                            <h4> 시티드 케이블 로우 </h4>
                                            <p>{back.seated_cable_row_weight}Kg {back.seated_cable_row_set}set {back.seated_cable_row_reps}reps</p>
                                        </div>
                                    : ''}
                                </div>
                                : ''}
                        </td>
                        <td>{this.props.back.tue && back ?
                                <div>  
                                    {back.deadligft_reps? 
                                        <div>
                                            <h4> 데드리프트</h4>
                                            <p>{back.deadligft_weight}Kg {back.deadligft_set}set {back.deadligft_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.pullup_reps? 
                                        <div>
                                            <h4> 풀업 </h4>
                                            <p>{back.pullup_weight}Kg {back.pullup_set}set {back.pullup_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.d_row_reps? 
                                        <div>
                                            <h4> 덤벨로우 </h4>
                                            <p>{back. d_row_weight}Kg {back. d_row_set}set {back. d_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.b_row_reps? 
                                        <div>
                                            <h4> 바벨로우</h4>
                                            <p>{back.b_row_weight}Kg {back.b_row_set}set {back.b_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.o_a_d_row_reps? 
                                        <div>
                                            <h4> 원 암 덤벨 로우</h4>
                                            <p>{back.o_a_d_row_weight}Kg {back.o_a_d_row_set}set {back.o_a_d_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.lackpull_reps? 
                                        <div>
                                            <h4> 렉풀</h4>
                                            <p>{back.lackpull_weight}Kg {back.lackpull_set}set {back.lackpull_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.let_pull_down_reps? 
                                        <div>
                                            <h4> 렛 풀 다운 </h4>
                                            <p>{back.let_pull_down_weight}Kg {back.let_pull_down_set}set {back.let_pull_down_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.seated_cable_row_reps? 
                                        <div>
                                            <h4> 시티드 케이블 로우 </h4>
                                            <p>{back.seated_cable_row_weight}Kg {back.seated_cable_row_set}set {back.seated_cable_row_reps}reps</p>
                                        </div>
                                    : ''}
                                </div>
                                : ''}</td>
                        <td>{this.props.back.wed && back ?
                                <div>  
                                    {back.deadligft_reps? 
                                        <div>
                                            <h4> 데드리프트</h4>
                                            <p>{back.deadligft_weight}Kg {back.deadligft_set}set {back.deadligft_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.pullup_reps? 
                                        <div>
                                            <h4> 풀업 </h4>
                                            <p>{back.pullup_weight}Kg {back.pullup_set}set {back.pullup_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.d_row_reps? 
                                        <div>
                                            <h4> 덤벨로우 </h4>
                                            <p>{back. d_row_weight}Kg {back. d_row_set}set {back. d_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.b_row_reps? 
                                        <div>
                                            <h4> 바벨로우</h4>
                                            <p>{back.b_row_weight}Kg {back.b_row_set}set {back.b_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.o_a_d_row_reps? 
                                        <div>
                                            <h4> 원 암 덤벨 로우</h4>
                                            <p>{back.o_a_d_row_weight}Kg {back.o_a_d_row_set}set {back.o_a_d_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.lackpull_reps? 
                                        <div>
                                            <h4> 렉풀</h4>
                                            <p>{back.lackpull_weight}Kg {back.lackpull_set}set {back.lackpull_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.let_pull_down_reps? 
                                        <div>
                                            <h4> 렛 풀 다운 </h4>
                                            <p>{back.let_pull_down_weight}Kg {back.let_pull_down_set}set {back.let_pull_down_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.seated_cable_row_reps? 
                                        <div>
                                            <h4> 시티드 케이블 로우 </h4>
                                            <p>{back.seated_cable_row_weight}Kg {back.seated_cable_row_set}set {back.seated_cable_row_reps}reps</p>
                                        </div>
                                    : ''}
                                </div>
                                : ''}</td>
                        <td>{this.props.back.thu && back ?
                                <div>  
                                    {back.deadligft_reps? 
                                        <div>
                                            <h4> 데드리프트</h4>
                                            <p>{back.deadligft_weight}Kg {back.deadligft_set}set {back.deadligft_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.pullup_reps? 
                                        <div>
                                            <h4> 풀업 </h4>
                                            <p>{back.pullup_weight}Kg {back.pullup_set}set {back.pullup_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.d_row_reps? 
                                        <div>
                                            <h4> 덤벨로우 </h4>
                                            <p>{back. d_row_weight}Kg {back. d_row_set}set {back. d_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.b_row_reps? 
                                        <div>
                                            <h4> 바벨로우</h4>
                                            <p>{back.b_row_weight}Kg {back.b_row_set}set {back.b_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.o_a_d_row_reps? 
                                        <div>
                                            <h4> 원 암 덤벨 로우</h4>
                                            <p>{back.o_a_d_row_weight}Kg {back.o_a_d_row_set}set {back.o_a_d_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.lackpull_reps? 
                                        <div>
                                            <h4> 렉풀</h4>
                                            <p>{back.lackpull_weight}Kg {back.lackpull_set}set {back.lackpull_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.let_pull_down_reps? 
                                        <div>
                                            <h4> 렛 풀 다운 </h4>
                                            <p>{back.let_pull_down_weight}Kg {back.let_pull_down_set}set {back.let_pull_down_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.seated_cable_row_reps? 
                                        <div>
                                            <h4> 시티드 케이블 로우 </h4>
                                            <p>{back.seated_cable_row_weight}Kg {back.seated_cable_row_set}set {back.seated_cable_row_reps}reps</p>
                                        </div>
                                    : ''}
                                </div>
                                : ''}</td>
                        <td>{this.props.back.fri && back ?
                                <div>  
                                    {back.deadligft_reps? 
                                        <div>
                                            <h4> 데드리프트</h4>
                                            <p>{back.deadligft_weight}Kg {back.deadligft_set}set {back.deadligft_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.pullup_reps? 
                                        <div>
                                            <h4> 풀업 </h4>
                                            <p>{back.pullup_weight}Kg {back.pullup_set}set {back.pullup_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.d_row_reps? 
                                        <div>
                                            <h4> 덤벨로우 </h4>
                                            <p>{back. d_row_weight}Kg {back. d_row_set}set {back. d_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.b_row_reps? 
                                        <div>
                                            <h4> 바벨로우</h4>
                                            <p>{back.b_row_weight}Kg {back.b_row_set}set {back.b_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.o_a_d_row_reps? 
                                        <div>
                                            <h4> 원 암 덤벨 로우</h4>
                                            <p>{back.o_a_d_row_weight}Kg {back.o_a_d_row_set}set {back.o_a_d_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.lackpull_reps? 
                                        <div>
                                            <h4> 렉풀</h4>
                                            <p>{back.lackpull_weight}Kg {back.lackpull_set}set {back.lackpull_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.let_pull_down_reps? 
                                        <div>
                                            <h4> 렛 풀 다운 </h4>
                                            <p>{back.let_pull_down_weight}Kg {back.let_pull_down_set}set {back.let_pull_down_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.seated_cable_row_reps? 
                                        <div>
                                            <h4> 시티드 케이블 로우 </h4>
                                            <p>{back.seated_cable_row_weight}Kg {back.seated_cable_row_set}set {back.seated_cable_row_reps}reps</p>
                                        </div>
                                    : ''}
                                </div>
                                : ''}</td>
                        <td>{this.props.back.sat && back ?
                                <div>  
                                    {back.deadligft_reps? 
                                        <div>
                                            <h4> 데드리프트</h4>
                                            <p>{back.deadligft_weight}Kg {back.deadligft_set}set {back.deadligft_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.pullup_reps? 
                                        <div>
                                            <h4> 풀업 </h4>
                                            <p>{back.pullup_weight}Kg {back.pullup_set}set {back.pullup_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.d_row_reps? 
                                        <div>
                                            <h4> 덤벨로우 </h4>
                                            <p>{back. d_row_weight}Kg {back. d_row_set}set {back. d_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.b_row_reps? 
                                        <div>
                                            <h4> 바벨로우</h4>
                                            <p>{back.b_row_weight}Kg {back.b_row_set}set {back.b_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.o_a_d_row_reps? 
                                        <div>
                                            <h4> 원 암 덤벨 로우</h4>
                                            <p>{back.o_a_d_row_weight}Kg {back.o_a_d_row_set}set {back.o_a_d_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.lackpull_reps? 
                                        <div>
                                            <h4> 렉풀</h4>
                                            <p>{back.lackpull_weight}Kg {back.lackpull_set}set {back.lackpull_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.let_pull_down_reps? 
                                        <div>
                                            <h4> 렛 풀 다운 </h4>
                                            <p>{back.let_pull_down_weight}Kg {back.let_pull_down_set}set {back.let_pull_down_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.seated_cable_row_reps? 
                                        <div>
                                            <h4> 시티드 케이블 로우 </h4>
                                            <p>{back.seated_cable_row_weight}Kg {back.seated_cable_row_set}set {back.seated_cable_row_reps}reps</p>
                                        </div>
                                    : ''}
                                </div>
                                : ''}</td>
                        <td>{this.props.back.sun && back ?
                                <div>  
                                    {back.deadligft_reps? 
                                        <div>
                                            <h4> 데드리프트</h4>
                                            <p>{back.deadligft_weight}Kg {back.deadligft_set}set {back.deadligft_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.pullup_reps? 
                                        <div>
                                            <h4> 풀업 </h4>
                                            <p>{back.pullup_weight}Kg {back.pullup_set}set {back.pullup_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.d_row_reps? 
                                        <div>
                                            <h4> 덤벨로우 </h4>
                                            <p>{back. d_row_weight}Kg {back. d_row_set}set {back. d_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.b_row_reps? 
                                        <div>
                                            <h4> 바벨로우</h4>
                                            <p>{back.b_row_weight}Kg {back.b_row_set}set {back.b_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.o_a_d_row_reps? 
                                        <div>
                                            <h4> 원 암 덤벨 로우</h4>
                                            <p>{back.o_a_d_row_weight}Kg {back.o_a_d_row_set}set {back.o_a_d_row_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.lackpull_reps? 
                                        <div>
                                            <h4> 렉풀</h4>
                                            <p>{back.lackpull_weight}Kg {back.lackpull_set}set {back.lackpull_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.let_pull_down_reps? 
                                        <div>
                                            <h4> 렛 풀 다운 </h4>
                                            <p>{back.let_pull_down_weight}Kg {back.let_pull_down_set}set {back.let_pull_down_reps}reps</p>
                                        </div>
                                    : ''}
                                    {back.seated_cable_row_reps? 
                                        <div>
                                            <h4> 시티드 케이블 로우 </h4>
                                            <p>{back.seated_cable_row_weight}Kg {back.seated_cable_row_set}set {back.seated_cable_row_reps}reps</p>
                                        </div>
                                    : ''}
                                </div>
                                : ''}</td>
                    </tr>
                </tbody>
            </table>
            </div>

            <div className = "blank8"></div>

            </div>            
        </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    let id = state.user.user.id;
    const profile = state.profile.profile
    const user = state.user.user
    const back = state.routine.back
    const mon = state.routine.mon
    const dead = state.routine.deadlift
    return  {
      id, profile, user, back, mon, dead
    }
  }

const mapDispatchToProps = (dispatch) => {  
    return {
      getBack: (id) => {dispatch( getBack(id) ) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routinetable)