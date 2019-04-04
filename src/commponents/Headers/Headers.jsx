import React, { Component } from 'react';
import './Headers.scss';
import QQimg from '../../common/images/logo.png';
import userimg from '../../common/images/userimg.jpg';
import logins from '../../common/images/login_qq.png';
import svip_g from '../../common/images/svip_g.png';
import VIPlevel from '../../common/images/nsvip8.png';
import sui_g from '../../common/images/sui_g.png';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import "../../common/react-iconfont/iconfont.css";
import Logings from './logings.jsx';
import {connect} from 'react-redux';
import {Headsou} from '../../api/Wonderfulrecommendation';
import {
    Menu, Dropdown, message, Icon 
  } from 'antd';
import 'antd/dist/antd.css';
class Headers extends Component {
    constructor(props){
        super(props);
        this.state = {
            Links:[{"音乐馆":"/MusicHall"},{"我的音乐":"/Mymusic"},{"客户端":"/Client"},{"音乐号":"/Musicnumber"},{"VIP":"/VIP"}],
            userImg:'',
            userName:'',
            users:{},
            album:[],
            mv:[],
            singer:[],
            song:[],
            values:'',
            sou:[],
            lishi:[]
        }
        this.zhanghao = this.zhanghao.bind(this);
        this.mima = this.mima.bind(this);
    }
    componentDidMount(){
        let str = sessionStorage.obj;
        let sou = sessionStorage.sous;
        if(sou){
          let sous = JSON.parse(sou);
          this.setState({
              lishi:Array.from(new Set(sous))
          })
        }
        let textname = sessionStorage.textname
              if(str){
                let users = JSON.parse(textname);
                  let obj = JSON.parse(str);
                  if(obj.userID === 0){
                      this.setState({
                        userName:obj.userName,
                        users
                      })
                  }
              }
      }
    tongyong(){
        let str = sessionStorage.obj;
            if(str){
                let obj = JSON.parse(str);
                if(obj.userID === 0){
                    message.warning("功能待开发！");
                }
            }
    }
    zhanghao(e){
        this.setState({userN:e.target.value})
    }
    mima(e){
         this.setState({password:e.target.value})
   }
   isoust(){
     console.log(this)
     if(this.state.values === ''){
      message.warning("请输入搜索内容");
      return;
     }else{
      let {sou}=this.state;
      sou.push(this.state.values.replace(/(^\s*)|(\s*$)/g, ""))
      let addsou = Array.from(new Set(sou))
      this.setState({sou:addsou},()=>{
         var sous = JSON.stringify(sou);
         sessionStorage.sous = sous;
      })
     }
   }

