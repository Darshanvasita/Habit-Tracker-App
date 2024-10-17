import { ToastContainer } from "react-toastify";
import DetailView from "../pages/DetailView";
import Navbar from "./Navbar";
import {Routes, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import WeekView from "../pages/WeekView";
import Footer from "./Footer";

/*  
  Routes and Route component from react-router-dom package 
  is used to navigate to Detail View and WeekView
*/

// App component
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<DetailView />} />
        <Route exact path="/week-view" element={<WeekView />} />
      </Routes>
      <Footer/>

    </div>
  );
}

// export App component
export default App;
