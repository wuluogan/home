const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    yjxmt: {
        api: 'https://mov.5ixmt.com/api.php/provide/vod',
        name: '遇见小馒头',
    },
    lzzy: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
        name: '量子資源',
    },
    fhzy: {
        api: 'http://fhapi9.com/api.php/provide/vod',
        name: '番号资源',
        isAdult: true,
    },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
