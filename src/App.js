import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import TopNav from "./components/common/TopNav";
import Home from "./components/home/Main";
import Photo from "./components/photo/Main";
import Corona from "./components/corona/Main";

function App() {
  return (
      <React.Fragment>
		  <TopNav/>
		  <div className="content">
			  <Route exact path="/" component={Home}/>
			  <Route path="/photo" component={Photo}/> {/* exact props */}
			  <Route path="/corona" component={Corona}/> {/* exact props */}
		  </div>
	  </React.Fragment>
  );
}

export default App;
