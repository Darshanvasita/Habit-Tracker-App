import React, { Component } from 'react';
import styles from '../styles/HabitWeekView.module.css';
import SetHabitStatusModal from './SetHabitStatusModal';
import { connect } from 'react-redux';
import { showSetStatusModal } from '../actions';
import { toast } from 'react-toastify';
import { getCompletedDaysCount } from '../utilities';

// HabitWeekView component displays the weekly status of each habit
export class HabitWeekView extends Component {

  handleSetStatus = (habitId, day) => {
    const today = new Date();
    const date = new Date(day.yyyy, day.mm - 1, day.dd);

    if (date > today) {
      return toast.error('You cannot change the status of future days!');
    }

    localStorage.setItem('habit-id', habitId);
    localStorage.setItem('habit-day-id', day.id);

    this.props.dispatch(showSetStatusModal(true));
  };

  render() {
    const { habit, showModal } = this.props;
    const showSetStatusModal = showModal;

    return (
      <div className={styles.habitContainer}>
        <div className={styles.habitDetails}>
          <span className={styles.habitName}>{habit.name}</span>
          <div className={styles.sideInfo}>
            <span className={styles.dateCreated}>{habit.createdDateTime}</span>
            <span className={styles.completedCount}>{getCompletedDaysCount(habit, 0)}/7</span>
            <i id={styles.fav} className="fa-solid fa-star" title="Favorite Habit"></i>
          </div>
        </div>

        {/* Weekly status container */}
        <div className={styles.daysContainer}>
          {habit.weekLog.map((day, index) => (
            <div
              key={index}
              className={styles.dayBox}
              onClick={() => this.handleSetStatus(habit.id, day)}
            >
              <span className={styles.dayNumber}>{day.dd}</span>
              {day.isDone ? (
                <i className={`fa-solid fa-check ${styles.statusIcon} ${styles.done}`}></i>
              ) : day.isDone === '' ? (
                <></>
              ) : (
                <i className={`fa-solid fa-xmark ${styles.statusIcon} ${styles.notDone}`}></i>
              )}
            </div>
          ))}
        </div>

        {/* Modal component */}
        {showSetStatusModal && <SetHabitStatusModal />}
      </div>
    );
  }
}

// callback function to access the store state
function mapStateToProps(state) {
  return state;
}

// connect component to store
const ConnectedHabitWeekViewComponent = connect(mapStateToProps)(HabitWeekView);

export default ConnectedHabitWeekViewComponent;
