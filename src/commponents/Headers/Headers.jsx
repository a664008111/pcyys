import React, { Component } from 'react';
import './Headers.scss';
import QQimg from '../../common/images/logo.png';
import person from '../../common/images/person_300.png';
import userimg from '../../common/images/userimg.jpg';
import login from '../../common/images/login_qq.png';
import svip_g from '../../common/images/svip_g.png';
import VIPlevel from '../../common/images/nsvip8.png';
import sui_g from '../../common/images/sui_g.png';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import "../../common/react-iconfont/iconfont.css";
import {
    Menu, Dropdown, Modal,Form, message,Icon, Input, Button, Checkbox,
  } from 'antd';
  import 'antd/dist/antd.css';
class Headers extends Component {
    constructor(props){
        super(props);
        this.state = {
            Links:[{"音乐馆":"/MusicHall"},{"我的音乐":"/Mymusic"},{"客户端":"/Client"},{"音乐号":"/Musicnumber"},{"VIP":"/VIP"}],
            show:false,
            visible:false,
            userN:'',
            password:'',
            userName:'',
            userID:'',
            VIPlevel:'',
            userImg:''
        }
        this.zhanghao = this.zhanghao.bind(this);
        this.mima = this.mima.bind(this);
        this.denglu = this.denglu.bind(this);
    }
    componentDidMount(){
        let str = sessionStorage.obj;
        if(str){
            let obj = JSON.parse(str);
            if(obj.userID == 0){
                message.success("您已登陆！");
                this.setState({
                    visible: false,
                    show:true,
                    userName:obj.userName
                })
            }
        }
    }
    tongyong(){
        let str = sessionStorage.obj;
            if(str){
                let obj = JSON.parse(str);
    
                if(obj.userID == 0){
                    message.warning("功能待开发！");
                    
                }
            }
        
    }
    tuichu(){
        message.loading('正在退出,请稍等！', 2)
        .then(() => {
            this.setState({show:false})
            message.success('您已退出',2);
        })
    }
    dens(){
        this.setState({visible: true});
    }
    handleCancel = (e) => {
        this.setState({visible: false});
      }
    zhanghao(e){
        this.setState({userN:e.target.value})
    }
    mima(e){
         this.setState({password:e.target.value})
   }
    denglu(){
       if(this.state.userN === ''){
        message.error('请输入账号！！！');
       }
       else if(this.state.password=== ''){
        message.error('请输入密码！！！');
       }else{
        fetch('https://www.easy-mock.com/mock/5b480d3dae45641f63210b3b/example/get#!method=get')
        .then(response=> response.json()).then(data => {
         if(this.state.userN==data.data.Userlogin.Accountnumber){
             if(this.state.password ===data.data.Userlogin.Password){
                message.loading('正在登陆,请稍等！', 2)
                .then(() => {
                    message.success(data.data.Userlogin.mages,2);
                    this.setState({
                        visible: false,
                        show:true
                    },()=>{
                        fetch('https://www.easy-mock.com/mock/5b480d3dae45641f63210b3b/example/xinxis#!method=get')
                        .then(response=>response.json()).then(data=>{
                           var obj = { 
                               userName:data.data.userName,
                               userID:data.data.userID,
                               VIPlevel:data.data.VIPlevel,
                               userImg:data.data.userImg 
                           };
                           var str = JSON.stringify(obj);
                           sessionStorage.obj = str;
                            this.setState({
                               userName:data.data.userName,
                               userID:data.data.userID,
                               VIPlevel:data.data.VIPlevel,
                               userImg:data.data.userImg
                            })
                        })
                    })
                })
             }else{
                 message.error('密码错误, 请重新输入');
             }   
         }else{
             message.error('账号错误, 请重新输入');
         }
       });
       }
   }
  render() {
    const menu = (
        <div className='menu'>
        <Menu>
          <Menu.Item key="1">
             <h3>
             <a href="#"><img className="person" src={userimg} alt=""/><img className="loginqq" src={login} alt=""/></a>
             <p><span>{this.state.userName?this.state.userName:"请登录"}</span><b>{VIPlevel?<img className="imgs2" src={VIPlevel} alt=""/>:<img className="imgs" src={svip_g} alt=""/>}<img className="imgs1" src={sui_g} alt=""/></b></p>
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
               <b onClick={()=>this.tuichu()}>退出登录</b> 
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
              <input placeholder="搜索音乐、MV、歌单、用户" type="text" name="" id=""/><i className="icon iconfont icon-search_light"></i>
          </div>
          <div className="head-opt">
          
              <p>
                <Dropdown overlay={this.state.show ? menu : menus} placement='bottomLeft'>
                    {
                        this.state.show ? <a className="ant-dropdown-link" href="#"><img className="person" src={userimg} alt=""/><img className="loginqq" src={login} alt=""/></a> : <span onClick={()=>this.dens()} >登录</span>
                    }
                    
                </Dropdown>
              </p>
              <h4 onClick={this.tongyong}>开通绿钻豪华版</h4>
              <h5 onClick={this.tongyong}>开通付费包</h5>
          </div>
          <div>
            <Modal title="QQ登录" visible={this.state.visible} onCancel={this.handleCancel} footer>
                <div className="denglu">
                    <h2>帐号密码登录</h2>
                    <Form  className="login-form">
                        <Form.Item>
                            <Input onChange={this.zhanghao} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="支持QQ号" />
                        </Form.Item>
                        <Form.Item>
                            <Input onChange={this.mima} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox>记住账号</Checkbox>
                            <a className="login-form-forgot" href="#">忘记密码</a>
                            <Button type="primary"  className="login-form-button" onClick={this.denglu}>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
      </div>
    );
  }
}
export default Headers;
