import React, { Component } from 'react';
import './Footers.scss';

class Footers extends Component {
    constructor(props){
      super(props)
      this.state = {
         lists:['关于腾讯','About Tencent','服务条款','用户服务协议','隐私政策','权利声明','广告服务','腾讯招聘','客服中心','网站导航',]
      }
    }
  render() {
    return (
      <div className="Footers">
      <div className='footwrap'>
      <div className='tersbox'>
              <h4>下载QQ音乐客户端</h4>
              <ol>
                <li>
                  <b></b>
                  <span>PC版</span>
                </li>
                <li>
                  <b></b>
                  <span>Mac版</span>
                </li>
                <li>
                  <b></b>
                  <span>Android版</span>
                </li>
                <li>
                  <b></b>
                  <span>iPone版</span>
                </li>
              </ol>

          </div>
          <div className='tersboxs'>
              <h4>特色产品</h4>
              <ol>
                <li>
                  <b></b>
                  <span>全名K歌</span>
                </li>
                <li>
                  <b></b>
                  <span>Super Sound</span>
                </li>
                <li>
                  <b></b>
                  <span>Qplay</span>
                </li>
                <li>
                  <span>车载互联</span>
                </li>
                <li>
                  <span>QQ演出</span>
                </li>
              </ol>

          </div>
          <div className='tersboxz'>
              <h4>合作链接</h4>
              <ol>
              <li>CJ ENM</li>
                  <li>手机QQ空间</li>
                  <li>腾讯社交广告</li>
                  <li>QQ浏览器</li>
                  <li>腾讯云</li>
                  <li>智能电视网</li>
                  <li>腾讯视频</li>
                  <li>最新版QQ</li>
                  <li>电脑管家</li>
                  <li>腾讯微云</li>
                  <li>企鹅FM</li>
                  <li>当贝市场</li>
              </ol>

          </div>
      </div>
      <div className='kais'>
          <h4>开放平台</h4>
          <p>
            <span>腾讯音乐人平台</span>
            <span>音乐号认证</span>
            <span>机构入驻</span>
          </p>
      </div>
          <div className='bottombox'>
                <p>
                  {
                    this.state.lists.map((item,index)=>{
                      return <span key={index}> {item} | </span>
                    })
                  }
                </p>
                <p>Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
                <p>东东公司 版权所有 东东网络文化经营许可证</p>
          </div>
      </div>
    );
  }
}

export default Footers;
