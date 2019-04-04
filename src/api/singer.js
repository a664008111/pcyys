import jsonp from "./jsonp"
import {URL, PARAM, OPTION} from "./config"

export function getCarousels(datas) {
	const data = Object.assign({}, PARAM, {
        utf8: 1,
        uin: 834321724,
        rnd: 0.3881679197013903,
        g_tk: 105602752,
        loginUin: 834321724,
        platform: 'yqq.json',
        needNewCode: 0
	});
	return jsonp(URL.singer, data, OPTION);
}
export function Sousuios() {
	const data = Object.assign({}, PARAM, {
        '-': 'getUCGI' + new Date().getTime(),
        g_tk: 628063264,
        loginUin: 834321724,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        data: `{"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}`    
	});
	return jsonp(URL.carousel, data);
}
export function Clousebox(singerbid,singercid,singerdid,singeraid,is,pages) {
	const data = Object.assign({}, PARAM, {
        '-': 'getUCGI' + new Date().getTime(),
        g_tk: 105602752,
        loginUin: 834321724,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        data: `{"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":${singerbid},"sex":${singercid},"genre":${singerdid},"index":${singeraid},"sin":${is},"cur_page":${pages}}}}`
	});
	return jsonp(URL.carousel, data);
}