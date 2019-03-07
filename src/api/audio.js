import jsonp from "./jsonp"
import {URL, PARAM,OPTION} from "./config"

export function MVboxs(songmid) {
	const data = Object.assign({}, PARAM, {
        g_tk: 5381,
        callback: 'musicJsonCallback',
        loginUin: 834321724,
        format: 'jsonp',
        platform: 'yqq',
        needNewCode: 0,
        cid: 205361747,
        uin: 834321724,
        guid: 504753841,
        songmid: songmid,
        filename: `C400${songmid}.m4a`
	});
	return jsonp(URL.songVkey, data,OPTION);
}
export function Dltobustext() {
	const data = Object.assign({}, PARAM, {
        g_tk: 1354986131,
        loginUin: 834321724,
        hostUin: 0,
        platform: 'yqq.json',
        needNewCode: 0,
        cid: 205360838,
        ct: 20,
        userid: 0,
        reqfrom: 1,
        reqtype: 0
	});
	return jsonp(URL.Dltobus, data,OPTION);
}

        