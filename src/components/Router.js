import React from "react";
import { HashRouter as Router,Switch,Route  } from "react-router-dom";
import Home from 'routes/Home';
import Auth from "routes/Auth";
import Navigation from "./Navigation";

function AppRouter({isLoggedIn}){
  return (
    <Router>
      {isLoggedIn && <Navigation/>}
      <Switch>
        {isLoggedIn?(
          <>
            <Route exact path="/">
              <Home/>
            </Route>
          </>)
          :(
            <Route exact path="/">
              <Auth/>
            </Route>
          )}
      </Switch>
    </Router>
  )
};
export default AppRouter