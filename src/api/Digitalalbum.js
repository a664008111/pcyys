import jsonp from "./jsonp"
import {URL, PARAM,OPTION} from "./config"

export function Digitalalbums() {
	const data = Object.assign({}, PARAM, {
        g_tk: 1751253234,
        loginUin: 834321724,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        cmd: 'pc_index_new'
	});
	return jsonp(URL.Digitalalbums, data,OPTION);
}

