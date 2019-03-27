import React, { Component } from 'react';
import {getCarousels} from "../../../../../api/Wonderfulrecommendation";
import './RankingList.scss';
import cover from '../../../../../common/images/cover_play@2x.png'
import {message} from 'antd';
class RankingList extends Component {
   constructor(props){
     super(props)
     this.state = {
        listnoe:[]
     }
   }
    componentDidMount(){
      getCarousels().then(res=>{
        this.setState({
          listnoe:res.toplist.data.group_list[0].list.slice(0,5)
        })
    });
    }
    imgsone(item,index){
      message.success("正在开发中,请耐心等待... , invalid referer!");
      // getNewAlbum(item.content_id||item.tid).then(res=>{

      // })
    }
  render() {
    let {listnoe} = this.state;
    return (
      <div className="RankingList">
            <h1>排行榜</h1>
            <div className="swiperboxsd">
            <ol>
              {
                listnoe.map((item,index)=>{
                  return <li key={index}>
                        <h3>{item.name.split('·')[0]}</h3>
                        <h2>{item.name.split('·')[1] ? item.name.split('·')[1] : '-'}</h2>
                        <div id='p'>___<p  className='coverimgs' onClick={()=>{this.imgsone(item,index)}} style={{backgroundImage: 'url(' + cover + ')'}}></p></div>
                         <h4>
                           {
                             item.songlist.map((items,indexs)=>{
                                return  <div key={indexs} className="iconts">
                                      <i>{indexs+1}</i>
                                      <div className="buttrig">
                                        <b>{items.track_name}</b>
                                        <span>{items.singer_name}</span>
                                      </div>
                                      
                                </div>
                             })
                           }
                         </h4>
                    </li>
                })  
              }
            </ol>
            </div>
      </div>
    );
  }
}
export default RankingList;