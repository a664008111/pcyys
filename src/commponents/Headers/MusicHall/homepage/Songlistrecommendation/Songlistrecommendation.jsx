import React, { Component } from 'react';
import {getCarousel ,getNewAlbum, getCarouselone} from "../../../../../api/Songlistrecommendation";
import './Songlistrecommendation.scss';
import cover from '../../../../../common/images/cover_play@2x.png'
import shuju from '../../../../../common/images/wushuju.png';
import loading from '../../../../../common/images/loadings.gif';
import images from '../../../../../common/images/bg_detail.jpg';
import {message} from 'antd';
class Songlistrecommendation extends Component {
   constructor(props){
     super(props)
     this.state = {
        list:["为你推荐","网络歌曲","年终盘点","经典国语","官方歌单","情歌"],
        mySwiper:null,
        count:0,
        listnoe:[],
        lat:loading,
        o:0,
        rights:0,
        lefts:0
     }
   }
    componentDidMount(){
      this.lists(0);
    }
    lists(index){
      let rights=document.getElementsByClassName("qqslide")[0];
      let les = document.getElementById('iconfont')
      let ris = document.getElementById('iconaont')
      les.style='color:#000'
      ris.style='color:#000'
      rights.style= `transform:translateX(${0}px)`;
      rights.style= `transition: all 0s;`
      this.setState({
        o:0
      })
      if(index===0){
            getCarousel().then(res=>{
              this.setState({
                listnoe:res.recomPlaylist.data.v_hot,
                lat:shuju
              })
          });
      }else{
        getCarouselone().then(res=>{
          this.setState({
            listnoe:res.playlist.data.v_playlist,
            lat:shuju
          })
      });
      }
      this.setState({
        count:index
      })
    }
    imgsone(item,index){
      message.success("正在开发中,请耐心等待... , invalid referer!");
      // getNewAlbum(item.content_id||item.tid).then(res=>{

      // })
    }
    Right(){
      let rights=document.getElementsByClassName("qqslide")[0];
      let count = (document.getElementsByClassName('utf8s').length / 10);
      let les = document.getElementById('iconfont')
      let ris = document.getElementById('iconaont')
      les.style='color:#000'
      if(this.state.o >= Math.floor(count)){
        this.setState({
          o:Math.floor(count)
        },function(){
          message.success("到达终点啦！！！");
          ris.style='color:red'
          return;
        })
      }else{
        const o = this.state.o + 1
        this.setState({
          o
        },function(){
          rights.style= `transform:translateX(-${rights.offsetWidth * this.state.o}px)`
        })
      }
    }
    Left(){
      let rights=document.getElementsByClassName("qqslide")[0];
      let les = document.getElementById('iconfont')
      let ris = document.getElementById('iconaont')
      ris.style='color:#000'
      if(this.state.o > 0){
        const o = this.state.o - 1
      this.setState({
        o
      },function(){
        rights.style= `transform:translateX(-${rights.offsetWidth * this.state.o}px)`
      })
      }else{
        this.setState({rights:0,o:0},function(){
          message.success("这是起点哦！！！");
          les.style='color:red'
          return
        })
      }
    }
  render() {
    let {listnoe} = this.state;
    return (
      <div className="Songlistrecommendation">
            <h1>歌单推荐</h1>
            <ul>
              {
                this.state.list.map((item,index)=>{
                  return <li  onClick={(e)=>{this.lists(index)}} key={index} className={index===this.state.count?'actives':null}>{item}</li>
                })
              }
            </ul>
            <div className="swiperbox">
            <ol>
              <li>
                <i className="icon iconfont icon-back" id="iconfont" onClick={()=>{this.Left()}}></i>
                <div className="qqslide">
                  {
                    listnoe.length > 0 ? listnoe.map((item,index)=>{
                      return  <dl key={index} className="utf8s">
                          <dt>{listnoe ?  <img className="coverimg" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;" src={item.cover || item.cover_url_big ?item.cover || item.cover_url_big : loading} alt=""/> : <img className="coverimg" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;" src={images} alt=""/>}<div className='coverimg' ><div  className='coverimgs' onClick={()=>{this.imgsone(item,index)}} style={{backgroundImage: 'url(' + cover + ')'}}></div> </div></dt>
                          <dd>
                            <p >{item.title}</p>
                            <span>播放量：{item.listen_num > 10000 || item.access_num > 10000 ? ((item.listen_num / 10000 || item.access_num / 10000).toFixed(1)) + '万' : item.listen_num || item.access_num}</span>
                          </dd>
                        </dl>
                    }) : <div style={{width:'100%',height:'281px'}}><img src={this.state.lat} alt="" style={{marginTop: '10%',marginLeft: '50%',transform: 'translate3d(-50%,-50%,0)'}}/><h3 style={{position: 'absolute',bottom: '100px',left: '50%',transform: 'translateX(-50%)'}}>哦呦,数据走丢了！！！</h3></div>
                  } 
                  </div>
                  <i className="icon iconfont icon-right" id="iconaont" onClick={()=>{this.Right()}}></i>
              </li>
            </ol>
            </div>
      </div>
    );
  }
}
export default Songlistrecommendation;

