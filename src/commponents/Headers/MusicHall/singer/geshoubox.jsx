import React, { Component } from 'react';
import {getCarousels,zjCarous,dqCarous,MVCarous,Guanzhu,XSgsCarous,MVCarsc} from '../../../../api/geshoubox';
import './geshoubox.scss';
import cover from '../../../../common/images/cover_play@2x.png'
import images from '../../../../common/images/bg_detail.jpg';
import {message} from 'antd';

class geshoubox extends Component {
    constructor(props){
        super(props)
        this.state = {
            Zjgs:{},
            dqCa:{},
            MVCa:{},
            Guanz:0,
            imgs:'',
            MVCarsc:[],
            XSgsCarousa:[]
        }
    }
    componentDidMount(){
        let data = this.props.match.params.id
        getCarousels(data).then(res=>{
            // this.setState({
            //     Zjgs:res.singerAlbum.data,
            //     imgs:res.singerAlbum.data.singer_mid 
            // })
          });
        zjCarous(data).then(res=>{
            this.setState({
                Zjgs:res.singerAlbum.data,
                
            })
          });
          dqCarous(data).then(res=>{
            this.setState({
                dqCa:res.data,
                imgs:res.data.singer_mid 
            })
          });
          MVCarous(data).then(res=>{
            this.setState({
                MVCa:res.data
            })
          });
          Guanzhu(data).then(res=>{
            this.setState({
                Guanz:res.msg
            })
          });
          XSgsCarous(data).then(res=>{
            this.setState({
                XSgsCarousa:res.singers.items
            })
          });
          MVCarsc(data).then(res=>{
            this.setState({
                MVCarsc:res.data.list
            })
          });
    }
    imgsone(item,index){
        message.success("正在开发中,请耐心等待... , invalid referer!");
        // getNewAlbum(item.content_id||item.tid).then(res=>{
  
        // })
      }
  render() {
      let {Zjgs,dqCa,MVCa,Guanz,imgs,XSgsCarousa,MVCarsc} = this.state;
    return (
      <div className="geshoubox">
      {/* <p className='opssys'><img  src={images} alt=""/></p> */}
          <div className='gesdlss'>
                <dl>
                      <dt><img src={`//y.gtimg.cn/music/photo_new/T001R300x300M000${imgs}.jpg?max_age=2592000`} alt=""/></dt>
                      <dd>
                          <h1>{Zjgs.singer_name}</h1>
                          <h4>国籍：不知道 -.-, 出生地：不知道, 代表作：不知道</h4>
                          <ol>
                              <li>单曲 <b>{dqCa.total}</b></li>
                              <li>专辑 <b>{Zjgs.total}</b></li>
                              <li>MV <b>{MVCa.total}</b></li>
                          </ol>
                          <p><span><i className="icon iconfont icon-video"></i>播放歌手热门歌曲</span><span><i className="icon iconfont icon-add"></i>关注{Guanz > 10000 ? ((Guanz / 10000).toFixed(1)) + '万' : Guanz}</span></p>
                      </dd>
                </dl>
          </div>
          <div className='Remgq'>
                <h1><span>热门歌曲</span><b>全部 <i className='icon iconfont icon-right'></i></b></h1>
                <h4><span>歌曲</span><span>专辑</span><span>时长</span></h4>
                <ol>
                    {
                        dqCa.list && dqCa.list.slice(0,10).map((item,index)=>{
                            return <li key={index}>
                            <b>{index+1}</b>
                            <span><em>{item.musicData.songname} <span>{item.musicData.albumdesc}</span></em><h6>{item.musicData.isonly == 1 ?<u>独家</u>: ''}</h6><p className='ostuyyh'><i className="icon iconfont icon-video_light"></i><i className="icon iconfont icon-roundaddlight"></i><i className="icon iconfont icon-down_light"></i><i className="icon iconfont icon-share_light"></i></p></span>
                            <span>{item.musicData.albumname}</span>
                            <span>{(item.musicData.interval / 60) >10 ? (item.musicData.interval / 60) : '0' + parseInt(item.musicData.interval / 60)} : {(item.musicData.interval % 60) > 10 ? (item.musicData.interval % 60) : '0' + (item.musicData.interval % 60)}</span>
                        </li>
                        })
                    }
                </ol>
          </div>
          <div className='Rezj'>
                <h1><span>专辑</span><b>全部 <i className='icon iconfont icon-right'></i></b></h1>
                <div className='Rezjdl'>
                {
                    Zjgs.list && Zjgs.list.map((item,index)=>{
                        return <dl key={index}>
                        <dt><img src={`//y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`} alt=""/><div className='coverimg' ><div  className='coverimgs' onClick={()=>{this.imgsone(item,index)}} style={{backgroundImage: 'url(' + cover + ')'}}></div></div></dt>
                        <dd>
                            <span>{item.album_name}</span>    
                            <p>{item.pub_time}</p>
                        </dd>    
                    </dl>   
                    })
                }
                </div>
          </div>
          <div className='ReMVs'>
                <h1><span>MV</span><b>全部 <i className='icon iconfont icon-right'></i></b></h1>
                <div className='ReMVdl'>
                {
                    MVCa.list && MVCa.list.map((item,index)=>{
                        return  <dl key={index}>
                            <dt><img className="coverimg" src={item.pic} alt=""/><div className='coverimg' ><div  className='coverimgs' onClick={()=>{this.imgsone(item,index)}} style={{backgroundImage: 'url(' + cover + ')'}}></div> </div></dt>
                            <dd>
                            <p title={item.title}>{item.title}</p>
                            <h4 className='h4but'>
                                <i className='icon iconfont icon-record'></i><span>{item.listenCount > 10000 ? ((item.listenCount / 10000).toFixed(1)) + '万' : item.listenCount}</span>
                            </h4>
                            
                            </dd>
                        </dl>
                    })
                    } 
                </div>
          </div>
          <div className='ReMVs'>
                <h1>粉丝上传</h1>
                <div className='ReMVdls'>
                {
                    MVCarsc && MVCarsc.map((item,index)=>{
                        return  <dl key={index}>
                            <dt><img className="coverimg" src={item.pic} alt=""/><div className='coverimg' ><div  className='coverimgs' onClick={()=>{this.imgsone(item,index)}} style={{backgroundImage: 'url(' + cover + ')'}}></div> </div></dt>
                            <dd>
                            <p title={item.title}>{item.title}</p>
                            <span>{item.upload_nick}</span>
                            <h4 className='h4but'>
                                <i className='icon iconfont icon-record'></i><span>{item.listenCount > 10000 ? ((item.listenCount / 10000).toFixed(1)) + '万' : item.listenCount}</span>
                            </h4>
                            
                            </dd>
                        </dl>
                    })
                    } 
                </div>
          </div>
          <div className='Rexsges'>
            <h1>相似歌手</h1>
            <div className='Rexsgesbox'>
                {
                    XSgsCarousa.map((item,index)=>{
                        return <dl key={index}>
                            <dt><img src={item.pic} alt=""/></dt>
                            <dd>{item.name}</dd>
                        </dl>
                    })
                }
            </div>
            
          </div>
      </div>
    );
  }
}

export default geshoubox;
