import React, { Component } from 'react';
import {AlbumApi,Albumbox} from '../../../../api/Album';
import cover from '../../../../common/images/cover_play@2x.png'
import {message} from 'antd';
import { Pagination } from 'antd';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import logins from '../../../../common/images/loadings.gif'
import './Album.scss';
class Album extends Component {
  constructor(props){
    super(props)
    this.state = {
      tags:{},
      area:7,
      list:[],
      company:-1,
      genre:-1,
      type:-1,
      year:-1,
      shows:false,
      blocks:false,
      contextsa:0,
      contextsb:0,
      contextsc:0,
      contextsd:0,
      contextse:0,
      absx:0,
      yeartext:'年代',
      companytext:'唱片公司',
      total:0,
      pages:1,
      sort:2,
      areaname:'推荐',
      tur:[{name:"最新",id:2},{name:"最热",id:5}]
    }
  }
  componentDidMount(){
    this.lists(1)
    Albumbox().then(res=>{
      this.setState({
        list:res.albumlib.data.list,
        tags:res.albumlib.data.tags
      })
    });
  }
  wrapbox(i){
    let is = i * 20
    let data = `{"albumlib":{"method":"get_album_by_tags","param":{"area":${this.state.area},"company":${this.state.company},"genre":${this.state.genre},"type":${this.state.type},"year":${this.state.year},"sort":${this.state.sort},"get_tags":1,"sin":${is},"num":20,"click_albumid":0},"module":"music.web_album_library"},"comm":{"ct":24,"cv":0}}`
    
    AlbumApi(data).then(res=>{
      if(res.albumlib.data.list < 0){
        return;
      }
      this.setState({
        list:res.albumlib.data.list,
        total:res.albumlib.data.total / 2
      })
    })
  }
  yearbox(){
    let shows = this.state.shows
    shows = !shows
    this.setState({shows,blocks:false})
  }
  companybox(){
    let blocks = this.state.blocks
    blocks = !blocks
    this.setState({blocks,shows:false})
  }
  areabox(id,index,name){
    this.setState({area:id,contextsa:index,areaname:name,pages:1,sort:2},()=>{this.wrapbox(0)})
  }
  genrebox(id,index){
    this.setState({genre:id,contextsb:index,pages:1},()=>{this.wrapbox(0)})
  }
  typebox(id,index){
    this.setState({type:id,contextsc:index,pages:1},()=>{this.wrapbox(0)})
  }
  yearsbox(id,index,name){
    this.setState({year:id,contextsd:index,yeartext:name,pages:1},()=>{this.wrapbox(0)})
  }
  companysbox(id,index,name){
    this.setState({company:id,contextse:index,companytext:name,pages:1},()=>{this.wrapbox(0)})
  }
  lists=(ntj)=>{
    this.setState({
      pages:ntj
    },function(){
      this.wrapbox(ntj-1)
    })
  }
  zuix(id,index){
    this.setState({sort:id,absx:index},()=>{this.wrapbox(0)})
  }
  imgsone(item,index){
    message.success("正在开发中,请耐心等待... , invalid referer!");
    // getNewAlbum(item.content_id||item.tid).then(res=>{

    // })
  }
  render() {
    let {list,tags,area,contextsa,contextsb,contextsc,contextsd,contextse,areaname,tur,absx} = this.state
    if(JSON.stringify(tags) !== "{}"){
      return (
        <div className="Album">
            <div className='Albumapi'>
                <ul>
                    <h1>全部</h1>
                    {
                       tags.area && tags.area.map((item,index)=>{
                          return <li key={index} className={contextsa === index ? 'active' : 'abcs'} onClick={()=>{this.areabox(item.id,index,item.name)}}>{item.name}</li>
                       })
                    }
                </ul>
                {
                  area !== 7 ?  <div className='divshows'>
                  <ul>
                      <h1>流派</h1>
                      {
                         tags.genre && tags.genre.map((item,index)=>{
                            return <li key={index} className={contextsb === index ? 'active' : 'abcs'} onClick={()=>{this.genrebox(item.id,index)}}>{item.name}</li>
                         })
                      }
                  </ul>
                  <ul>
                      <h1>类别</h1>
                      {
                         tags.type && tags.type.map((item,index)=>{
                            return <li key={index} className={contextsc === index ? 'active' : 'abcs'} onClick={()=>{this.typebox(item.id,index)}}>{item.name}</li>
                         })
                      }
                  </ul>
                  <ul>
                      <h1>筛选</h1>
                      <div className='yearbox' onClick={()=>{this.yearbox()}}>{this.state.yeartext == '全部' ? '年代' :this.state.yeartext}{this.state.shows ? <i className='icon iconfont icon-fold'></i> : <i className='icon iconfont icon-unfold'></i>}
                      {
                          this.state.shows ? <p>
                          {
                              tags.year && tags.year.map((item,index)=>{
                                  return <li key={index} className={contextsd === index ? 'active' : 'abcs'} onClick={()=>{this.yearsbox(item.id,index,item.name)}} >{item.name}</li>
                              })
                          }
                          </p> : ''
                      }
                      </div>
                      <div className='companybox' onClick={()=>{this.companybox()}}>{this.state.companytext == '全部' ? '唱片公司' :this.state.companytext}{this.state.blocks ? <i className='icon iconfont icon-fold'></i> : <i className='icon iconfont icon-unfold'></i>}
                      {
                          this.state.blocks ? <p>
                          {
                              tags.company && tags.company.map((item,index)=>{
                                  return <li key={index} className={contextse === index ? 'active' : 'abcs'} onClick={()=>{this.companysbox(item.id,index,item.name)}}>{area === item.area || item.area === -1 ? item.name : null}</li>
                              })
                          }
                          </p> : ''
                      }
                      </div>
                  </ul>
                  </div> :''
                }
            </div>
            <div className='mvtext'>
            <h2><span>{areaname}</span><p>{tur.map((item,index)=>{return <b className={absx === index ? 'active' : 'odd'} key={index} onClick={()=>{this.zuix(item.id,index)}}>{item.name}</b>})}</p></h2>
            {
              list.length > 0 ? <div className='addsoytr'>
              {
                 list && list.slice(0,20).map((item,index)=>{
                    return <dl key={index}>
                      <dt><img className='coverimg' src={`//y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`} alt=""/><div className='coverimg' ><div  className='coverimgs' onClick={()=>{this.imgsone(item,index)}} style={{backgroundImage: 'url(' + cover + ')'}}></div> </div></dt>
                      <dd>
                        <h3><span>{item.album_name}</span></h3>
                        <h4>
                            {
                              item.singers.map((items,indexs)=>{
                                return <span key={indexs}><Router><NavLink to={`/MusicHall/Gshou/${items.singer_mid}`}>{items.singer_name}</NavLink></Router> </span>
                              })
                            }
                        </h4>
                        <p>{item.public_time}</p>
                      </dd>
                    </dl>
                 })
              }
              </div> : <div className='sousuobox'>暂无搜索内容</div>
            }
            </div>
            {
              area !== 7 || list.length <= 0 ? <Pagination defaultCurrent={1} total={this.state.total} onChange={this.lists}/> : ''
            }
        </div>
      );
    }else{
      return (<div className='loginsbox'><img src={logins} alt=""/></div>)
    }
  }
}

export default Album;