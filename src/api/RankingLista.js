import jsonp from "./jsonp"
import {URL, PARAM,OPTION} from "./config"

export function pai(id,key) {
	const data = Object.assign({}, PARAM, {
        tpl: 3,
        page: 'detail',
        date: key,
        topid: id,
        type: 'top',
        song_begin: 0,
        song_num: 30,
        g_tk: 1492037475,
        loginUin: 834321724,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0
	});
	return jsonp(URL.rankingInfo, data,OPTION);
}
export function pais(id,key) {
	const data = Object.assign({}, PARAM, {
        tpl: 3,
        page: 'detail',
        date: key,
        topid: id,
        type: 'global',
        song_begin: 0,
        song_num: 30,
        g_tk: 1492037475,
        loginUin: 834321724,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0
	});
	return jsonp(URL.rankingInfo, data,OPTION);
}