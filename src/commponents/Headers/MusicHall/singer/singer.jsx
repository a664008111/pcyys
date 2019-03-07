import React, { Component } from 'react';
import {connect} from 'react-redux';
import Logings from '../../logings.jsx';
import {getCarousels,Sousuios,Clousebox} from '../../../../api/singer';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import { Pagination } from 'antd';
import logins from '../../../../common/images/loadings.gif'
import './singer.scss';
class singer extends Component {
  constructor(props){
    super(props)
    this.state = {
      singers:[],
      sousubox:{},
      singerlist:[],
      counta:0,
      countb:0,
      countc:0,
      countd:0,
      singeraid:-100,
      singerbid:-100,
      singercid:-100,
      singerdid:-100,
      textbox:[],
      total:0,
      pages:1,
      fenleis:'正在加载 , 请稍后...'
    }
    this.zhanghao = this.zhanghao.bind(this);
    this.mima = this.mima.bind(this);
  }
  // pushHistory(){
    
  //   let str = sessionStorage.Gsid;
  //     let obj = JSON.parse(str);
  //     console.log(obj)
  //       this.counta(obj.ida,obj.a)
  // }
  componentDidMount(){
    this.lists(1)
  //   this.pushHistory()
  //   window.addEventListener("popstate", function(e) {
  //     console.log("返回")
  // }, true);
    
    getCarousels().then(res=>{
      this.setState({
        singers:res.list
      })
    }); 
    Sousuios().then(res=>{
      this.setState({
        sousubox:res.singerList.data.tags,
        singerlist:res.singerList.data.singerlist
      })
    });
  }
  textbox(i){
    let is = i * 80
    let data = `{"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":${this.state.singerbid},"sex":${this.state.singercid},"genre":${this.state.singerdid},"index":${this.state.singeraid},"sin":${is},"cur_page":${this.state.pages}}}}`
    Clousebox(data).then(res=>{
      this.setState({
        singerlist:res.singerList.data.singerlist,
        total:res.singerList.data.total / 8,
        fenleis:'该分类下暂无歌手！'
      })
    });
  }
  counta(index,id){
    this.setState({counta:index,singeraid:id,pages:1},function(){
      this.textbox(0)
    })
  }
  countb(index,id){
    this.setState({countb:index,singerbid:id,pages:1},function(){
      this.textbox(0)
    })
  }
  countc(index,id){
    this.setState({countc:index,singercid:id,pages:1},function(){
      this.textbox(0)
    })
  }
  countd(index,id){
    this.setState({countd:index,singerdid:id,pages:1},function(){
      this.textbox(0)
    })
  }
  zhanghao(e){
      this.setState({userN:e.target.value})
  }
  mima(e){
      this.setState({password:e.target.value})
  }
  lists=(ntj)=>{
    this.setState({
      pages:ntj
    },function(){
      this.textbox(ntj-1)
    })
  }
  render() {
    let login=this.props.login
    let {sousubox,singerlist} = this.state;
  if(JSON.stringify(sousubox) !== "{}"){
    return (
      <div className="singer">
            <div className='singerbox'>
            {
              login.show ? <div className='shows'>
                      <h3>我关注的歌手</h3>
                      <h4>
                        <img src={`//y.gtimg.cn/music/photo_new/T001R150x150M0000021sRlK1Ge1aY.jpg?max_age=2592000`} alt=""/>
                        <Router><NavLink to='/Mymusic'><span>查看全部 ></span></NavLink></Router> </h4>
              </div> : <div className='hides'>
                    <h1>千万歌手 尽在眼前</h1>
                    <h3>登录查看你的关注歌手</h3>
                    <span onClick={()=>this.props.dens()}>立即登录</span>
                </div>
            }
            </div>
            <div>
            <Logings/>
            </div>
        <div className='sousubox'>
              <ul>
                 {
                   sousubox.index ? sousubox.index.map((item,index)=>{
                     return <li key={index} className={index === this.state.counta  ? 'active' : null} onClick={()=>this.counta(index,item.id)}>{item.name}</li>
                   }) : null
                 }
              </ul>
              <ul>
                 {
                   sousubox.area ? sousubox.area.map((item,index)=>{
                     return <li key={index} className={index === this.state.countb ? 'active' : null} onClick={()=>this.countb(index,item.id)}>{item.name}</li>
                   }) : null
                 }
              </ul>
              <ul>
                 {
                   sousubox.sex ? sousubox.sex.map((item,index)=>{
                     return <li key={index} className={index === this.state.countc ? 'active' : null} onClick={()=>this.countc(index,item.id)}>{item.name}</li>
                   }) : null
                 }
              </ul>
              <ul>
                 {
                   sousubox.genre ? sousubox.genre.map((item,index)=>{
                     return <li key={index} className={index === this.state.countd ? 'active' : null} onClick={()=>this.countd(index,item.id)}>{item.name}</li>
                   }) : null
                 }
              </ul>
        </div>
        <Router>
        <div className='textboxs'>
        {
          singerlist.length > 0? <div>
          {
              this.state.singeraid == -100 ? <ol>
              {
                singerlist.slice(0,10).map((item,index)=>{
                  return <li key={index}>
                  <NavLink to={`/MusicHall/Gshou/${item.singer_mid}`}>
                    <dl>
                      <dt><img src={`//y.gtimg.cn/music/photo_new/T001R150x150M000${item.singer_mid}.jpg?max_age=2592000`} alt=""/></dt>
                      <dd alt={item.singer_name}>{item.singer_name}</dd>
                    </dl>
                    </NavLink>
                  </li>
                })
              }
            </ol> : <ul>
              {
                singerlist.slice(0,10).map((item,index)=>{
                  return <li key={index} alt={item.singer_name}>
                    <NavLink to={`/MusicHall/Gshou/${item.singer_mid}`}>
                      {item.singer_name}
                      </NavLink>
                  </li>
                })
              }
            </ul>
            }
            <ul>
              {
                singerlist.slice(10).map((item,index)=>{
                  return <li key={index} alt={item.singer_name}>
                     <NavLink to={`/MusicHall/Gshou/${item.singer_mid}`}>
                      {item.singer_name}
                      </NavLink>
                  </li>
                })
              }
            </ul>
            
          </div> : <div className='fenglie'>{this.state.fenleis}</div>
        }
        </div>
        </Router>
        {
          singerlist.length > 0? <Pagination defaultCurrent={1} total={this.state.total} onChange={this.lists}/> : null
        }
        
      </div>
    );
  }else{
    return ( <div className='loginsbox'><img src={logins} alt=""/></div> )
  }
  }
}
const mapStateToProps=(state)=>{
  return{
    login:state.login
  }
}
const hang=(dispatch)=>{
  return {
      dens(){
          dispatch({type:'count',text:{visible:true}});
      }
  }
}
export default connect(mapStateToProps,hang )(singer);
