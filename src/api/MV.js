import jsonp from "./jsonp"
import {URL, PARAM,OPTION} from "./config"

export function getCarousels(datas) {
	const data = Object.assign({}, PARAM, {
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        cmd: 'shoubo',
        lan: datas
	});
	return jsonp(URL.MVs, data,OPTION);
}

