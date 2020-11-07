import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { editBack } from '../../actions/routine';
import {toggleDead,
  togglePullup,
  toggle_D_row,
  toggle_B_row,
  toggle_O_a_d_row,
  toggle_Lackpull,
  toggle_Latpull_down,
  toggle_Seated_cable_row
,} from '../../actions/routine';
import '../../User.css'

class BackForm extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div className = "authform">
        <div className="form-group">
          <label className ="form_label">{label}</label>
          <input className="form-control" {...input} type={type} />
        </div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    console.log(formValues)
    this.props.onSubmit(formValues);
    console.log(this)
  };

  toggleDead = (dead) => {
    this.props.toggleDead(dead);
  }

  togglePullup = (pullup) => {
    this.props.togglePullup(pullup);
  }
  
  toggle_D_row = (row) => {
    this.props.toggle_D_row(row);
  }

  toggle_B_row = (row) => {
    this.props.toggle_B_row(row);
  }

  toggle_O_a_d_row = (row) => {
    this.props.toggle_O_a_d_row(row);
  }

  toggle_Lackpull = (lackpull) => {
    
    this.props.toggle_Lackpull(lackpull);
  }

  toggle_Latpull_down = (latpull_down) => {
    this.props.toggle_Latpull_down(latpull_down);
  }

  toggle_Seated_cable_row = (seated_cable_row) => {
    this.props.toggle_Seated_cable_row(seated_cable_row);
  }

  render() {
    const dead = this.props.dead
    const pullup = this.props.pullup
    const d_row = this.props.d_row
    const b_row = this.props.b_row
    const o_a_d_row = this.props.o_a_d_row
    const latpull_down = this.props.latpull_down
    const lackpull = this.props.lackpull
    const seated_cable_row = this.props.seated_cable_row

    console.log(this.props);

    return (
      <div className = "routine_container">
        <div className = "blank5">

        </div>

        <div className = "center">
            <button className = "back_link" onClick={this.toggleDead.bind(this, dead)}>데드리프트</button>
            <button className = "back_link" onClick={this.togglePullup.bind(this, pullup)}>풀업</button>
            <button className = "back_link" onClick={this.toggle_D_row.bind(this, d_row)}>덤벨 로우</button>
            <button className = "back_link" onClick={this.toggle_B_row.bind(this, b_row)}>바벨 로우</button>
            <button className = "back_link" onClick={this.toggle_O_a_d_row.bind(this, o_a_d_row)}>원 암 덤벨 로우</button>
            <button className = "back_link" onClick={this.toggle_Lackpull.bind(this, lackpull)}>렉풀</button>
            <button className = "back_link" onClick={this.toggle_Latpull_down.bind(this, latpull_down)}>렛풀다운</button>
            <button className = "back_link" onClick={this.toggle_Seated_cable_row.bind(this, seated_cable_row)}>시티드케이블로우</button>

            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                 <div className = {dead ? "on-dead" : "off-dead"}>
                <Field
                  name='deadligft_reps'
                  type='text'
                  component={this.renderField}
                  label='Reps'
                  className="nav-item"
                />
                <Field
                  name='deadligft_set'
                  type='text'
                  component={this.renderField}
                  label='Set'
                  className="nav-item"
                />
                <Field
                  name='deadligft_weight'
                  type='text'
                  component={this.renderField}
                  label='Kg'
                  className="nav-item"
                />
                </div>

                <div className = {pullup ? "on-dead" : "off-dead"}>
              <Field
                name='pullup_reps'
                type='text'
                component={this.renderField}
                label='Reps'
              />
              <Field
                name='pullup_set'
                type='text'
                component={this.renderField}
                label='Set'
              />
              <Field
                name='pullup_weight'
                type='text'
                component={this.renderField}
                label='Kg'
              />
              </div>
              <div className = {b_row ? "on-dead" : "off-dead"}>
              <Field
                name='b_row_reps'
                type='text'
                component={this.renderField}
                label='reps'
              />
              <Field
                name='b_row_set'
                type='text'
                component={this.renderField}
                label='sets'
              />
              <Field
                name='b_row_weight'
                type='text'
                component={this.renderField}
                label='Kg'
              />
              </div>
                <div className = {d_row ? "on-dead" : "off-dead"}>
              <Field
                name='d_row_reps'
                type='text'
                component={this.renderField}
                label='reps'
              />
              <Field
                name='d_row_set'
                type='text'
                component={this.renderField}
                label='sets'
              />
              <Field
                name='d_row_weight'
                type='text'
                component={this.renderField}
                label='Kg'
              />
              </div>
                <div className = {o_a_d_row ? "on-dead" : "off-dead"}>
              <Field
                name='o_a_d_row_reps'
                type='text'
                component={this.renderField}
                label='reps'
              />
              <Field
                name='o_a_d_row_set'
                type='text'
                component={this.renderField}
                label='sets'
              />
              <Field
                name='o_a_d_row_weight'
                type='text'
                component={this.renderField}
                label='Kg'
              />
              </div>
              <div className = {seated_cable_row ? "on-dead" : "off-dead"}>
              <Field
                name='seated_cable_row_reps'
                type='text'
                component={this.renderField}
                label='시티드 케이블 로우 횟수'
              />
              <Field
                name='seated_cable_row_set'
                type='text'
                component={this.renderField}
                label='시티드 케이블 로우 세트 수'
              />
              <Field
                name='seated_cable_row_weight'
                type='text'
                component={this.renderField}
                label = 'Kg'
              />
              </div>
              <div className = {latpull_down ? "on-dead" : "off-dead"}>
              <Field
                name='let_pull_down_reps'
                type='text'
                component={this.renderField}
                label='렛 풀 다운 횟수'
              />
              <Field
                name='let_pull_down_set'
                type='text'
                component={this.renderField}
                label='렛 풀 다운 세트 수'
              />
              <Field
                name='let_pull_down_weight'
                type='text'
                component={this.renderField}
                label='Kg'
              />
              </div>

              <div className = {lackpull ? "on-dead" : "off-dead"}>
              <Field
                name='lackpull_reps'
                type='text'
                component={this.renderField}
                label='렉풀 횟수'
              />
              <Field
                name='lackpull_set'
                type='text'
                component={this.renderField}
                label='렉풀 세트 수'
              />
              <Field
                name='lackpull_weight'
                type='text'
                component={this.renderField}
                label='Kg'
              />
              </div>

              <button className = "btn btn-outline-primary">수정</button>
      
      </form>
        
        </div>
        <div className = "blank6">

        </div>
        </div>
    );
  }
}

const mapStateToProps = state => (
  {
  isAuthenticated: state.user.isAuthenticated,
  dead : state.routine.deadlift,
  pullup : state.routine.pullup,
  d_row : state.routine.d_row,
  b_row : state.routine.b_row,
  o_a_d_row : state.routine.o_a_d_row,
  lackpull : state.routine.lackpull,
  latpull_down : state.routine.latpull_down,
  seated_cable_row : state.routine.seated_cable_row,

});

BackForm = connect(
  mapStateToProps,
  {editBack,
    toggleDead,
    togglePullup, 
    toggle_D_row,
    toggle_B_row,
    toggle_O_a_d_row,
    toggle_Lackpull,
    toggle_Latpull_down,
    toggle_Seated_cable_row}
)(BackForm);

export default reduxForm({
  form: 'BackForm'
})(BackForm);