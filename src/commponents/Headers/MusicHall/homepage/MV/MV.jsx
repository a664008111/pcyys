import React, { Component } from 'react';
import {getCarousels} from "../../../../../api/MV";
import './MV.scss';
import cover from '../../../../../common/images/cover_play@2x.png'
import shuju from '../../../../../common/images/wushuju.png';
import Swiper from 'swiper/dist/js/swiper.min.js';
import logins from '../../../../../common/images/loading.gif';
import { HashRouter as Router,NavLink } from 'react-router-dom';
import 'swiper/dist/css/swiper.min.css'
import {message} from 'antd';
class MV extends Component {
   constructor(props){
     super(props)
     this.state = {
        list:["精选","内地","韩国","港台","欧美","日本"],
        count:0,
        listnoe:[],
        listtow:[],
        listtrr:[],
        listfour:[],
        o:0,
        rights:0,
        lefts:0
     }
   }
    componentDidMount(){
      this.lists(0);
    }
    lists(index){
      new Swiper(".swiper-container",{
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }); 
      if(index===0){let data = 'all';this.getbox(data);
      }else if(index === 1){let data = 'neidi';this.getbox(data);
      }else if(index === 2){let data = 'korea';this.getbox(data);
      }else if(index === 3){let data = 'gangtai';this.getbox(data);
      }else if(index === 4){let data = 'oumei';this.getbox(data);
      }else if(index === 5){let data = 'janpan';this.getbox(data);
      }
      this.setState({
        count:index
      })
    }
    getbox(data){
      getCarousels(data).then(res=>{
        this.setState({
          listnoe:res.data.mvlist.slice(0,10),
          listtow:res.data.mvlist.slice(10,20),
          listtrr:res.data.mvlist.slice(20,30),
          listfour:res.data.mvlist.slice(30,40)
        })
    });
    }
    imgsone(item,index){
      message.success("正在开发中,请耐心等待... , invalid referer!");
      // getNewAlbum(item.content_id||item.tid).then(res=>{

      // })
    }
  render() {
    let {listnoe,listtow,listtrr,listfour} = this.state;
    let boxlist = [];
    boxlist.push(listnoe,listtow,listtrr,listfour);
    let addsMv=boxlist.map((items,indexs)=>{
        return <div key={indexs} className="swiper-slide">
        <div className = 'boxetell'>
        {
            items.length > 0 ? items.map((item,index)=>{
              return  <dl key={index} className="Tatgbust" mid = {item.id}>
                  <dt><img className="coverimg" src={item.picurl} alt=""/><div className='coverimg' ><div  className='coverimgs' onClick={()=>{this.imgsone(item,index)}} style={{backgroundImage: 'url(' + cover + ')'}}></div> </div></dt>
                  <dd>
                    <p title={item.mvtitle}>{item.mvtitle}</p>
                    <b>{item.singer_name}</b>
                    <h4 className='h4but'>
                        <i className='icon iconfont icon-record'></i><span>{item.listennum > 10000 ? ((item.listennum / 10000).toFixed(1)) + '万' : item.listennum}</span>
                    </h4>
                    
                  </dd>
                </dl>
            }) : <div style={{width:'100%',height:'281px'}}><img src={shuju} alt="" style={{marginTop: '10%',marginLeft: '50%',transform: 'translate3d(-50%,-50%,0)'}}/><h3 style={{position: 'absolute',bottom: '100px',left: '50%',transform: 'translateX(-50%)'}}>哦呦,数据走丢了！！！</h3></div>
          } 
        </div>
    </div>
    })
    return (
      <div className="MV">
            <h1>MV</h1>
            <ul>
              {
                this.state.list.map((item,index)=>{
                  return <li  onClick={(e)=>{this.lists(index)}} key={index} className={index===this.state.count?'actives':null}>{item}</li>
                })
              }
            </ul>
            <div className="swiperboxsll">
            <ol>
              <li>
                <div className="qqslidell">
                <div className="swiper-container">
                <div className="swiper-pagination"></div>
                    <div className="swiper-wrapper">
                    {addsMv}
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
export default MV;
