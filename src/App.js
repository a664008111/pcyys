import React, { Component } from 'react';
import './App.scss';
import Headers from './commponents/Headers/Headers.jsx';
import Setions from './commponents/Setions/Setions.jsx';
import Footers from './commponents/Footers/Footers.jsx';
import qqhome from './common/images/qqhome.jpg';
import qqhome1 from './common/images/qqhome1.jpg';
import qqhome2 from './common/images/qqhome2.jpg';
import qqhome3 from './common/images/qqhome3.jpg';
import Swiper from "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.min.css";
class App extends Component {
  state = {
    show:true
  }
  componentDidMount(){
    let str = sessionStorage.obj;
    if(str){
      let obj = JSON.parse(str);
      if(obj.userID === 0){
         this.setState({show:false});
      }
    }
    new Swiper(".swiper-container", {//Swiper实例
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    }); 
  }
  kai(){
    this.setState({show:false});
  }
  render() {
    return (
      <div className="App">
      {
      this.state.show ? 
      <div className="qqhome">
          <div className="swiper-container sect">
              <div className="swiper-pagination"></div>
                  <div className="swiper-wrapper" ref='slides'>
                      <div className="swiper-slide"><img src={qqhome1}/></div>
                      <div className="swiper-slide"><img src={qqhome2}/></div>
                      <div className="swiper-slide"><img src={qqhome3}/></div>
                      <div className="swiper-slide qqhome-slide"><img src={qqhome}/>
                      <span className="bb" onClick={()=>{this.kai()}} style={{position: 'absolute', bottom: '26%', left: "50%", transform: 'translateX(-50%)',borderRadius:'2px', transition: 'all 1s', width: '180px',height:'50px',textAlign: 'center',lineHeight:"50px",color:'#fff',cursor:'pointer'}}>马上开启QQ音乐</span>
                      </div>
                  </div>
              <div className="swiper-button-prev swiper-button-white"></div>
              <div className="swiper-button-next swiper-button-white"></div>
          </div>
          <audio src=""></audio>
      </div> : <div>
              <Headers/>
              <Setions/>
              <Footers/>
            </div>
      } 
      </div>
    );
  }
}

export default App;
