import React, { Component } from 'react';
import './Setions.scss';
import { HashRouter as Router, Route, Switch,  Redirect} from 'react-router-dom';
import MusicHall from '../Headers/MusicHall/MusicHall.jsx';
import Mymusic from '../Headers/Mymusic/Mymusic.jsx';
import Client from '../Headers/Client/Client.jsx';
import Musicnumber from '../Headers/Musicnumber/Musicnumber.jsx';
import VIP from '../Headers/VIP/VIP.jsx';

class Setions extends Component {
  render() {
    return (
      <div className="Setions">
      <Router>
        <div>
        <Switch>
          <Route path="/MusicHall" component={MusicHall}></Route>
          <Route path="/Mymusic" component={Mymusic}></Route>
          <Route path="/Client" component={Client}></Route>
          <Route path="/Musicnumber" component={Musicnumber}></Route>
          <Route path="/VIP" component={VIP}></Route>
          <Redirect path="/" to={{pathname: '/MusicHall'}} />
        </Switch>
        </div>
        </Router>
      </div>
      
    );
  }
}

export default Setions;
