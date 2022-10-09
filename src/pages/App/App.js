import React from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import About from '../../components/About/About'
import TestDisplay from '../../components/TestDisplay/TestDisplay'
import TestOnePage from '../TestOnePage/TestOnePage';
import TestTwoPage from '../../pages/TestTwoPage/TestTwoPage';
import Footer from '../../components/Footer/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" render={()=> 
            <div>
              <About/>
              <TestDisplay/>
            </div>
          }>
          </Route>
          <Route exact path="/testone" render={()=> 
            <TestOnePage/>
          }>
          </Route>
          <Route exact path="/testtwo" render={()=> 
            <TestTwoPage/>
          }>
          </Route>
        </Switch>  
      </Router>
      <Footer/>
    </div>
  );
}

export default App;