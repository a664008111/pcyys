import React, { Component } from 'react';
import Logings from '../logings.jsx';
import lo from '../../../common/images/loadings.gif';
import './Mymusic.scss';
import VIPlevel from '../../../common/images/nsvip8.png';
import userimg from '../../../common/images/userimg.jpg';
import {Dltobustext} from '../../../api/audio';
import { notification } from 'antd';
import {connect} from 'react-redux';
class Mymusic extends Component {
  constructor(props){
    super(props)
    this.state = {
      objs:{},
      username:{},
      ulbox:["我喜欢","我创建的歌单","关注","粉丝","我上传的视频"],
      counts:0,
      icons:true
    }
  }
  componentDidMount(){
    Dltobustext().then(res=>{
      console.log(res)
      this.setState({username:res.data.creator})
    })
    //  let textbox = sessionStorage.obj
    //  let obj = JSON.parse(textbox)
    //  console.log(obj)
    //  this.setState({objs:obj})
  }
  lists(index){
    this.setState({counts:index})
  }
  icons(){
    let {icons} =this.state;
    icons = !icons
    this.setState({icons},()=>{
      const args = {
        message: this.state.icons ? '主页已公开！' : '主页非公开！',
      };
      notification.open(args);
    })
  }
  render() {
    let login=this.props.login
    let { objs, username,ulbox,icons} = this.state;
    if(JSON.stringify(username) !== "{}"){
      return (
        <div className="Mymusic">
            {
                login.show ? <div className='usernamesbox'>
                     <div className='mymutop'>
                            <dl>
                              <dt><img src={username.headpic&&username.headpic} alt=""/></dt>
                              <dd><span>{username.nick&&username.nick}</span><img src={VIPlevel} alt=""/></dd>
                              <h3><span><em>7</em><b>关注</b></span><span><em>1</em><b>粉丝</b></span></h3>
                            </dl>
                            <div className='mybot'>
                                <ul>
                                  {
                                    ulbox.map((item,index)=>{
                                      return <li onClick={()=>{this.lists(index)}} className={this.state.counts === index ? 'actives' : 'as'} key={index}>{item}</li>
                                    })
                                  }
                                </ul>
                                {icons ? <i onClick={()=>{this.icons()}} className='icon iconfont icon-musicfill'></i> : <i onClick={()=>{this.icons()}} className='icon iconfont icon-musicforbidfill'></i>}
                            </div>
                     </div>
                     <div className='mymubottom'>暂时不开发！！！</div>
              </div> : <div className='denglu'>
                  <div>
                      <h1>私人音乐空间,听我想听的歌</h1>
                      <h2>登录管理我的音乐,多终端同步</h2>
                      <span onClick={()=>this.props.dens()}>立即登录</span>
                  </div>
              </div>
                }
               
              <div>
              <Logings/>
              </div>
        </div>
      );
    }else{
      return ( <div className='loginsbox'><img src={lo} alt=""/></div> )
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
export default connect(mapStateToProps,hang )(Mymusic);
