import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
   Modal,Form, message,Icon, Input, Button, Checkbox,
} from 'antd';
class logings extends Component {
    constructor(props){
        super(props)
        this.state ={
            userN:'',
            password:''
        }
        this.zhanghao = this.zhanghao.bind(this);
        this.mima = this.mima.bind(this);
    }
    zhanghao(e){
        this.setState({userN:e.target.value})
    }
    mima(e){
         this.setState({password:e.target.value})
    }
    componentDidMount(){
        let str = sessionStorage.objs;
              if(str){
                  let obj = JSON.parse(str);
                  if(obj.userID === 0){
                      this.props.showbox();
                  }
              }
      }
    render(){
        let login=this.props.login
        return (<div>
            <Modal title="QQ登录" visible={login.visible} onCancel={()=>{this.props.handleCancel()}} footer = {false}>
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
                            <Button type="primary"  className="login-form-button" onClick={()=>{this.props.denglu(this.state.userN,this.state.password)}}>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>)
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
        denglu:(userN,password)=>{
            if(userN === ''){
             message.error('请输入账号！！！');
            }
            else if(password === ''){
             message.error('请输入密码！！！');
            }else{
             fetch('https://www.easy-mock.com/mock/5b480d3dae45641f63210b3b/example/get#!method=get')
             .then(response=> response.json()).then(data => {
              if(userN == data.data.Userlogin.Accountnumber){
                  if(password === data.data.Userlogin.Password){
                    var objs = { 
                        userN:data.data.Userlogin.Accountnumber,
                        password:data.data.Userlogin.Password,
                        userID:0
                    };
                    var str = JSON.stringify(objs);
                    sessionStorage.objs = str;
                     message.loading('正在登陆,请稍等！', 2)
                     .then(() => {
                         message.success(data.data.Userlogin.mages,2);
                             fetch('https://www.easy-mock.com/mock/5b480d3dae45641f63210b3b/example/xinxis#!method=get')
                             .then(response=>response.json()).then(data=>{
                                dispatch({type:'count',text:{show:true,visible:false,userName:data.data.userName,
                                    userID:data.data.userID,
                                    VIPlevel:data.data.VIPlevel,
                                    userImg:data.data.userImg }});
                                var obj = { 
                                    userName:data.data.userName,
                                    userID:data.data.userID,
                                    VIPlevel:data.data.VIPlevel,
                                    userImg:data.data.userImg
                                };
                                var str = JSON.stringify(obj);
                                sessionStorage.obj = str;
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
        },
        showbox(){
            dispatch({type:'count',text:{show:true,visible:false}});
        },
        handleCancel(){
            dispatch({type:'count',text:{visible:false}});
        }
    }
  }
export default connect(mapStateToProps,hang )(logings);