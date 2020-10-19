import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from './pages/homePage';
import RoomPage from './pages/roomPage';
import Payment from './pages/payment';
import NoMatch from "./pages/noMatch";
import "react-datepicker/dist/react-datepicker.css";
import "./css/main.css";


const App = () => {
  return(
    <>
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/room-select" exact component={RoomPage}></Route>
          <Route path="/payment" exact component={Payment}></Route>
          <Route path="*" exact component={NoMatch}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
};
export default App;
