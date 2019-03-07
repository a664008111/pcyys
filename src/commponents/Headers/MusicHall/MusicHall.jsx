import React, { Component } from 'react';
import { HashRouter as Router, Route,NavLink ,Switch,  Redirect } from 'react-router-dom';
import homepage from './homepage/homepage.jsx';
import singer from './singer/singer.jsx';
import Album from './Album/Album.jsx';
import RankingList from './RankingList/RankingList.jsx';
import Classified from './Classified/Classified.jsx';
import station from './station/station.jsx';
import radioMV from './radioMV/radioMV.jsx';
import Digitalalbum from './Digitalalbum/Digitalalbum.jsx';
import Ticketing from './Ticketing/Ticketing.jsx';
import Gshou from './singer/geshoubox.jsx';
import MVbox from './homepage/MV/MVbo.jsx';
import './MusicHall.scss';
class MusicHall extends Component {
  constructor(props){
    super(props)
    this.state = {
      Links:[{"首页":"/MusicHall/homepage"},{"歌手":"/MusicHall/singer"},{"专辑":"/MusicHall/Album"},{"排行榜":"/MusicHall/RankingList"},{"分类歌单":"/MusicHall/Classified"},{"电台":"/MusicHall/station"},{"MV":"/MusicHall/radioMV"},{"数字专辑":"/MusicHall/Digitalalbum"},{"票务":"/MusicHall/Ticketing"}],
    }
  }
  render() {
    return (
      <div className="MusicHall">
      <Router>
        <div className="MusicHall-list">
          {
             this.state.Links.map((item, index) =>{
              return <li key={index}><NavLink activeClassName='activee' to={Object.values(item)[0]}>{Object.keys(item)[0]}</NavLink></li>
          })
          }
          </div>
        </Router>
        <Router>
          <div>
            <Switch>
              <Route path="/MusicHall/homepage" component={homepage}></Route>
              <Route path="/MusicHall/singer" component={singer}></Route>
              <Route path="/MusicHall/Album" component={Album}></Route>
              <Route path="/MusicHall/RankingList" component={RankingList}></Route>
              <Route path="/MusicHall/Classified" component={Classified}></Route>
              <Route path="/MusicHall/station" component={station}></Route>
              <Route path="/MusicHall/radioMV" component={radioMV}></Route>
              <Route path="/MusicHall/Digitalalbum" component={Digitalalbum}></Route>
              <Route path="/MusicHall/Ticketing" component={Ticketing}></Route>
              <Route path="/MusicHall/Gshou/:id" component={Gshou}></Route>
              <Route path="/MusicHall/MVbox/:id" component={MVbox}></Route>
              <Redirect path="/" to={{pathname: '/MusicHall/homepage'}} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default MusicHall;
