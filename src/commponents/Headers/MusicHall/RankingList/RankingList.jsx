import React, { Component } from 'react';
import {getCarousels} from "../../../../api/Wonderfulrecommendation";
import {pai,pais} from "../../../../api/RankingLista";
import logins from '../../../../common/images/loadings.gif'
import './RankingList.scss';
class RankingList extends Component {
  constructor(props){
    super(props)
    this.state = {
       listnoe:[],
       listTow:[],
       usernames:'巅峰榜·流行指数',
       bantext:{}
    }
  }
   componentDidMount(){
     getCarousels().then(res=>{
       this.setState({
         listnoe:res.toplist.data.group_list[0],
         listTow:res.toplist.data.group_list[1]
       })
   });
   }
   lefttops(id,key,name){
     pai(id,key).then(res=>{
        this.setState({bantext:res,usernames:name})
     })
   }
   leftbots(id,key,name){
    pais(id,key).then(res=>{
       this.setState({bantext:res,usernames:name})
    })
  }
  render() {
    let {listnoe,listTow,usernames,bantext} = this.state;
    if(listnoe.list&&listnoe.list.length > 0){
      return (
        <div className="RankingLists">
            <div className='rankleft'>
                <div className='lefttop'>
                    <h3>{listnoe.group_name}</h3>
                    <ul>
                          {
                            listnoe.list&&listnoe.list.map((item,index)=>{
                               return <li onClick={()=>{this.lefttops(item.id,item.update_key,item.name)}} key={index}> <p>{item.name}</p> </li>
                            })  
                          }
                    </ul>
                </div>
                <div className='leftbot'>
                  <h3>{listTow.group_name}</h3>
                    <ul>
                          {
                            listTow.list&&listTow.list.map((item,index)=>{
                               return <li onClick={()=>{this.leftbots(item.id,item.update_key,item.name)}} key={index}>{item.name}</li>
                            })  
                          }
                    </ul>
                </div>
            </div>
            <div className='rankright'>
                 <h2><span>{usernames}</span><p><i></i><b>{bantext.update_time ? bantext.update_time : '--'}</b><i></i></p></h2>
                 <div className='buts'><span><i className='icon iconfont icon-video_light'></i>播放全部</span><span><i className='icon iconfont icon-add_light'></i>添加到</span><span><i className='icon iconfont icon-down'></i>下载</span><span><i className='icon iconfont icon-skin'></i>批量操作</span><span><i className='icon iconfont icon-mark'></i>评论({bantext.comment_num})</span></div>
            </div>
        </div>
      );
    }else{
      return ( <div className='loginsbox'><img src={logins} alt=""/></div> )
    }
    
  }
}

export default RankingList;
