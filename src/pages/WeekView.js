import React, { Component } from 'react'
import styles from '../styles/WeekView.module.css';
import { connect } from 'react-redux';
import HabitWeekView from '../components/HabitWeekView';
import { getMonthName } from '../utilities';

// WeekView component
export class WeekView extends Component {
  render() {
    const {habits} = this.props;
    const currentDate = new Date();
    const currentMonthName = getMonthName(currentDate.getMonth());
    const currentYear = currentDate.getFullYear();
    // console.log(habits);

    return (
      <div className='week-view'>
        <div className={styles.calHeader}>{`${currentMonthName} ${currentYear}`}</div>
        <div className={styles.weekDays}>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thur</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        {/* Habits container */}
        <div className={styles.habitsContainer}>
          {habits.map((habit, index) => (
            <HabitWeekView habit={habit} key={index} />
          ))}
        </div>
      </div>
    )
  }
}

// callback function to get state from store
function mapStateToProps(state){
  return state;
}

// connect component to store
const connectedWeekViewComponent = connect(mapStateToProps)(WeekView);

// export the component
export default connectedWeekViewComponent;