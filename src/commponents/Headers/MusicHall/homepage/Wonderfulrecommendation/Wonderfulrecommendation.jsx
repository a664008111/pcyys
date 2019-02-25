import React, { Component } from 'react';
import {getCarousels} from "../../../../../api/Wonderfulrecommendation";
import './Wonderfulrecommendation.scss';
import cover from '../../../../../common/images/cover_play@2x.png'
import shuju from '../../../../../common/images/wushuju.png';
import loading from '../../../../../common/images/loading.gif';
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css'
import {message} from 'antd';
class Wonderfulrecommendation extends Component {
   constructor(props){
     super(props)
     this.state = {
        listnoe:[],
        listtow:[],
        lat:loading
     }
   }
    componentDidMount(){
      getCarousels().then(res=>{
        this.setState({
          listnoe:res.focus.data.content.slice(0,2),
          listtow:res.focus.data.content.slice(2,4)
        })
    });
      new Swiper(".swiper-container",{
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
    }
    imgsone(item,index){
      message.success("正在开发中,请耐心等待... , invalid referer!");
      // getNewAlbum(item.content_id||item.tid).then(res=>{

      // })
    }
  render() {
    let {listnoe,listtow} = this.state;
    return (
      <div className="Wonderfulrecommendation">
            <h1>精彩推荐</h1>
            <div className="swiperboxa">
            <ol>
              <li>
                <div className="qqslidea">
                <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide odds">{
                    listnoe.length > 0 ? listnoe.map((item,index)=>{
                      return <img key= {index} src={item.pic_info.url} alt=""/>
                    }) : <div style={{width:'100%',height:'281px'}}><img src={shuju} alt="" style={{marginTop: '10%',marginLeft: '50%',transform: 'translate3d(-50%,-50%,0)'}}/><h3 style={{position: 'absolute',bottom: '100px',left: '50%',transform: 'translateX(-50%)'}}>哦呦,数据走丢了！！！</h3></div>
                  } </div>
                  <div class="swiper-slide odds">{
                    listtow.length > 0 ? listtow.map((item,index)=>{
                      return <img key= {index} src={item.pic_info.url} alt=""/>
                    }) : <div style={{width:'100%',height:'281px'}}><img src={shuju} alt="" style={{marginTop: '10%',marginLeft: '50%',transform: 'translate3d(-50%,-50%,0)'}}/><h3 style={{position: 'absolute',bottom: '100px',left: '50%',transform: 'translateX(-50%)'}}>哦呦,数据走丢了！！！</h3></div>
                  } </div>
              </div>
              <div className="swiper-button-prev swiper-button-black" id='iconfont'></div>
              <div className="swiper-button-next swiper-button-black" id='iconaont'></div>
              </div>
                  </div>
              </li>
            </ol>
            </div>
      </div>
    );
  }
}
export default Wonderfulrecommendation;
