// action types
export const ADD_HABIT = 'ADD_HABIT';
export const DELETE_HABIT = 'DELETE_HABIT';
export const SHOW_ADD_HABIT_MODAL = 'SHOW_ADD_HABIT_MODAL';
export const SHOW_SET_STATUS_MODAL = 'SHOW_SET_STATUS_MODAL';
export const HABIT_STATUS_NONE = 'HABIT_STATUS_NONE';
export const HABIT_STATUS_DONE = 'HABIT_STATUS_DONE';
export const HABIT_STATUS_NOTDONE = 'HABIT_STATUS_NOTDONE';
export const SHOW_WEEK_VIEW = 'SHOW_WEEK_VIEW';

// add habit action creator
export const addHabit = (habit) => {
  return {
    type: ADD_HABIT,
    habit
  }
}

// delete habit action creator
export const deleteHabit = (habitId) => {
  return {
    type: DELETE_HABIT,
    habitId
  }
}

// action creator to show/close the add habit modal
export const showAddHabitModal = (showModal) => {
  return {
    type: SHOW_ADD_HABIT_MODAL,
    showModal
  }
}

// action creator to show/close the set habit status modal
export const showSetStatusModal = (showModal) => {
  return {
    type: SHOW_SET_STATUS_MODAL,
    showModal
  }
}

// action creator to set the habit status for a day to none
export const setStatusToNone = (dayId) => {
  return {
    type: HABIT_STATUS_NONE,
    dayId
  }
}

//action creator to set habit status for a day to DONE
export const setStatusToDone = (dayId) => {
  return {
    type: HABIT_STATUS_DONE,
    dayId
  }
}

// action creator to set habit staus for a day to NOT DONE
export const setStatusToNotDone = (dayId) => {
  return {
    type: HABIT_STATUS_NOTDONE,
    dayId
  }
}

// action creator to toggle views
export const goToWeekView = (showWeekView) => {
  return {
    type: SHOW_WEEK_VIEW,
    showWeekView
  }
}