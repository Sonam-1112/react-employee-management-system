import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';
import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/dashboard" component={Main} />
        </Switch>
      </div>
  );
}

export default App;