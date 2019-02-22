import React, { Component } from 'react';
import {getCarousel ,getNewAlbum, getCarouselone,getCarouselones} from "../../../../../api/Songlistrecommendation";
import './Songlistrecommendation.scss';
import Swiper from "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.min.css";
import cover from '../../../../../common/images/cover_play@2x.png'
import shuju from '../../../../../common/images/wushuju.png'
class Songlistrecommendation extends Component {
   constructor(props){
     super(props)
     this.state = {
        list:["为你推荐","网络歌曲","年终盘点","经典国语","官方歌单","情歌"],
        mySwiper:null,
        count:0,
        listnoe:[],
        o:1,
        rights:0,
        lefts:0
     }
   }
    componentDidMount(){
      this.lists(0);
       new Swiper("swiper-container",{
        pagination: {
          el: '.one .swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
       }); 

    }
    lists(index){
      let rights=document.getElementsByClassName("qqslide")[0];
      rights.style= `transform:translateX(${0}px)`
      this.setState({
        o:1
      })
      if(index===0){
            getCarousel().then(res=>{
              console.log(res)
              this.setState({
                listnoe:res.recomPlaylist.data.v_hot
              })
          });
      }else{
        getCarouselone().then(res=>{
          this.setState({
            listnoe:res.playlist.data.v_playlist
          })
      });
      }
      this.setState({
        count:index
      })
    }
    imgsone(item,index){
      console.log(item,index);
      getNewAlbum(item.content_id||item.tid).then(res=>{
        console.log(res)
      })
    }
    Right(){
      let rights=document.getElementsByClassName("qqslide")[0];
      let count = (document.querySelectorAll('dl').length / 10) + 1;
      const o = this.state.o + 1
      this.setState({
        o
      })
      console.log(parseInt( count),this.state.o);
      console.log('right',rights.offsetWidth);
      if(this.state.o>=count){
        this.setState({
          o:parseInt(count)
        })
        return;
      }else{
        this.setState({rights:-rights.offsetWidth * this.state.o})
        rights.style= `transform:translateX(-${rights.offsetWidth * this.state.o}px)`
        
      }
    }
    Left(){
      let rights=document.getElementsByClassName("qqslide")[0];
      let count = (document.querySelectorAll('dl').length / 10) + 1;
      console.log('left',rights.offsetWidth,this.state.rights);
      
      const o = this.state.o - 1
      this.setState({
        o
      })
      console.log(this.state.o)
      rights.style= `transform:translateX(${this.state.rights / this.state.o}px)`
    }
  render() {
    let {listnoe} = this.state;
    console.log(listnoe)
    return (
      <div className="Songlistrecommendation">
            <h1>歌单推荐</h1>
            <ul>
              {
                this.state.list.map((item,index)=>{
                  return <li  onClick={(e)=>{this.lists(index)}} key={index} className={index==this.state.count?'actives':null}>{item}</li>
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
                      return  <dl key={index}>
                          <dt><img className="coverimg" src={item.cover || item.cover_url_big} alt=""/><div className='coverimg' ><div  className='coverimgs' onClick={()=>{this.imgsone(item,index)}} style={{backgroundImage: 'url(' + cover + ')'}}></div> </div></dt>
                          <dd>
                            <p>{item.title}</p>
                            <span>播放量：{item.listen_num > 10000 ? ((item.listen_num / 10000).toFixed(1)) + '万' : item.listen_num}</span>
                          </dd>
                        </dl>
                    }) : <div style={{width:'100%',height:'281px'}}><img src={shuju} alt="" style={{marginTop: '10%',marginLeft: '50%',transform: 'translate3d(-50%,-50%,0)'}}/><h3 style={{position: 'absolute',bottom: '100px',left: '50%',transform: 'translateX(-50%)'}}>哦呦,数据走丢了！！！</h3></div>
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

