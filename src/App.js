import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./MainPage/Header";
import Home from "./MainPage/Home";
import Footer from "./MainPage/Footer";

function App(props) {

    return (
      <div>
        <Router>
          <Routes>
            <Route element={<Header/>} path={"/header"} history={props.history} />
            <Route element={<Home/>} path={"/home"} history={props.history} />
            <Route element={<Footer/>} path={"/footer"} history={props.history} />
            
         </Routes>
         </Router>
    </div>
  );
}

export default App;
