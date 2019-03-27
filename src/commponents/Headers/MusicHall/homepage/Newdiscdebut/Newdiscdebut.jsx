import React, { Component } from 'react';
import {getCarousels} from "../../../../../api/Newdiscdebut";
import './Newdiscdebut.scss';
import cover from '../../../../../common/images/cover_play@2x.png'
import shuju from '../../../../../common/images/wushuju.png';
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css'
import {message} from 'antd';
class Newdiscdebut extends Component {
   constructor(props){
     super(props)
     this.state = {
        list:["内地","港台","欧美","韩国","日本"],
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
      if(index===0){this.getbox(1)}else if(index === 1){this.getbox(0)}else if(index === 2){this.getbox(3)}else if(index === 3){this.getbox(15)}else if(index === 4){this.getbox(14)}
      this.setState({
        count:index
      })
    }
    getbox(data){
      getCarousels(data).then(res=>{
        this.setState({
          listnoe:res.new_album.data.list.slice(0,10),
          listtow:res.new_album.data.list.slice(10,20),
          listtrr:res.new_album.data.list.slice(20,30),
          listfour:res.new_album.data.list.slice(30,40)
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
    let Newdlist = [];
    Newdlist.push(listnoe,listtow,listtrr,listfour)
    let addsNewdlist = Newdlist.map((itemx,indexx)=>{
      return <div key={indexx} className="swiper-slide">
      <div className = 'boxetec'>
          {
              itemx.length > 0 ? itemx.map((item,index)=>{
                return  <dl key={index} className="Tatgbust" mid = {item.id}>
                    <dt><img className="coverimg" src={`https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`} alt=""/><div className='coverimg' ><div  className='coverimgs' onClick={()=>{this.imgsone(item,index)}} style={{backgroundImage: 'url(' + cover + ')'}}></div> </div></dt>
                    <dd>
                      <p title={item.album_name}>{item.album_name}</p>
                      <h4 className='h4but'>
                        {item.singers.map((items,indexs)=>{
                          return item.singers.length > 1 ? <span id='hct' key={indexs}>{items.singer_name} <i>/</i> </span> : <span key={index}>{items.singer_name}</span>
                      })}
                      </h4>
                      
                    </dd>
                  </dl>
              }) : <div style={{width:'100%',height:'281px'}}><img src={shuju} alt="" style={{marginTop: '10%',marginLeft: '50%',transform: 'translate3d(-50%,-50%,0)'}}/><h3 style={{position: 'absolute',bottom: '100px',left: '50%',transform: 'translateX(-50%)'}}>哦呦,数据走丢了！！！</h3></div>
            } 
    </div>
</div>
    })
    return (
      <div className="Newdiscdebut">
            <h1>新碟首发</h1>
            <ul>
              {
                this.state.list.map((item,index)=>{
                  return <li  onClick={(e)=>{this.lists(index)}} key={index} className={index===this.state.count?'actives':null}>{item}</li>
                })
              }
            </ul>
            <div className="swiperboxsc">
            <ol>
              <li>
                <div className="qqslidec">
                <div className="swiper-container">
                <div className="swiper-pagination"></div>
                    <div className="swiper-wrapper">
                    {addsNewdlist}
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
export default Newdiscdebut;
