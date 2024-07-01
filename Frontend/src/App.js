import './App.css';
import React from 'react'
import Home from './Pages/Home'
import Details from './Pages/Details'
import NavigationBar from './Components/NavigationBar'
import Favorite from './Pages/'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './Store/index'

function App () {
  return(
    <Provider store={store}>
      <Router>
      <NavigationBar ></NavigationBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/character/:id">
            <Details />
          </Route>
          <Route path="/favorite">
            <Favorite />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}
export default App;
