import jsonp from "./jsonp"
import {URL, Par, OPTION, PARAM} from "./config"

export function getCarousels(datas) {
	const data = Object.assign({}, Par, {
        r: 1551256567663,
        singermid: datas
	});
	return jsonp(URL.geshoutext, data, OPTION);
}
export function zjCarous(datas) {
	const data = Object.assign({}, PARAM, {
        '-': 'recom' + new Date().getTime(),
        g_tk: 1064991382,
        loginUin: 834321724,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        data: `{"comm":{"ct":24,"cv":0},"singerAlbum":{"method":"get_singer_album","param":{"singermid":"${datas}","order":"time","begin":0,"num":5,"exstatus":1},"module":"music.web_singer_info_svr"}}`
	});
	return jsonp(URL.carousel, data);
}
export function dqCarous(datas) {
	const data = Object.assign({}, PARAM, {
        g_tk: 1064991382,
        loginUin: 834321724,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        ct: 24,
        singermid: datas,
        order: 'listen',
        begin: 0,
        num: 30,
        songstatus: 1
	});
	return jsonp(URL.singerInfo, data,OPTION);
}
export function MVCarous(datas) {
	const data = Object.assign({}, PARAM, {
        cid: 205360581,
        singermid: datas,
        order: 'listen',
        begin: 0,
        num: 5,
        g_tk: 1064991382,
        loginUin: 834321724,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0
	});
	return jsonp(URL.MVxq, data,OPTION);
}
export function XSgsCarous(datas) {
	const data = Object.assign({}, PARAM, {
        utf8: 1,
        singer_mid: datas,
        start: 0,
        num: 5,
        g_tk: 1064991382,
        loginUin: 834321724,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0,
	});
	return jsonp(URL.Xsgs, data,OPTION);
}
export function Guanzhu(datas) {
	const data = Object.assign({}, PARAM, {
        g_tk: 1064991382,
        loginUin: 834321724,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        singermid: datas,
        utf8: 1,
        rnd: 1551261720093
	});
	return jsonp(URL.Guanzhu, data,OPTION);
}
export function MVCarsc(datas) {
	const data = Object.assign({}, PARAM, {
        cid: 205360581,
        g_tk: 1064991382,
        loginUin: 834321724,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        singermid: datas,
        order: 'time',
        begin: 0,
        num: 5,
        cmd: 1,
	});
	return jsonp(URL.MVxq, data,OPTION);
}
