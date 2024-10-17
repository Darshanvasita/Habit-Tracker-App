import React, { Component } from 'react'
import styles from '../styles/Habit.module.css'
import { deleteHabit } from '../actions';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { getCompletedDaysCount } from '../utilities';

// Habit component of Detail view
export class Habit extends Component {

  // handle deleting a habit
  handleDeleteHabit = (habitId) => {
    try{
      this.props.dispatch(deleteHabit(habitId)); //dispatch action to delete a habit
      toast.success('Habbit deleted successfully'); //success notification
    }catch(e){
      toast.error('Error in deleting habit'); //error notification
    }
  }

  render() {
    const {habit} = this.props; //get habit from props
    // console.log(this.props);

    return (
      <div className={styles.habit}>
        <div className={styles.habitDetails}>
          <p>{habit.name}</p>
          <span>Created time: {habit.createdDateTime}</span>
          <span>Completed: {getCompletedDaysCount(habit, 0)}/7 days</span>
        </div>
        <div className={styles.habitActions}>
          <i className="fa-solid fa-trash" onClick={() => {this.handleDeleteHabit(habit.id)}} />
        </div>
      </div>
    );
  }
}

// callback function get state from store
function mapStateToProps(state){
  return state;
}

// connect component with store
const connectedHabitComponent = connect(mapStateToProps)(Habit);

// export the component
export default connectedHabitComponent;