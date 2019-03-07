import jsonp from "./jsonp"
import {URL, PARAM,OPTION} from "./config"

export function AlbumApi(datas) {
	const data = Object.assign({}, PARAM, {
        '-': 'recom' + new Date().getTime(),
        g_tk: 2045272113,
        loginUin: 834321724,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        data: datas
	});
	return jsonp(URL.carousel, data);
}
export function Albumbox() {
	const data = Object.assign({}, PARAM, {
        '-': 'recom' + new Date().getTime(),
        g_tk: 2045272113,
        loginUin: 834321724,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        data: `{"albumlib":{"method":"get_album_by_tags","param":{"area":7,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":20,"click_albumid":0},"module":"music.web_album_library"},"comm":{"ct":24,"cv":0}}`
	});
	return jsonp(URL.carousel, data);
}


