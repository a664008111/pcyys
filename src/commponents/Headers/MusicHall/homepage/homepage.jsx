import React, { Component } from 'react';
import Songlistrecommendation from './Songlistrecommendation/Songlistrecommendation.jsx';
import Newsongsfirst from './Newsongsfirst/Newsongsfirst.jsx';
import Wonderfulrecommendation from './Wonderfulrecommendation/Wonderfulrecommendation.jsx';
import Newdiscdebut from './Newdiscdebut/Newdiscdebut.jsx';
import RankingList from './RankingList/RankingList.jsx';
import MV from './MV/MV.jsx';
// 歌单推荐 Songlistrecommendation
// 新歌首发 Newsongsfirst
// 精彩推荐 Wonderfulrecommendation
// 新碟首发 Newdiscdebut
// 排行榜 RankingList
// MV
class homepage extends Component {
  render() {
    return (
      <div className="homepage" style={{width: '100%'}}>
          <Songlistrecommendation/>
          <Newsongsfirst/>
          <Wonderfulrecommendation/>
          <Newdiscdebut/>
          <RankingList/>
          <MV/>
      </div>
    );
  }
}

export default homepage;
