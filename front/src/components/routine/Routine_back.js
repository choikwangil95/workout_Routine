import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBack,
    editBack,
    toggleMon,
    toggleTue,
    toggleWed,
    toggleThu,
    toggleFri,
    toggleSat,
    toggleSun,
    toggleDead,
    editDay} from '../../actions/routine';
import BackForm from './BackForm';
import '../../User.css'
import '../../index.css'
import { Redirect } from 'react-router-dom';

class Back extends Component {
  componentDidMount() {
    let id = this.props.id
    console.log(id)
    this.props.getBack(id);
  }

  onSubmit = formValues => {
    console.log(formValues)
    const mon = this.props.mon
    const tue = this.props.tue
    const wed = this.props.wed
    const thu = this.props.thu
    const fri = this.props.fri
    const sat = this.props.sat
    const sun = this.props.sun

    console.log(mon)
    formValues.mon = mon
    formValues.tue = tue
    formValues.wed = wed
    formValues.thu = thu
    formValues.fri = fri
    formValues.sat = sat
    formValues.sun = sun
    console.log(formValues)
    let id = this.props.id
    this.props.editBack(id, formValues);
    return <Redirect to ="/routine/back"/>
  };

   monClick = (mon) => {
      console.log(mon)
      this.props.toggleMon(mon)
  }

  tueClick = (tue) => {
    console.log(tue)
    this.props.toggleTue(tue)
}

  wedClick = (wed) => {
  console.log(wed)
  this.props.toggleWed(wed)
}

  thuClick = (thu) => {
  console.log(thu)
  this.props.toggleThu(thu)
}

  friClick = (fri) => {
  console.log(fri)
  this.props.toggleFri(fri)
}

  satClick = (sat) => {
  console.log(sat)
  this.props.toggleSat(sat)
}

  sunClick = (sun) => {
  console.log(sun)
  this.props.toggleSun(sun)
}

  render() {
    const back = this.props.back;
    
    const initialValues = {
      deadligft_reps : back.deadligft_reps,
      deadligft_set : back.deadligft_set,
      deadligft_weight : back.deadligft_weight,
      pullup_reps : back.pullup_reps,
      pullup_set : back.pullup_set,
      pullup_weight : back.pullup_weight,
      b_row_reps : back.b_row_reps,
      b_row_set : back.b_row_set,
      b_row_weight : back.b_row_weight,
      d_row_reps : back.d_row_reps,
      d_row_set : back.d_row_set,
      d_row_weight : back.d_row_weight,
      o_a_d_row_reps : back.o_a_d_row_reps,
      o_a_d_row_set : back.o_a_d_row_set,
      o_a_d_row_weight : back.o_a_d_row_weight,
      lackpull_reps : back.lackpull_reps,
      lackpull_set : back.lackpull_set,
      lackpull_weight : back.lackpull_weight,
      let_pull_down_reps : back.let_pull_down_reps,
      let_pull_down_set : back.let_pull_down_set,
      let_pull_down_weight : back.let_pull_down_weight,
      seated_cable_row_reps : back.seated_cable_row_reps,
      seated_cable_row_set : back.seated_cable_row_set,
      seated_cable_row_weight : back.seated_cable_row_weight,
    }
    const user = this.props.user
    const mon = this.props.mon
    const tue = this.props.tue
    const wed = this.props.wed
    const thu = this.props.thu
    const fri = this.props.fri
    const sat = this.props.sat
    const sun = this.props.sun
    console.log(mon)

    return (

        <div className = 'routine_grid'>
            <div className = "grid_title">
              <h2>원하는 요일선택 후 루틴을 입력하여 수정하세요</h2>
            </div>

            <div className = 'days'>

                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <div className = "routine_nav">
                            <div  className = {mon ? "on_mon" : "off_mon"}>
                                <button onClick={this.monClick.bind(this, mon)}>월</button>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                    <div className = "routine_nav">
                            <div  className = {tue ? "on_mon" : "off_mon"}>
                                <button onClick={this.tueClick.bind(this, tue)}>화</button>
                            </div>
                    </div>
                    </li>
                    <li class="nav-item">
                    <div className = "routine_nav">
                            <div  className = {wed ? "on_mon" : "off_mon"}>
                                <button onClick={this.wedClick.bind(this, wed)}>수</button>
                            </div>
                    </div>
                    </li>
                    <li class="nav-item">
                    <div className = "routine_nav">
                            <div  className = {thu ? "on_mon" : "off_mon"}>
                                <button onClick={this.thuClick.bind(this, thu)}>목</button>
                            </div>
                    </div>
                    </li>
                    <li class="nav-item">
                    <div className = "routine_nav">
                            <div  className = {fri ? "on_mon" : "off_mon"}>
                                <button onClick={this.friClick.bind(this, fri)}>금</button>
                            </div>
                    </div>
                    </li>
                    <li class="nav-item">
                    <div className = "routine_nav">
                            <div  className = {sat ? "on_mon" : "off_mon"}>
                                <button onClick={this.satClick.bind(this, sat)}>토</button>
                            </div>
                    </div>
                    </li>
                    <li class="nav-item">
                    <div className = "routine_nav">
                            <div  className = {sun ? "on_mon" : "off_mon"}>
                                <button onClick={this.sunClick.bind(this, sun)}>일</button>
                            </div>
                    </div>
                    </li>
                </ul>
            </div>
          <div className = "warning">
            <h2>제거할 운동은 '0'을 작성 후 수정을 눌러주세요</h2>
          </div>
          <div className = "where">
          <BackForm
          initialValues={initialValues}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
          </div>

    </div>
    );
  }
}

const mapStateToProps = (state) => (
    console.log(state),
    {
  id : state.user.user.id,
  user: state.user.user,
  back : state.routine.back,
  mon : state.routine.mon,
  tue : state.routine.tue,
  wed : state.routine.wed,
  thu : state.routine.thu,
  fri : state.routine.fri,
  sat : state.routine.sat,
  sun : state.routine.sun,
});

export default connect(
  mapStateToProps,
  { getBack,
    editBack,
    toggleMon,
    toggleTue,
    toggleWed,
    toggleThu,
    toggleFri,
    toggleSat,
    toggleSun,
    editDay,}
)(Back);