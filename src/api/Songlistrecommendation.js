import jsonp from "./jsonp"
import {URL, PARAM, OPTION} from "./config"
import axios from 'axios'
 
export function getCarousel() {
	const data = Object.assign({}, PARAM, {
        '-': 'recom' + new Date().getTime(),
        g_tk:5381,
        loginUin:0,
        hostUin:0,
        platform:'yqq.json',
        needNewCode:0,
        data:`{"comm":{"ct":24},"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"}}`,
	});
	return jsonp(URL.carousel, data);
}
export function getNewAlbum(disstid) {
    const data = Object.assign({}, PARAM, {
        type: 1,
        json: 1,
        utf8: 1,
        onlysong: 0,
        disstid: disstid,
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0
    })
    return jsonp(URL.newalbum, data, OPTION);
  }
  export function getCarouselone() {
	const data = Object.assign({}, PARAM, {
        '-': 'recom' + new Date().getTime(),
        g_tk:5381,
        loginUin:0,
        hostUin:0,
        platform:'yqq.json',
        needNewCode:0,
        data: `{"comm":{"ct":24},"playlist":{"method":"get_playlist_by_category","param":{"id":${Math.ceil(Math.random()*100)},"curPage":1,"size":40,"order":5,"titleid":59},"module":"playlist.PlayListPlazaServer"}}`
	});
	return jsonp(URL.carousel, data);
}

 
export  function getLyric(mid) {
 
  const url='/api/lyric';
  const data=Object.assign({}, PARAM,{
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json'
 
  });
  return axios.get(url,{
    params:data,
    headers: {
        referer: 'https://c.y.qq.com',
        host: 'c.y.qq.com'
      }
  }).then((res)=>{
    return Promise.resolve(res.data);
  })
}