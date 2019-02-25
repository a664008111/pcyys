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
        data: datas
	});
	return jsonp(URL.carousel, data);
}

