import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { connect } from 'react-redux';
import { goToWeekView } from '../actions';

// Navbar component
function Navbar(props) {
  const {showWeekView} = props; //to toggle between views

  // handle switching views
  const toggleView = (showWeekView) => {
    props.dispatch(goToWeekView(showWeekView)); 
  }

  return (
    <div className={styles.nav}>
      <div className={styles.navLeft} >
        <img src="./lifestyle.png" alt='title-icon' height='40px' width='40px' style={{
        marginLeft:"50px"
        }} />
        <span>StreakSync</span>
      </div>
      <div className={styles.navRight}>
        {showWeekView ? 
          <Link to='/'>
            <p onClick={() => toggleView(false)}>Go To Detail view</p>
          </Link> : 
          <Link to='/week-view'>
            <p onClick={() => toggleView(true)}>Go to Week view</p>
          </Link>
        }
      </div>
    </div>
  )
}

// callback function to get state from store
function mapStateToProps(state){
  return state;
}

// connect component to store
const ConnectedNavbarComponent = connect(mapStateToProps)(Navbar);

// export the component
export default ConnectedNavbarComponent;