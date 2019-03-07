import React, { Component } from 'react';
import {getCarousels} from "../../../../../api/Newsongsfirst";
import './Newsongsfirst.scss';
import cover from '../../../../../common/images/cover_play@2x.png'
import shuju from '../../../../../common/images/wushuju.png';
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css'
import {message} from 'antd';
class Newsongsfirst extends Component {
   constructor(props){
     super(props)
     this.state = {
        list:["内地","港台","欧美","日本","韩国"],
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
      if(index===0){
        let data = `{"comm":{"ct":24},"new_song":{"module":"QQMusic.MusichallServer","method":"GetNewSong","param":{"type":1}}}`
        this.getbox(data);
      }else if(index === 1){
        let data = `{"comm":{"ct":24},"new_song":{"module":"QQMusic.MusichallServer","method":"GetNewSong","param":{"type":2}}}`
        this.getbox(data);
      }else if(index === 2){
        let data = `{"comm":{"ct":24},"new_song":{"module":"QQMusic.MusichallServer","method":"GetNewSong","param":{"type":3}}}`
        this.getbox(data);
      }else if(index === 3){
        let data = `{"comm":{"ct":24},"new_song":{"module":"QQMusic.MusichallServer","method":"GetNewSong","param":{"type":4}}}`
        this.getbox(data);
      }else if(index === 4){
        let data = `{"comm":{"ct":24},"new_song":{"module":"QQMusic.MusichallServer","method":"GetNewSong","param":{"type":5}}}`
        this.getbox(data);
      }
      
      this.setState({
        count:index
      })
    }
    getbox(data){
      getCarousels(data).then(res=>{
        this.setState({
          listnoe:res.new_song.data.song_list.slice(0,9),
          listtow:res.new_song.data.song_list.slice(9,18),
          listtrr:res.new_song.data.song_list.slice(18,27),
          listfour:res.new_song.data.song_list.slice(27,36)
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
    return (
      <div className="Newsongsfirst">
            <h1>新歌首发</h1>
            <ul>
              {
                this.state.list.map((item,index)=>{
                  return <li  onClick={(e)=>{this.lists(index)}} key={index} className={index===this.state.count?'actives':null}>{item}</li>
                })
              }
            </ul>
            <div className="swiperboxs">
            <ol>
              <li>
                <div className="qqslides">
                <div className="swiper-container">
                <div className="swiper-pagination"></div>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                        <div className = 'boxete'>
                            {
                                listnoe.length > 0 ? listnoe.slice(0,9).map((item,index)=>{
                                  return  <dl key={index} className="Tatgbust" mid = {item.id}>
                                      <dt><img className="coverimg" src={`https://y.gtimg.cn/music/photo_new/T002R90x90M000${item.album.mid}.jpg?max_age=2592000`} alt=""/><div className='coverimg' ><div  className='coverimgs' onClick={()=>{this.imgsone(item,index)}} style={{backgroundImage: 'url(' + cover + ')'}}></div> </div></dt>
                                      <dd>
                                        <p title={item.subtitle || item.title}>{item.subtitle || item.title}</p>
                                        <h4 className='h4but'>
                                          {item.singer.map((items,indexs)=>{
                                            return item.singer.length > 1 ? <span id='hct' key={indexs}>{items.name} <i>/</i> </span> : <span key={index}>{items.name}</span>
                                        })}
                                        </h4>
                                      </dd>
                                      <span className='spansy'>{(item.interval / 60) >10 ? (item.interval / 60) : '0' + parseInt(item.interval / 60)} : {(item.interval % 60) > 10 ? (item.interval % 60) : '0' + (item.interval % 60)}</span>
                                    </dl>
                                }) : <div style={{width:'100%',height:'281px'}}><img src={shuju} alt="" style={{marginTop: '10%',marginLeft: '50%',transform: 'translate3d(-50%,-50%,0)'}}/><h3 style={{position: 'absolute',bottom: '100px',left: '50%',transform: 'translateX(-50%)'}}>哦呦,数据走丢了！！！</h3></div>
                              } 
                      </div>
                  </div>
                        <div className="swiper-slide">
                        <div className = 'boxete'>
                  {
                    listtow.length > 0 ? listtow.slice(0,9).map((item,index)=>{
                      return  <dl key={index} className="Tatgbust" mid = {item.id}>
                          <dt><img className="coverimg" src={`https://y.gtimg.cn/music/photo_new/T002R90x90M000${item.album.mid}.jpg?max_age=2592000`} alt=""/><div className='coverimg' ><div  className='coverimgs' onClick={()=>{this.imgsone(item,index)}} style={{backgroundImage: 'url(' + cover + ')'}}></div> </div></dt>
                          <dd>
                            <p title={item.subtitle || item.title}>{item.subtitle || item.title}</p>
                            <h4 className='h4but'>
                              {item.singer.map((items,indexs)=>{
                                return item.singer.length > 1 ? <span id='hct' key={indexs}>{items.name} <i>/</i> </span> : <span key={index}>{items.name}</span>
                            })}
                            </h4>
                          </dd>
                          <span className='spansy'>{(item.interval / 60) >10 ? (item.interval / 60) : '0' + parseInt(item.interval / 60)} : {(item.interval % 60) > 10 ? (item.interval % 60) : '0' + (item.interval % 60)}</span>
                        </dl>
                    }) : <div style={{width:'100%',height:'281px'}}><img src={shuju} alt="" style={{marginTop: '10%',marginLeft: '50%',transform: 'translate3d(-50%,-50%,0)'}}/><h3 style={{position: 'absolute',bottom: '100px',left: '50%',transform: 'translateX(-50%)'}}>哦呦,数据走丢了！！！</h3></div>
                  } 
                  </div>
                        </div>
                        <div className="swiper-slide">
                        <div className = 'boxete'>
                  {
                    listtrr.length > 0 ? listtrr.slice(0,9).map((item,index)=>{
                      return  <dl key={index} className="Tatgbust" mid = {item.id}>
                          <dt><img className="coverimg" src={`https://y.gtimg.cn/music/photo_new/T002R90x90M000${item.album.mid}.jpg?max_age=2592000`} alt=""/><div className='coverimg' ><div  className='coverimgs' onClick={()=>{this.imgsone(item,index)}} style={{backgroundImage: 'url(' + cover + ')'}}></div> </div></dt>
                          <dd>
                            <p title={item.subtitle || item.title}>{item.subtitle || item.title}</p>
                            <h4 className='h4but'>
                              {item.singer.map((items,indexs)=>{
                                return item.singer.length > 1 ? <span id='hct' key={indexs}>{items.name} <i>/</i> </span> : <span key={index}>{items.name}</span>
                            })}
                            </h4>
                          </dd>
                          <span className='spansy'>{(item.interval / 60) >10 ? (item.interval / 60) : '0' + parseInt(item.interval / 60)} : {(item.interval % 60) > 10 ? (item.interval % 60) : '0' + (item.interval % 60)}</span>
                        </dl>
                    }) : <div style={{width:'100%',height:'281px'}}><img src={shuju} alt="" style={{marginTop: '10%',marginLeft: '50%',transform: 'translate3d(-50%,-50%,0)'}}/><h3 style={{position: 'absolute',bottom: '100px',left: '50%',transform: 'translateX(-50%)'}}>哦呦,数据走丢了！！！</h3></div>
                  } 
                  </div></div>
                        <div className="swiper-slide"><div className = 'boxete'>
                  {
                    listfour.length > 0 ? listfour.slice(0,9).map((item,index)=>{
                      return  <dl key={index} className="Tatgbust" mid = {item.id}>
                          <dt><img className="coverimg" src={`https://y.gtimg.cn/music/photo_new/T002R90x90M000${item.album.mid}.jpg?max_age=2592000`} alt=""/><div className='coverimg' ><div  className='coverimgs' onClick={()=>{this.imgsone(item,index)}} style={{backgroundImage: 'url(' + cover + ')'}}></div> </div></dt>
                          <dd>
                            <p title={item.subtitle || item.title}>{item.subtitle || item.title}</p>
                            <h4 className='h4but'>
                              {item.singer.map((items,indexs)=>{
                                return item.singer.length > 1 ? <span id='hct' key={indexs}>{items.name} <i>/</i> </span> : <span key={index}>{items.name}</span>
                            })}
                            </h4>
                          </dd>
                          <span className='spansy'>{(item.interval / 60) >10 ? (item.interval / 60) : '0' + parseInt(item.interval / 60)} : {(item.interval % 60) > 10 ? (item.interval % 60) : '0' + (item.interval % 60)}</span>
                        </dl>
                    }) : <div style={{width:'100%',height:'281px'}}><img src={shuju} alt="" style={{marginTop: '10%',marginLeft: '50%',transform: 'translate3d(-50%,-50%,0)'}}/><h3 style={{position: 'absolute',bottom: '100px',left: '50%',transform: 'translateX(-50%)'}}>哦呦,数据走丢了！！！</h3></div>
                  } 
                  </div>
                  </div>
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
export default Newsongsfirst;

