import React, { Component } from 'react';
import { Digitalalbums } from '../../../../api/Digitalalbum';
import Swiper from 'swiper/dist/js/swiper.min.js';
import './Digitalalbum.scss';
import login from '../../../../common/images/loading.gif';
import { HashRouter as Router, NavLink } from 'react-router-dom';

class Digitalalbum extends Component {
  constructor(props){
     super(props)
     this.state = {
        Digitalalbumlunbo:[],
        Digitalalbumbox:[],
        Digitalalbumboxa:[],
        Digitalalbumboxb:[],
        Digitalalbumboxc:[],
        Digitalalbumboxd:[],
        Digitalalbumboxe:[],
        Digitalalbumboxf:[],
        Digitalalbumboxg:[]
     }
  }
  componentDidMount(){
    Digitalalbums().then(res=>{
      this.setState({
        Digitalalbumlunbo:res.data.banner,
        Digitalalbumbox:res.data.content[0],
        Digitalalbumboxa:res.data.content[1],
        Digitalalbumboxb:res.data.content[2],
        Digitalalbumboxc:res.data.content[4],
        Digitalalbumboxd:res.data.content[5],
        Digitalalbumboxe:res.data.content[6],
        Digitalalbumboxf:res.data.content[7],
        Digitalalbumboxg:res.data.content[9]
      })
    });
    let mySwiper = new Swiper(".swiper-container",{
      autoplay: false,
			speed: 1000,
			autoplayDisableOnInteraction: false,
      loop : true,
      centeredSlides: true,
      loopAdditionalSlides : 3,
			slidesPerView: 2,
			pagination: '.swiper-pagination',
			paginationClickable: true,
			onInit: function(swiper) {
				swiper.slides[2].className = "swiper-slide swiper-slide-active";
			},
			breakpoints: {
				668: {
					slidesPerView: 1,
				}
			},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer:true,
      observerParent:true
      });
      mySwiper.slideTo(2, 1000, false)
  }
  render() {
    let {Digitalalbumlunbo, Digitalalbumbox,Digitalalbumboxa,Digitalalbumboxb,Digitalalbumboxc,Digitalalbumboxd,Digitalalbumboxe,Digitalalbumboxf,Digitalalbumboxg} = this.state;
      return (
        <Router>
        <div className="Digitalalbum">
            <div className="Digilunbo">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                    {
                      Digitalalbumlunbo.map((item,index)=>{
                       return <div key={index} className="swiper-slide odds">
                            <a href={item.jumpurl}><img src={item.picurl} /></a>
                        </div>
                      })
                    }
                    </div>
                    <div className="swiper-button-prev swiper-button-black" id='iconfont'></div>
                    <div className="swiper-button-next swiper-button-black" id='iconaont'></div>
                </div>
            </div>
            <div className='Digicontent'>
                <h1>最新上架</h1>
                <div className = 'Digicontentbox'>
                  {
                    Digitalalbumbox.albumlist && Digitalalbumbox.albumlist.slice(0,5).map((item,index)=>{
                        return <dl key={index}>
                              <dt><a href={item.buypage}><img  src={`//y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`} alt=""/><div className='coverimg'></div></a></dt>
                              <dd>
                                <h3><a href={item.buypage}>{item.album_name}</a></h3>
                                <NavLink to={`/MusicHall/Gshou/${item.singer_mid}`}><h4>{item.singer_name}</h4></NavLink>
                                <p><em> ￥ {item.dis_price / 100}</em> <i>立即购买</i> </p>
                              </dd>
                        </dl>
                    })
                  }
                  </div>
            </div>
            <div className='Digicontent'>
                <h1>本周热销</h1>
                <div className = 'Digicontentbox'>
                  {
                    Digitalalbumboxa.albumlist && Digitalalbumboxa.albumlist.slice(0,5).map((item,index)=>{
                        return <dl key={index}>
                              <dt><a href={item.buypage}><img  src={`//y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`} alt=""/><div className='coverimg'></div></a></dt>
                              <dd>
                                <h3><a href={item.buypage}>{item.album_name}</a></h3>
                                <NavLink to={`/MusicHall/Gshou/${item.singer_mid}`}><h4>{item.singer_name}</h4></NavLink>
                                <p><em> ￥ {item.dis_price / 100}</em> <i>立即购买</i> </p>
                              </dd>
                        </dl>
                    })
                  }
                  </div>
            </div>
            <div className='Digicontent'>
                <h1>音乐人专区</h1>
                <div className = 'Digicontentbox'>
                  {
                    Digitalalbumboxb.albumlist && Digitalalbumboxb.albumlist.slice(0,5).map((item,index)=>{
                        return <dl key={index}>
                              <dt><a href={item.buypage}><img  src={`//y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`} alt=""/><div className='coverimg'></div></a></dt>
                              <dd>
                                <h3><a href={item.buypage}>{item.album_name}</a></h3>
                                <NavLink to={`/MusicHall/Gshou/${item.singer_mid}`}><h4>{item.singer_name}</h4></NavLink>
                                <p><em> ￥ {item.dis_price / 100}</em> <i>立即购买</i> </p>
                              </dd>
                        </dl>
                    })
                  }
                  </div>
            </div>
            <div className='Digicontent'>
                <h1>{Digitalalbumboxc.title}</h1>
                <div className = 'Digicontentbox'>
                  {
                    Digitalalbumboxc.albumlist && Digitalalbumboxc.albumlist.slice(0,5).map((item,index)=>{
                        return <dl key={index}>
                              <dt><a href={item.buypage}><img  src={`//y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`} alt=""/><div className='coverimg'></div></a></dt>
                              <dd>
                                <h3><a href={item.buypage}>{item.album_name}</a></h3>
                                <NavLink to={`/MusicHall/Gshou/${item.singer_mid}`}><h4>{item.singer_name}</h4></NavLink>
                                <p><em> ￥ {item.dis_price / 100}</em> <i>立即购买</i> </p>
                              </dd>
                        </dl>
                    })
                  }
                  </div>
            </div>
            <div className='Digicontent'>
                <h1>{Digitalalbumboxd.title}</h1>
                <div className = 'Digicontentbox'>
                  {
                    Digitalalbumboxd.albumlist && Digitalalbumboxd.albumlist.slice(0,5).map((item,index)=>{
                        return <dl key={index}>
                              <dt><a href={item.buypage}><img  src={`//y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`} alt=""/><div className='coverimg'></div></a></dt>
                              <dd>
                                <h3><a href={item.buypage}>{item.album_name}</a></h3>
                                <NavLink to={`/MusicHall/Gshou/${item.singer_mid}`}><h4>{item.singer_name}</h4></NavLink>
                                <p><em> ￥ {item.dis_price / 100}</em> <i>立即购买</i> </p>
                              </dd>
                        </dl>
                    })
                  }
                  </div>
            </div>
            <div className='Digicontent'>
                <h1>{Digitalalbumboxe.title}</h1>
                <div className = 'Digicontentbox'>
                  {
                    Digitalalbumboxe.albumlist && Digitalalbumboxe.albumlist.slice(0,5).map((item,index)=>{
                        return <dl key={index}>
                              <dt><a href={item.buypage}><img  src={`//y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`} alt=""/><div className='coverimg'></div></a></dt>
                              <dd>
                                <h3><a href={item.buypage}>{item.album_name}</a></h3>
                                <NavLink to={`/MusicHall/Gshou/${item.singer_mid}`}><h4>{item.singer_name}</h4></NavLink>
                                <p><em> ￥ {item.dis_price / 100}</em> <i>立即购买</i> </p>
                              </dd>
                        </dl>
                    })
                  }
                  </div>
            </div>
            <div className='Digicontent'>
                <h1>{Digitalalbumboxf.title}</h1>
                <div className = 'Digicontentbox'>
                  {
                    Digitalalbumboxf.albumlist && Digitalalbumboxf.albumlist.slice(0,5).map((item,index)=>{
                        return <dl key={index}>
                              <dt><a href={item.buypage}><img  src={`//y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`} alt=""/><div className='coverimg'></div></a></dt>
                              <dd>
                                <h3><a href={item.buypage}>{item.album_name}</a></h3>
                                <NavLink to={`/MusicHall/Gshou/${item.singer_mid}`}><h4>{item.singer_name}</h4></NavLink>
                                <p><em> ￥ {item.dis_price / 100}</em> <i>立即购买</i> </p>
                              </dd>
                        </dl>
                    })
                  }
                  </div>
            </div>
            <div className='Digicontent'>
                <h1>{Digitalalbumboxg.title}</h1>
                <div className = 'Digicontentbox'>
                  {
                    Digitalalbumboxg.albumlist && Digitalalbumboxg.albumlist.slice(0,5).map((item,index)=>{
                        return <dl key={index}>
                              <dt><a href={item.buypage}><img  src={`//y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`} alt=""/><div className='coverimg'></div></a></dt>
                              <dd>
                                <h3><a href={item.buypage}>{item.album_name}</a></h3>
                                <NavLink to={`/MusicHall/Gshou/${item.singer_mid}`}><h4>{item.singer_name}</h4></NavLink>
                                <p><em> ￥ {item.dis_price / 100}</em> <i>立即购买</i> </p>
                              </dd>
                        </dl>
                    })
                  }
                  </div>
            </div>
            
        </div></Router>
      );
  }
}

export default Digitalalbum;
