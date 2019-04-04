const URL = {
    /* 推荐轮播 */
    carousel: "https://u.y.qq.com/cgi-bin/musicu.fcg",
    MVs:'https://c.y.qq.com/mv/fcgi-bin/getmv_by_tag',
    gequ:'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg',//喜欢歌曲
    singer:'https://c.y.qq.com/rsc/fcgi-bin/fcg_order_singer_getlist.fcg',//关注的歌手
    geshoutext:'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_singer_desc.fcg',//歌手信息
    MVxq:'https://c.y.qq.com/mv/fcgi-bin/fcg_singer_mv.fcg',//歌手MV详情
    /* 最新专辑 */
    Headsou:'https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg',//搜索
    Dltobus:'https://c.y.qq.com/rsc/fcgi-bin/fcg_get_profile_homepage.fcg',//用户信息
    Guanzhu:'https://c.y.qq.com/rsc/fcgi-bin/fcg_order_singer_getnum.fcg',//关注人数
    Xsgs:'https://c.y.qq.com/v8/fcg-bin/fcg_v8_simsinger.fcg',//相似歌手
    // newalbum: "https://c.y.qq.com/v8/fcg-bin/album_library",
    Digitalalbums:'https://c.y.qq.com/v8/fcg-bin/musicmall.fcg',
    newalbum: "https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",
    /* 专辑信息 */
    albumInfo: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg",
    /* 排行榜 */
    rankingList: "https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",
    /* 排行榜详情 */
    rankingInfo: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",
    /* 搜索 */
    // search: "https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp",
    search: "https://c.y.qq.com/soso/fcgi-bin/client_search_cp",
    /* 热搜 */
    hotkey: "https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",
    /* 歌手列表 */
    singerList: "https://c.y.qq.com/v8/fcg-bin/v8.fcg",
    /* 歌手详情 */
    singerInfo: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",
    /* 歌曲vkey */
    songVkey: "https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg"
  };
  
  const PARAM = {
    format: "jsonp",
    inCharset: "utf-8",
    outCharset: "utf-8",
    notice: 0
  };
  const Par = {
    utf8: 1,
    outCharset: 'utf-8',
    format: 'xml',
  };
  
  const OPTION = {
    param: "jsonpCallback",
    prefix: "callback"
  };
  
  const CODE_SUCCESS = 0;
  
  export { URL, PARAM, Par,OPTION, CODE_SUCCESS }