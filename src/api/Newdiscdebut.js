import jsonp from "./jsonp"
import {URL, PARAM} from "./config"

export function getCarousels(datas) {
	const data = Object.assign({}, PARAM, {
        '-': 'recom' + new Date().getTime(),
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        data: `{"comm":{"ct":24},"new_album":{"module":"music.web_album_library","method":"get_album_by_tags","param":{"area":${datas},"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":40,"click_albumid":0}}}`
	});
	return jsonp(URL.carousel, data);
}