   souquan(){
    let {sou} = this.state;
    sou.splice(0,sou.length);
    this.setState({sou})
   }
   rovme(index){
     let {sou} = this.state;
     sou.splice(index,1);
     this.setState({sou})
   }
   indexvalue(item){
      this.setState({values:item},()=>{
        Headsou(item).then(res=>{
          if(res.code === -2){
            return;
          }else{
           this.setState({
             album:res.data.album.itemlist,
             mv:res.data.mv.itemlist,
             singer:res.data.singer.itemlist,
             song:res.data.song.itemlist
            })
          }
        })
      })
   }
   onsou(e){
     this.setState({
      values:e.target.value
     })
     Headsou(e.target.value).then(res=>{
       if(res.code === -2){
         return;
       }else{
        this.setState({
          album:res.data.album.itemlist,
          mv:res.data.mv.itemlist,
          singer:res.data.singer.itemlist,
          song:res.data.song.itemlist
         })
       }
       
     })
   }
  render() {
    let login=this.props.login
    let {users,album,mv,singer,song,values,lishi} = this.state;
    const menu = (
        <div className='menu'>
        <Menu>
          <Menu.Item key="1">
             <h3>
             <Router><NavLink activeClassName='actives' to='/Mymusic' ><img className="person" src={users.imgs} alt=""/><img className="loginqq" src={login} alt=""/></NavLink></Router>
             <p><span>{this.state.userName?users.username:"请登录"}</span><b>{VIPlevel?<img className="imgs2" src={VIPlevel} alt=""/>:<img className="imgs" src={svip_g} alt=""/>}<img className="imgs1" src={sui_g} alt=""/></b></p>
             </h3>
          </Menu.Item>
          <Menu.Item key="2">
             <div className="haohua">
                <p>
                    <b>绿钻豪华版</b>
                    <span>开通立即赠送付费音乐包</span>
                </p>
                <h4>开通</h4>
             </div>
          </Menu.Item>
          <Menu.Item key="3">
            <div className="haohua">
                <p>
                    <b>付费音乐包</b>
                    <span>畅享千万包月曲库</span>
                </p>
                <h4>开通</h4>
             </div>
          </Menu.Item>
          <Menu.Item key="4">
            <div className="denglu">
               <b onClick={()=>this.props.tuichu()}>退出QQ登录</b> 
             </div>
          </Menu.Item>
        </Menu>
        </div>
      );
      const menus = (
        <div className='menus'>
            {/* 请登录 */}
        </div>
      );
     
    return (
    
      <div className="Headers">
          <h1>
              <img src={QQimg} alt=""/>
          </h1>
          <Router>
          <div className="head-list">
          {
              this.state.Links.map((item, index) =>{
                  return <p key={index}><NavLink activeClassName='active' to={Object.values(item)[0]}>{Object.keys(item)[0]}</NavLink></p>
              })
          }
          </div> 
          </Router>
          <div className="head-input">
          <input onChange={(e)=>{this.onsou(e)}} value={this.state.values} placeholder="搜索音乐、MV、歌单、用户" type="text" name="" id=""/><i onClick={()=>{this.isoust()}} className="icon iconfont icon-search_light"></i>
          <div className="head-sou">
          {
            values ? <ul>
              {
                song.length > 0 ? <li>
                <p><span className='icon iconfont icon-musicfill'></span>单曲</p>
                <ol>
                    {
                      song.map((item,index)=>{
                         return <h4 key={index}><span>{item.name}</span> - <b>{item.singer}</b> </h4>
                      })
                    }
                </ol>
             </li> : <li><p><span>暂无单曲</span></p></li>
              }
            {
                singer.length > 0 ? <li>
                <p><span className='icon iconfont icon-people'></span>歌手</p>
                <ol>
                   {
                     singer.map((item,index)=>{
                        return <h4 key={index}>{item.name}</h4>
                     })
                   }
               </ol>
            </li> : <li><p><span>暂无歌手</span></p></li>
            }
            {
              album.length > 0 ? <li>
              <p><span className='icon iconfont icon-tubiaozhizuomoban'></span>专辑</p>
              <ol>
                 {
                   album.map((item,index)=>{
                      return <h4 key={index}><span>{item.name}</span> - <b>{item.singer}</b> </h4>
                   })
                 }
             </ol>
          </li> : <li><p><span>暂无专辑</span></p></li>
            }
            {
              mv.length > 0 ? <li>
              <p><span className='icon iconfont icon-recordlight'></span>MV</p>
              <ol>
                 {
                   mv.map((item,index)=>{
                      return <h4 key={index}><span>{item.name}</span> - <b>{item.singer}</b> </h4>
                   })
                 }
             </ol>
          </li> : <li><p><span>暂无MV</span></p></li>
            }
            
          </ul> : <div className="head-soubox">
               <div className='sou'>
                   <span>搜索历史</span> <b onClick={()=>{this.souquan()}} className='icon iconfont icon-delete'></b> 
               </div>
               <div className='headsou-s'>
                   {
                     this.state.sou.map((item,index)=>{
                         return <p key={index}><span onClick={(e)=>{this.indexvalue(item)}}>{item}</span><em onClick={(e)=>{this.rovme(index)}} className='icon iconfont icon-close'></em></p>
                     })
                   }
               </div>
          </div>
          }
                
          </div>
          </div>
          <div className="head-opt">
              <p>
                <Dropdown overlay={login.show ? menu : menus} placement='bottomLeft'>
                    {
                        login.show ? <a className="ant-dropdown-link" href="#/Mymusic"><img className="person" src={users.imgs} alt=""/><img className="loginqq" src={logins} alt=""/></a> : <span onClick={()=>this.props.dens()} >登录</span>
                    }
                </Dropdown>
              </p>
              <h4 onClick={this.tongyong}>开通绿钻豪华版</h4>
              <h5 onClick={this.tongyong}>开通付费包</h5>
          </div>
          <div>
            <Logings/>
        </div>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
    return{
        login:state.login
    }
  }
  const hang=(dispatch)=>{
    return {
        tuichu:()=>{
            message.loading('正在退出,请稍等！', 2)
                .then(() => {
                    dispatch({type:'count',text:false});
                    message.success('您已退出',2);
                })
        },
        dens(){
            dispatch({type:'count',text:{visible:true}});
        }
    }
}
export default connect(mapStateToProps,hang )(Headers);
