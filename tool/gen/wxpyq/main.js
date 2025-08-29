function loadScript(url) {
    var el = document.createElement('script');
    el.src = url;
    document.body.appendChild(el);
}

function xhrGet(url, callback) {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', url);
    xhr.onload = function () { callback(xhr.responseText) };
    xhr.send();
}

location.hash = '';

// mdui.confirm(''
//         + '<div class="mdui-typo">'
//         +     '<p>'
//         +         '使用本工具<strong>不需要强制关注任何公众号或转发任何内容到朋友圈</strong>。如果你发现有公众号存在类似<strong>“关注○○，发送○○，转发○○到朋友圈领取○○”</strong>的行为，请对此类<strong>诱导行为</strong>进行<strong>投诉</strong>。'
//         +         '<a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl#3dot3_3" target="_blank">什么是诱导行为？</a>'
//         +     '</p>'
//         +     '<p>请勿以<strong>“关注○○，发送○○获取工具地址”</strong>或类似方式使用本工具为自己的公众号引流，或将这个工具和源代码的链接通过“关注可见”、“登录可见”、“回复可见”等方式隐藏。如果想要推荐的话，请<strong>直接在正文里留下地址或二维码</strong>～</p>'
//         +     '<p>源代码<strong>免费</strong>发布于 <a href="https://github.com/TransparentLC/WechatMomentScreenshot" target="_blank">https://github.com/TransparentLC/WechatMomentScreenshot</a>，如果你通过付费途径获取了源代码，你有权给予差评并要求对方退款。</p>'
//         +     '<p>本工具生成的截图，仅可用于<strong>个人应付各类强制要求转发朋友圈的情形</strong>，请勿<strong>批量生成截图</strong>或将截图用于<strong>造谣诽谤、微商宣传、灰色产业、数字藏品</strong>等非法或令人反感的用途，请勿用于商业用途，<strong>二次部署请勿删除原作者相关信息</strong>。</p>'
//         +     '<p>当你生成截图时，你应该确定你可以接受向他人发送该截图将会带来的后果和影响，否则请不要使用本工具并离开当前页面。</p>'
//         +     '<p>本工具谢绝肖战粉丝（<a href="https://w.url.cn/AC2atup" target="_blank">#我是普通人,我讨厌肖战#</a>）和<a href="https://m.weibo.cn/detail/4777390159170190" target="_blank">彳亍的“阿苇岛匿名版”(　^ω^)</a> 用户（请移步 A 岛正统继承者 <a href="https://nmbxd.com/" target="_blank">X 岛</a>）使用。</p>'
//         + '</div>',
//     '在开始使用之前……',
//     function () {},
//     function () { location.href = 'about:blank' },
//     {
//         modal: true,
//         closeOnEsc: false,
//         history: false,
//     }
// );

// 你没看错，这个就是远程控制的黑名单检测
// 有人想要对抗删除原作者信息和源代码链接的检测代码，那我只能再加一些东西了
(function () {
    var _0x21f88c=_0x4211;(function(_0x378a80,_0x2395fe){var _0x4b9627=_0x4211,_0x111a75=_0x378a80();while(!![]){try{var _0x1f7551=-parseInt(_0x4b9627('0x147','6wpg'))/0x1+-parseInt(_0x4b9627('0x153','Y3gW'))/0x2*(-parseInt(_0x4b9627('0x139','0bQb'))/0x3)+-parseInt(_0x4b9627('0x129','F@4q'))/0x4*(-parseInt(_0x4b9627('0x125','2nA7'))/0x5)+parseInt(_0x4b9627('0x12f','[*cL'))/0x6*(-parseInt(_0x4b9627('0x157','FmF8'))/0x7)+-parseInt(_0x4b9627('0x12d','[*cL'))/0x8+parseInt(_0x4b9627('0x12b','E3oO'))/0x9*(-parseInt(_0x4b9627('0x138','Gg40'))/0xa)+parseInt(_0x4b9627('0x15b','aJy7'))/0xb*(parseInt(_0x4b9627('0x150','@L46'))/0xc);if(_0x1f7551===_0x2395fe)break;else _0x111a75['push'](_0x111a75['shift']());}catch(_0x4b4d39){_0x111a75['push'](_0x111a75['shift']());}}}(_0x3ef6,0x72c16));var _0x1428d8=(function(){var _0x1cce87=!![];return function(_0x1145ce,_0x17565e){var _0x1a15a4=_0x1cce87?function(){var _0x3accde=_0x4211;if(_0x17565e){var _0x326649=_0x17565e[_0x3accde('0x143','n)8s')](_0x1145ce,arguments);return _0x17565e=null,_0x326649;}}:function(){};return _0x1cce87=![],_0x1a15a4;};}()),_0x63959f=_0x1428d8(this,function(){var _0x5af8fe=_0x4211,_0x13c3ce;try{var _0x2c1230=Function(_0x5af8fe('0x140','$&kj')+_0x5af8fe('0x15c','Gg40')+');');_0x13c3ce=_0x2c1230();}catch(_0x2474b8){_0x13c3ce=window;}var _0x249386=_0x13c3ce[_0x5af8fe('0x12a','pE(y')]=_0x13c3ce[_0x5af8fe('0x13d','52O&')]||{},_0x27d05c=[_0x5af8fe('0x14f','P7zD'),_0x5af8fe('0x126','2nA7'),_0x5af8fe('0x148','aJy7'),_0x5af8fe('0x135','6ENc'),_0x5af8fe('0x12e','9(NJ'),_0x5af8fe('0x14e','[lnt'),_0x5af8fe('0x13c','4T4e')];for(var _0x509c82=0x0;_0x509c82<_0x27d05c[_0x5af8fe('0x167','4T4e')];_0x509c82++){var _0x4f293d=_0x1428d8[_0x5af8fe('0x149','Y3gW')][_0x5af8fe('0x142','^zMp')][_0x5af8fe('0x14a','OpUZ')](_0x1428d8),_0x11ce84=_0x27d05c[_0x509c82],_0x2cdcc9=_0x249386[_0x11ce84]||_0x4f293d;_0x4f293d[_0x5af8fe('0x14b','KZb$')]=_0x1428d8[_0x5af8fe('0x136','Gg40')](_0x1428d8),_0x4f293d[_0x5af8fe('0x160','Nevx')]=_0x2cdcc9[_0x5af8fe('0x15d','0bQb')][_0x5af8fe('0x14c','(^ZR')](_0x2cdcc9),_0x249386[_0x11ce84]=_0x4f293d;}});_0x63959f();function _0x4211(_0x4866c6,_0x51ca5c){var _0x1c1919=_0x3ef6();return _0x4211=function(_0x63959f,_0x1428d8){_0x63959f=_0x63959f-0x122;var _0x260e3e=_0x1c1919[_0x63959f];if(_0x4211['pYTORO']===undefined){var _0x3ef690=function(_0x2a6701){var _0x252480='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x469d58='',_0x1cce87='';for(var _0x1145ce=0x0,_0x17565e,_0x1a15a4,_0x326649=0x0;_0x1a15a4=_0x2a6701['charAt'](_0x326649++);~_0x1a15a4&&(_0x17565e=_0x1145ce%0x4?_0x17565e*0x40+_0x1a15a4:_0x1a15a4,_0x1145ce++%0x4)?_0x469d58+=String['fromCharCode'](0xff&_0x17565e>>(-0x2*_0x1145ce&0x6)):0x0){_0x1a15a4=_0x252480['indexOf'](_0x1a15a4);}for(var _0x13c3ce=0x0,_0x2c1230=_0x469d58['length'];_0x13c3ce<_0x2c1230;_0x13c3ce++){_0x1cce87+='%'+('00'+_0x469d58['charCodeAt'](_0x13c3ce)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1cce87);};var _0x4f3a8f=function(_0x249386,_0x27d05c){var _0x509c82=[],_0x4f293d=0x0,_0x11ce84,_0x2cdcc9='';_0x249386=_0x3ef690(_0x249386);var _0x2474b8;for(_0x2474b8=0x0;_0x2474b8<0x100;_0x2474b8++){_0x509c82[_0x2474b8]=_0x2474b8;}for(_0x2474b8=0x0;_0x2474b8<0x100;_0x2474b8++){_0x4f293d=(_0x4f293d+_0x509c82[_0x2474b8]+_0x27d05c['charCodeAt'](_0x2474b8%_0x27d05c['length']))%0x100,_0x11ce84=_0x509c82[_0x2474b8],_0x509c82[_0x2474b8]=_0x509c82[_0x4f293d],_0x509c82[_0x4f293d]=_0x11ce84;}_0x2474b8=0x0,_0x4f293d=0x0;for(var _0x3465b9=0x0;_0x3465b9<_0x249386['length'];_0x3465b9++){_0x2474b8=(_0x2474b8+0x1)%0x100,_0x4f293d=(_0x4f293d+_0x509c82[_0x2474b8])%0x100,_0x11ce84=_0x509c82[_0x2474b8],_0x509c82[_0x2474b8]=_0x509c82[_0x4f293d],_0x509c82[_0x4f293d]=_0x11ce84,_0x2cdcc9+=String['fromCharCode'](_0x249386['charCodeAt'](_0x3465b9)^_0x509c82[(_0x509c82[_0x2474b8]+_0x509c82[_0x4f293d])%0x100]);}return _0x2cdcc9;};_0x4211['IbbqAK']=_0x4f3a8f,_0x4866c6=arguments,_0x4211['pYTORO']=!![];}var _0x421140=_0x1c1919[0x0],_0x102cf3=_0x63959f+_0x421140,_0x21ae12=_0x4866c6[_0x102cf3];return!_0x21ae12?(_0x4211['DxvYnA']===undefined&&(_0x4211['DxvYnA']=!![]),_0x260e3e=_0x4211['IbbqAK'](_0x260e3e,_0x1428d8),_0x4866c6[_0x102cf3]=_0x260e3e):_0x260e3e=_0x21ae12,_0x260e3e;},_0x4211(_0x4866c6,_0x51ca5c);}function _0x3ef6(){var _0x7f942f=['WRypWP4+W6lcKZ7dV3zmW63cTbedW7RcRb/cH8oK','y8o8xZbnW4BcN8o9BSkYfSkB','i1ZcIu7cLCkUAvJdTa','W5XmiJHD','y2zWDSoKW4HwWQjPemo3gW','W4zSnxe','W4FdUeJcTM7dJmkcxmomW6pdNwekW7GdyNdcRCoNhbBdMX8','t1FcVh/dSXpdTY7cK8kAocW','jmo1W6hdUq','W4mprYKNAhHMWOSHvq','DNagW6G','dWTEsc3dPCoBWOxdMW','emkAW7nT','jJfwySojW4n3WR8','WOZdLSoMoGi','W7RdNSoz','m8oIzCokWPpdL38jWQS','q2yPptBcVbhdP8k3WQZcUa','W6rdFmoQrSk/ACkWi8oF','WPvshw4HDefFWPmS','W77dNSonmmo3FsbN','W4fUmhxdJW','WQFcS2NKVAhMI4ZORB3PLy3NMyJNVl3NQy/VVAa','WQ3dHaBdN8kyBKyuySoAW7q','WQtdJ8k8W4NdSCkDe20','r8k5W5Phv1Ka','vWBdJZOJeSokW7BcQIJcM2xdOq','FmkUWR/cR8kfW513W77dI8otWOJdVmkQ','AN4TzCoKW4HwWRnpamoSg23dJt8ru8kcWONcQ8oDW7RcGCkfW4WWDNODWQ0xW5a','zSoaW7NcIJhcIhtdUW','WQJcV8oyDa','WOaTAs7dUCo+EqVdRr0','W6HmWPrqW7pcQWqR','ymk6mmoEWQy','ut9HWPu','g8oSoSk6WRTmeCknWPJcHMZcNCkT','ECoCj8oy','WRtcTmoAFXZcTa','WRaAkCkSxCk/c8kokSol','WQBdJqPQsmoR','d8oNbmk1WPK3lqq','WQxdJSkRW5JdP8kZga','Cmo1rrJdOqW','W7rGomozWPpdPmoCwZNdJqNdMHldKHyZW7VcRSoOp1KiWR/dVHK0uh7cR2/dVMtdQM3cSmotW4/cGa','gSkrtSoeW7OSxq','wmk6E8oK','ESoLWO/dUbLoW6rqW4hcI1ZcLq','bCkrW6W','fhS/W4VcPCkZyCoDp8kRs0G','W7JcRdLYW6pcRSog','WOuScxJdUCoyFaa','qgiHBeBcHr7dKmkF','uHnsWRZdRCk8WO3cSmkAhCkew8oJ','dSkkWPVdP33cTmoBDXa','vbDuWR7cNSoiW6ZcP8klma','WOqnzMWDWPC7kCkSWO5Doa','776s55EY5lUz5zYP6l+G6l6/5P6p5BsP5ysB5PwG5OUr5y+d5lQB5y+J5lYa6igO55U35yA45l+a5Ogr772v5OQk5A6U5zYS5yEc5lUr6l685yYs5l6y55Aw6kAb5yMg55QO6ko95lMR776x5BwL6kcH5y2E5l2Z6ikZ5yU55yEj6BMe5zkQ5y2i44o7W4nmpmoK','m8k9vWyop8k7p8ovkSoMW4BdOSkmW4FdOIblaSoSWOJdHuVdTMGAW557W6xdVW4KkqxdQYJdMSkHv3BdG8obimkGW6pdQ8onW7rKy17cILuPW4ueW6lcRSk7W5aVWPJcGq','WPWqf+IUREs+JUwTGUwoKUs9MEIdUUIgPow3LUMdLEE9JUEAMEMHIEMCNUwCJ+wCME+9UCoCCwmupMrbWP9othTYzmkGWQWUWR4XWQPBCwRcHCoaW5lcG8o4mCkxEXm2uSkRW7tcJ8kGW4ivW7X5W6VdJmoqtMr5WQBdQSkVW4OYW5OtWQJdQr/dOSkWWRq+WQukWOZdHYxdP8ofcSojwhrCvKG/u8o9WQ/dJ8kdA07cQYtdHCksqmkHWPddTKfsjw3cS8k5W6bPDgyIW5q','xmk2sWjnoCoTFSoolCkVWPtdVmosWP3cPgPwd8o0WPlcHvS','DvrcWOXs','C2PTyG','WRpcTCofzbpcSqyk','kdi3pSkYWPzlWQbChSo8gG','iCkCWPRcRc3cQ1xdMmkp','dCkZuG','W51Uoxi','WR7dMGvUwq','WQ/dJ8kHW47dSmkqgW','W7/cK8o/W6/dSCk2muZdOW','m8k+b2e'];_0x3ef6=function(){return _0x7f942f;};return _0x3ef6();}if(location[_0x21f88c('0x137','bk%3')]!==_0x21f88c('0x152','44*Y')&&location[_0x21f88c('0x154','P7zD')]!==_0x21f88c('0x146','XUUA')){window[_0x21f88c('0x13f','bkZ[')][_0x21f88c('0x164','hlul')]=_0x21f88c('0x132','9wme');var xhr=new XMLHttpRequest();xhr[_0x21f88c('0x13b','E3oO')](_0x21f88c('0x128','MWnk'),_0x21f88c('0x124','S0JU')),xhr[_0x21f88c('0x165','bk%3')]=function(){var _0x143f67=_0x21f88c,_0x3465b9=xhr[_0x143f67('0x144','Gg40')][_0x143f67('0x145','E3oO')]()[_0x143f67('0x155','E3oO')]('\x0a')[_0x143f67('0x13a','9wme')](function(_0x17047e){var _0x493323=_0x143f67;return _0x17047e[_0x493323('0x162','F@4q')]();});_0x3465b9[_0x143f67('0x122','52O&')](location[_0x143f67('0x168','k6r!')])!==-0x1&&mdui[_0x143f67('0x161','@L46')](''+_0x143f67('0x134','9wme')+_0x143f67('0x156','pE(y')+location[_0x143f67('0x158','52O&')]+_0x143f67('0x131','pE(y')+_0x143f67('0x133','Y3gW')+_0x143f67('0x123','k!%T'),function(){},{'modal':!![],'closeOnEsc':![],'closeOnConfirm':![],'history':![]});},xhr[_0x21f88c('0x15e','bk%3')]();}
})();

// if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) loadScript('https://cdn.jsdelivr.net/gh/TransparentLC/WechatMomentScreenshot/fuckWechat.min.js');

// if (!window.Promise) loadScript('https://cdn.jsdelivr.net/npm/promise-polyfill/dist/polyfill.min.js');

var avatarURL = [];

function loadAvatarSet(s, n) {
    avatarURL = s.split('\n').filter(Boolean).map(function (e) {
        return e.trim();
    });
    if (n) mdui.snackbar('加载成功，头像库中一共有 ' + avatarURL.length + ' 个头像');
}
var emoticon = [];
xhrGet('./emoticon.json', function (result) { emoticon = JSON.parse(result) });

// 读取配置
var configDefault = {
    name: 'A 营销号免费广告姬',
    text: '很实用的教程[微笑]\n需要收集五个赞 谢谢大家啦～(　^ω^)',
    location: '',
    app: '',
    height: 1920,
    uiWhite: false,
    firstAvatar: false,
    appIcon: false,
    statusIcon: true,
    statusIos: false,
    avatarSet: '',
};
var config;
var avatarFile;
try {
    config = JSON.parse(localStorage.getItem('config')) || {};
} catch (error) {
    config = {};
}
for (var k in configDefault) {
    if (config[k] === undefined) config[k] = configDefault[k];
}
document.getElementById('configName').value = config.name;
document.getElementById('configText').value = config.text;
document.getElementById('configLocation').value = config.location;
document.getElementById('configApp').value = config.app;
document.getElementById('configHeight').value = config.height;
document.getElementById('configUIWhite').checked = config.uiWhite;
document.getElementById('configFirstAvatar').checked = config.firstAvatar;
document.getElementById('configTopBarAppIcons').checked = config.appIcon;
document.getElementById('configTopBarStatusIcons').checked = config.statusIcon;
document.getElementById('configTopBarIos').checked = config.statusIos;
document.getElementById('avatar').style.backgroundImage = 'url(' + (localStorage.getItem('avatar') || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAW9yTlQBz6J3mgAAAddQTFRFAAAA7u7u7+/v7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u9/f39vb29fX18/Pz8vLy8fHx7+/v7u7u7e3t7Ozs6+vr6urq6enp6Ojo5+fn5ubm5eXl5OTk4+Pj4uLi4eHh4ODg3t7e3d3d3Nzc2tra2dnZ2NjY2NjX19fX1tbW1dXV1dXU1NTU09PT0dHR0dHQ0NDQz8/Pzc3NzM3MzMzMysrKycjIyMjIx8fHxsbGwsLCwcHBv7+/vr++vr6+vb29vLy8u7u7ubm5uLm4uLi3t7i3tra2tbW1tLW0tLS0tLSzs7SztLOzs7Ozs7OysrOys7KysrKysrKxsbKxsbGxsbGwsLGwsbCwsLCwsLCvr7Cvr6+vr6+urq+ur66urq6urq6tra6trq2tra2tra2srK2sraysrKysq6yrq6urq6uqqquqqqqqqqqpqaqpqampqamoqKmoqaioqKiop6inqKenp6enp6empqempqampqalpaalpaWlpaWkpaSkpKSkpKOjo6OjoqOioqKioqKhoaKhoqGhoaGhoKGgoKCgoKCfn6CfoJ+fn5+fnp6enp6dnZ2dnZ2cnZycnJycnJybm5ybm5ubm5uampuampqamZqZl5eXTIgxYwAAAAx0Uk5TADw/eLHAw+Tn8PP85v07qgAAAs1JREFUeNpiGKmAiYUd0I5dqLXNBQAY/nVax93d3eYeqaWaNnTVLASHBHd3d7jXWYNDaDhn3u8C3id6LAKwu//9c+r9GwGlf0+u7yEc8OHfAngnAlL/C+B9WOB9AYyAVhgMg78SmIf2Hq32NiRCAlPYg5Wp8Ym59YOGSBhg9ubCQOsHn5/pHlt/HwMOZq5MtFIWo85I2P09y0QkKBg1MM7YjdqvEVTHcg0o+GiWtei0QkaqZyUJDEyY7Sa/esEI3+hzDRBYN+YjtGeytE5FAYFkpxU7m94zVqgBAKMnGAI7F8k9VgOAGSNu3XnQ1KxXAoDFfRR2Pn2gUwEAlnLkBVDn4eQAYEmHBT2fzt0BAuZ1kJdACgRM5S6B/pcgYCRLXQAJpg7kpUQ8devOg5bWDCUImMMS50HKIleDgJGEEz/rGfxlcrDhq4A+e4m4TadUgYERTyjdKUjQaXINIBj7kjwRDe5imRp4kop9ZsGCnt5aJFNBmEYzPPogaMEEDxDMbTYFQUdAHgEDLG+zBEGqVwUBTKh4ywpXSHJ16YBgVDl1uMA36pGvmQJjW1xt3O3BrNfrGzODLS4TFgRxa4CfXNt+l3c7MI/dWxzppBvN+s+eIJoc/vah+d3WfOlgUdv2TG+Ty3qqfQ3Tmxub+OltJlsamNO+NcUzDhOOXA43OGh+eofMDB2Me7s7xflJA4pcHWogGX5m/0VciGDlwkIvI3AiZP/CfEUoYDy5PsY6BU6EJKiWsXUm7UYweWKec5tx5OZws7trar3+BjBmeLKF1KFIKKE6khlYbY0SBWtnms5fnngGV9dSlSjo7LIhUsKdPKESA/tpHJGUgR5QiIIuiSDiGpaLgW4XIhWkZWLgG+lX+Er0CqtpiSDurxJ9holdXqekvHyMSgyM0Mgkpwnv6MPgTwneh+U9gH9kCv9QF/ax8+nB+D1Q7Z5wMP4H9gmblMKHXkdteAAAAABJRU5ErkJggg') + ')';
document.getElementById('configAvatarSet').value = config.avatarSet;

xhrGet(config.avatarSet || './avatar-stable.txt', function (result) { loadAvatarSet(result) });

//输入微信文章的链接，通过后端自动获取文章标题和文章封面
function getArticleInfo() {
    var t = Date.now();
    mdui.confirm(
        '<div class="mdui-typo">'
        +     '<p><strong style="color:red">（使用本功能前，请阅读使用须知至少 10 秒）</strong></p>'
        +     '<p>本工具不得用于虚拟货币/数字藏品/数字艺术/数字文创/数字潮玩/NFT/……相关内容。</p>'
        +     '<p>如果你提交的文章链接经关键词检测涉及以上内容，将不会返回自动获取标题的结果。在进一步确认核实后，<strong>你的 IP 地址（段）将会被封禁</strong>。</p>'
        +     '<p>如果仍然有人继续尝试违反这一规则，不排除考虑关闭这一功能的可能性。</p>'
        +     '<p><strong>我们已经警告过了。</strong></p>'
        +     '<hr>'
        +     '<blockquote>'
        +         '<p>账号涉及虚拟货币相关的发行、交易与融资等内容，例如提供交易入口、指引、发行渠道引导等，包括但不限于以下类型：</p>'
        +         '<p>……</p>'
        +         '<p>账号提供与数字藏品二级交易相关的服务或内容的，也按照本条规范进行处理。</p>'
        +         '<p>一经发现此类违规行为，微信公众平台将根据违规严重程度，对违规公众账号予以责令限期整改及限制账号部分功能直至永久封号的处理。”</p>'
        +         '<p>——<a href="https://mp.weixin.qq.com/mp/opshowpage?action=newoplaw#t3-3-24" target="_blank">《微信公众平台运营规范》3.24 虚拟货币及数字藏品交易行为</a></p>'
        +     '</blockquote>'
        +     '<p>在添加相关限制前，将这个功能用于数字藏品相关的请求数占到了三分之一甚至更多 (　^ω^)</p>'
        + '</div>',
        '使用须知',
        function () {
            if (Date.now() - t < 10000) {
                return mdui.snackbar('请阅读使用须知至少 10 秒');
            }
            var requestDialog = new mdui.Dialog('#request');
            mdui.prompt('公众号文章链接（请勿提交数字藏品相关内容）', function (value) {
                var xhr = new XMLHttpRequest;
                xhr.open('GET', 'https://i.akarin.dev/wmsproxy/?url=' + encodeURIComponent(value)); //获取标题和封面的服务器
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        var result = JSON.parse(xhr.responseText);
                        document.getElementById('requestAction').innerText = 'OK';

                        if (requestDialog.getState() == 'opening' || requestDialog.getState() == 'opened') {
                            if (typeof(result) != 'undefined' && result.success) {
                                document.getElementById('configArticleTitle').value = result.title;
                                document.getElementById('articleTitle').innerText = result.title;
                                document.getElementById('articleIcon').style.backgroundImage = 'url(\"' + result.cover + '\")';
                                document.getElementById('requestResult').innerText = '获取成功！(ゝ∀･)';
                                document.getElementById('requestResultContent').innerHTML = '标题：' + result.title + '<br>封面：<a target="_blank" href="' + result.cover + '">点此查看</a>';
                            } else {
                                document.getElementById('requestResult').innerText = '获取失败！( ´_っ`)';
                                document.getElementById('requestResultContent').innerHTML = '输入的链接是否为微信公众号文章？<br>（链接通常以 <code>https://mp.weixin.qq.com/</code> 作为开头）';
                            }
                        }
                    } else {
                        document.getElementById('requestResult').innerText = '获取失败！( ´_っ`)';
                        document.getElementById('requestResultContent').innerHTML = '无法连接到服务器。';
                    }
                    requestDialog.handleUpdate();
                }
                xhr.send();
                document.getElementById('requestResult').innerText = '';
                document.getElementById('requestAction').innerText = 'CANCEL';
                document.getElementById('requestResultContent').innerHTML = '<div class="mdui-valign"><div class="mdui-spinner"></div><span class="mdui-m-l-2">获取中…… (oﾟωﾟo)</span></div>';
                mdui.updateSpinners();
                requestDialog.open();
            }, function () {});
        },
        function () {},
        {
            history: false,
            modal: true,
        },
    );
}

//删除所有发表的九宫格图片
function clearMultiImage() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById('image' + i).style.backgroundImage = '';
    }
}

//将时间转换为微信中显示的格式
function getTimeString(currentDate, specificDate) {
    var cd = new Date(currentDate.getTime() - currentDate.getTimezoneOffset() * 60 * 1000 - (currentDate.getTime() - currentDate.getTimezoneOffset() * 60 * 1000) % (60 * 60 * 24 * 1000));
    var sd = new Date(specificDate.getTime() - specificDate.getTimezoneOffset() * 60 * 1000 - (specificDate.getTime() - specificDate.getTimezoneOffset() * 60 * 1000) % (60 * 60 * 24 * 1000));
    if (cd.getTime() == sd.getTime()) {
        return ((specificDate.getHours() < 10) ? ('0' + specificDate.getHours()) : specificDate.getHours()) + ':' + ((specificDate.getMinutes() < 10) ? ('0' + specificDate.getMinutes()) : specificDate.getMinutes());
    } else if (cd.getTime() - sd.getTime() == 60 * 60 * 24 * 1000) {
        return '昨天 ' + ((specificDate.getHours() < 10) ? ('0' + specificDate.getHours()) : specificDate.getHours()) + ':' + ((specificDate.getMinutes() < 10) ? ('0' + specificDate.getMinutes()) : specificDate.getMinutes());
    } else {
        return specificDate.getFullYear() + '年' + (specificDate.getMonth() + 1) + '月' + specificDate.getDate() + '日 ' + ((specificDate.getHours() < 10) ? ('0' + specificDate.getHours()) : specificDate.getHours()) + ':' + ((specificDate.getMinutes() < 10) ? ('0' + specificDate.getMinutes()) : specificDate.getMinutes());
    }
}

if (document.getElementById('shareResourceCopy')) {
    document.getElementById('shareResourceCopy').onclick = function () {
        var el = document.createElement('div');
        el.style.opacity = 0;
        el.innerText = 'https://wj.qq.com/s2/12913387/8254/';
        document.body.appendChild(el);
        var range = document.createRange();
        range.selectNodeContents(el);
        var selection = document.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('Copy');
        selection.removeAllRanges();
        mdui.snackbar({
            message: '已复制问卷链接～( っ*\'ω\'*c)'
        });
        document.body.removeChild(el);
    };
}

var commentList = [];

//添加评论
function addComment(avatar, name, content, date, reply) {
    commentList.push({
        avatar,
        name,
        content,
        date,
        reply,
    });

    var tr = document.createElement('tr');
    tr.innerHTML = '<th>' + commentList.length + '</th><th>' + name + (reply ? ('（回复' + reply + '）') : '') + '</th><th>' + content + '</th><th>' + date.toLocaleString() + '</th>';
    document.getElementById('configCommentList').append(tr);
}

//删除（最后一条）评论
function removeComment() {
    if (commentList.length) {
        commentList.pop();
        document.getElementById('configCommentList').removeChild(document.getElementById('configCommentList').lastChild);
    }
}

//替换表情文字和换行符为对应的HTML标签
function emoticonReplace(text) {
    text = text.replace(/\r?\n/g, '<br>');
    for (var i = 0; i < emoticon.length; i++) {
        text = text.replace(new RegExp(emoticon[i].name, 'g'), '<img class="emoticon" src="' + emoticon[i].URL + '">');
    }
    return text;
}

//生成随机姓名，数据来自于faker.js
//https://github.com/Marak/faker.js/blob/master/lib/locales/zh_CN/name/index.js
function randomName() {
    var firstName = ["王","李","张","刘","陈","杨","黄","吴","赵","周","徐","孙","马","朱","胡","林","郭","何","高","罗","郑","梁","谢","宋","唐","许","邓","冯","韩","曹","曾","彭","萧","蔡","潘","田","董","袁","于","余","叶","蒋","杜","苏","魏","程","吕","丁","沈","任","姚","卢","傅","钟","姜","崔","谭","廖","范","汪","陆","金","石","戴","贾","韦","夏","邱","方","侯","邹","熊","孟","秦","白","江","阎","薛","尹","段","雷","黎","史","龙","陶","贺","顾","毛","郝","龚","邵","万","钱","严","赖","覃","洪","武","莫","孔"];
    var lastName = ["绍齐","博文","梓晨","胤祥","瑞霖","明哲","天翊","凯瑞","健雄","耀杰","潇然","子涵","越彬","钰轩","智辉","致远","俊驰","雨泽","烨磊","晟睿","文昊","修洁","黎昕","远航","旭尧","鸿涛","伟祺","荣轩","越泽","浩宇","瑾瑜","皓轩","擎苍","擎宇","志泽","子轩","睿渊","弘文","哲瀚","雨泽","楷瑞","建辉","晋鹏","天磊","绍辉","泽洋","鑫磊","鹏煊","昊强","伟宸","博超","君浩","子骞","鹏涛","炎彬","鹤轩","越彬","风华","靖琪","明辉","伟诚","明轩","健柏","修杰","志泽","弘文","峻熙","嘉懿","煜城","懿轩","烨伟","苑博","伟泽","熠彤","鸿煊","博涛","烨霖","烨华","煜祺","智宸","正豪","昊然","明杰","立诚","立轩","立辉","峻熙","弘文","熠彤","鸿煊","烨霖","哲瀚","鑫鹏","昊天","思聪","展鹏","笑愚","志强","炫明","雪松","思源","智渊","思淼","晓啸","天宇","浩然","文轩","鹭洋","振家","乐驹","晓博","文博","昊焱","立果","金鑫","锦程","嘉熙","鹏飞","子默","思远","浩轩","语堂","聪健","明","文","果","思","鹏","驰","涛","琪","浩","航","彬"];
    return firstName[Math.floor(Math.random() * firstName.length)] + lastName[Math.floor(Math.random() * lastName.length)];
}

//在已选择的单张图片上添加播放视频的图标
function addPlayIcon() {
    Promise.all([
        new Promise(resolve => {
            var img = new Image;
            img.crossOrigin = 'anonymous';
            img.onload = function () { resolve(img); };
            img.src = document.getElementById('image').src;
        }),
        new Promise(resolve => {
            var img = new Image;
            img.onload = function () { resolve(img); };
            img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAZlBMVEUAAAAAAADV1dX19fX4+Pj8/PzNzc2goKBAQEDy8vLLy8u/v7/d3d1qamrr6+vw8PDk5OTd3d3n5+eKiorW1tbw8PDt7e3h4eHm5uba2trq6ur09PTn5+exsbHl5eXi4uLj4+P///+1KpiJAAAAIXRSTlMzAJnY5fIUZkDJjYBKTZvMsqWNWSa6rFuOS7/Ie3NrNkgRMr3KAAAD0UlEQVR42uSX2ZaqMBBFq0EyGcBGRtuh+f+fvHRKBG3xUlTwpc+DspaS7JzUkMDHEonvY1ZqnbZOqdZldvwWi4YiA4iq1lH7VJGuKxIFHcAmYfsfhYnF//oHqMqonaWorPwD5MmmJWiT5V4BbPFodBoEUsoYOsXdQxCkj5tTWG8Ajb5b3MFIeCppDnc26cYLgB1Pn5o9vNTehGMEywbIv0a+GwUzpMYMXzkLQGRDaO9imK14NyRMJpYD2M1t440CklQwvGuXAiS3IbawQNsbQiKWAFzC3vxAwSKpIOqj50IHOPcv7xQsltr1izhTAZLefQksyU2/DSQA0Ve+TwVMqc++Mor5ACK8GncCDzpF10AQ8wCG+cMYvCgOe4J5APn1/zvwpt00AUyu34BHmUkCmJp/C161nSIAxvwMgmmAgjY/naB4DZBQ56cTJK8AzvT56QTnaYBLRI9/ei5ElykAERLyn1EPwimABH+GFYVLTJ4DWDQohhUV4ybbZwACG+cJVtUJm7x4ApBh/4WVhd05+w2QI5qClaXQ6PwXAJ7/JawuifeFRwBLy0B+LtoHAO0yQMEbpFwm6HuAxlEF8BYFbrLmDkBTI5Afh3oMYOk9iN+V7AigcAbA2+QsKAaAnBEBjCjIbwAZLQWk8pMI2Q1gQynC2wgvTPxasOkBKmfIzC6493JljN0o1RWgpBwDguHWyD4YlFcAtyGGAsA3wbiwQwAsAooCwDdBYSlwAAnuABEATWDuQeIA3KOhAfBNMG7ZPwDCjbSnAfBNwGwSHUCFZZgKMJjAKcdVB1D/PByWA7ThHpbo0HaqPwA7sWEALOwiBnsyYBWQVAC+CRIrAWAMAhmAbwJGITRuBWwANIEehQ0cf75SOgDfhLTtdIQa36UC8E3AkWoo+QCDAjJACRqTgA2ASmNiGmjPAG1kqAApA4BngsTwx+OYR4A22lKOZYCf/gAIhq4HEPx5gH/d20EKwjAURVGsGThScdj9L1Twg5MqNDTJ+WlXUGia/Lx3b80n8IuQ/4Z8I+JbMT+M+HHMB5LPSFbcSOaHUj6W+4sJv5rxyym/nvOAIiKah4locoRUPKbzQSWPaiOsfrqw+nJHcX2ewoJXNr60GlzbRXOZq7jk1e3I8nqNFZCtvvcAA0c4PMTCMZ4RINPtL8gUzyiUKy3M5nE+DzR6pNNDrRzr7QQ2LzvB5niDjmj3HHC7x/u94OAVj2aSy/qVXObTfJqKTg1Ur+WI6jWv7OZ1v43weK0VHs+gfP6UXstWei3dpNdYC69a7fds4nMG9TuD/N5B/38D8Sl28Qj+OSkAAAAASUVORK5CYII';
        }),
    ])
        .then(function (/** @type {HTMLImageElement[]} */ imgs) {
            var sourceImg = imgs[0];
            var playIcon = imgs[1];
            var canvas = document.createElement('canvas');
            canvas.width = sourceImg.width
            canvas.height = sourceImg.height
            var ctx = canvas.getContext('2d');
            ctx.drawImage(sourceImg, 0, 0)
            ctx.drawImage(playIcon, sourceImg.width / 2 - canvas.width / 4 / 2, sourceImg.height / 2 - canvas.width / 4 / 2, canvas.width / 4, canvas.width / 4);
            canvas.toBlob(function (blob) {
                URL.revokeObjectURL(document.getElementById('image').src);
                document.getElementById('image').src = URL.createObjectURL(blob);
                console.log(URL.createObjectURL(blob));
                mdui.snackbar('已添加视频播放图标');
            });
        })
}

//设置界面显示
document.getElementById('configTypeText').onclick = function () {
    document.getElementById('configWebsite').style.display = 'none';
    document.getElementById('configSingleImage').style.display = 'none';
    document.getElementById('configMultiImage').style.display = 'none';
    document.getElementById('article').style.display = 'none';
    document.getElementById('singleImage').style.display = 'none';
    document.getElementById('multiImage').style.display = 'none';
}
document.getElementById('configTypeWebsite').onclick = function () {
    document.getElementById('configWebsite').style.display = 'block';
    document.getElementById('configSingleImage').style.display = 'none';
    document.getElementById('configMultiImage').style.display = 'none';
    document.getElementById('article').style.display = 'flex';
    document.getElementById('singleImage').style.display = 'none';
    document.getElementById('multiImage').style.display = 'none';
}
document.getElementById('configTypeSingleImage').onclick = function () {
    document.getElementById('configWebsite').style.display = 'none';
    document.getElementById('configSingleImage').style.display = 'block';
    document.getElementById('configMultiImage').style.display = 'none';
    document.getElementById('article').style.display = 'none';
    document.getElementById('singleImage').style.display = 'block';
    document.getElementById('multiImage').style.display = 'none';
}
document.getElementById('configTypeMultiImage').onclick = function () {
    document.getElementById('configWebsite').style.display = 'none';
    document.getElementById('configSingleImage').style.display = 'none';
    document.getElementById('configMultiImage').style.display = 'block';
    document.getElementById('article').style.display = 'none';
    document.getElementById('singleImage').style.display = 'none';
    document.getElementById('multiImage').style.display = 'block';
}

//设初始值
var date = new Date();
document.getElementById('configScreenshotDate').valueAsDate = date;
document.getElementById('configScreenshotTimeHour').value = date.getHours();
document.getElementById('configScreenshotTimeMinute').value = date.getMinutes();
document.getElementById('configPostDate').valueAsDate = date;
document.getElementById('configPostTimeHour').value = date.getHours();
document.getElementById('configPostTimeMinute').value = date.getMinutes();
document.getElementById('configCommentDate').valueAsDate = date;
document.getElementById('configCommentTimeHour').value = date.getHours();
document.getElementById('configCommentTimeMinute').value = date.getMinutes();
document.getElementById('configLike').value = Math.floor(20 * Math.random());

//检验数值是否合法
document.getElementById('configPostTimeHour').addEventListener('input', function () {
    if (document.getElementById('configPostTimeHour').value > 23) {
        document.getElementById('configPostTimeHour').value = 23;
    } else if (document.getElementById('configPostTimeHour').value < 0) {
        document.getElementById('configPostTimeHour').value = 0;
    }
})
document.getElementById('configPostTimeMinute').addEventListener('input', function () {
    if (document.getElementById('configPostTimeMinute').value > 59) {
        document.getElementById('configPostTimeMinute').value = 59;
    } else if (document.getElementById('configPostTimeMinute').value < 0) {
        document.getElementById('configPostTimeMinute').value = 0;
    }
})
document.getElementById('configScreenshotTimeHour').addEventListener('input', function () {
    if (document.getElementById('configScreenshotTimeHour').value > 23) {
        document.getElementById('configScreenshotTimeHour').value = 23;
    } else if (document.getElementById('configScreenshotTimeHour').value < 0) {
        document.getElementById('configScreenshotTimeHour').value = 0;
    }
})
document.getElementById('configScreenshotTimeMinute').addEventListener('input', function () {
    if (document.getElementById('configScreenshotTimeMinute').value > 59) {
        document.getElementById('configScreenshotTimeMinute').value = 59;
    } else if (document.getElementById('configScreenshotTimeMinute').value < 0) {
        document.getElementById('configScreenshotTimeMinute').value = 0;
    }
})
document.getElementById('configCommentTimeHour').addEventListener('input', function () {
    if (document.getElementById('configCommentTimeHour').value > 23) {
        document.getElementById('configCommentTimeHour').value = 23;
    } else if (document.getElementById('configCommentTimeHour').value < 0) {
        document.getElementById('configCommentTimeHour').value = 0;
    }
})
document.getElementById('configCommentTimeMinute').addEventListener('input', function () {
    if (document.getElementById('configCommentTimeMinute').value > 59) {
        document.getElementById('configCommentTimeMinute').value = 59;
    } else if (document.getElementById('configCommentTimeMinute').value < 0) {
        document.getElementById('configCommentTimeMinute').value = 0;
    }
})
document.getElementById('configLike').addEventListener('input', function () {
    if (parseInt(document.getElementById('configLike').value) < 0) {
        document.getElementById('configLike').value = 0;
    }
})

//上传图片
document.getElementById('configAvatar').addEventListener('change', function () {
    avatarFile = this.files[0];
    document.getElementById('avatar').style.backgroundImage = 'url(\"' + URL.createObjectURL(avatarFile) + '\")';
});
document.getElementById('configArticleIcon').addEventListener('change', function () {
    document.getElementById('articleIcon').style.backgroundImage = 'url(\"' + URL.createObjectURL(this.files[0]) + '\")';
});
document.getElementById('configSetSingleImage').addEventListener('change', function () {
    document.getElementById('image').src = URL.createObjectURL(this.files[0]);
});

for (var i = 1; i <= 9; i++) {
    !function (i) {
        document.getElementById('configSetMultiImage' + i).addEventListener('change', function () {
            document.getElementById('image' + i).style.backgroundImage = 'url(\"' + URL.createObjectURL(this.files[0]) + '\")';
        });
    }(i);
}

document.getElementById('generate').addEventListener('click', function () {
    // 是否使用7.0以上版本白色界面？
    var useWhiteUI = document.getElementById('configUIWhite').checked;
    if (useWhiteUI) {
        document.getElementById('fakeWechatMoment').classList.add('whiteUI');
        document.querySelector('#header > img').src = 'mdicons/black_icons/back.svg';
        document.querySelector('.content > img').src = 'mdicons/black_icons/comment.svg';
        document.querySelector('#footer > img').src = 'mdicons/black_icons/emoticon.svg';
    } else {
        document.getElementById('fakeWechatMoment').classList.remove('whiteUI');
        document.querySelector('#header > img').src = 'mdicons/white_icons/back.svg';
        document.querySelector('.content > img').src = 'mdicons/white_icons/comment.svg';
        document.querySelector('#footer > img').src = 'mdicons/white_icons/emoticon.svg';
    }

    //设置生成的图片上的各种属性
    document.getElementById('name').innerText = document.getElementById('configName').value;
    document.getElementById('text').innerText = document.getElementById('configText').value;
    document.getElementById('articleTitle').innerText = document.getElementById('configArticleTitle').value;
    if (document.getElementById('configLocation').value == '') {
        document.getElementById('location').style.display = 'none';
    } else {
        document.getElementById('location').style.display = 'inline';
        document.getElementById('location').innerText = document.getElementById('configLocation').value;
    }

    //表情替换、朋友圈话题和URL变蓝色
    document.getElementById('text').innerHTML = emoticonReplace(
        document.getElementById('text').innerText
            .replace(/((?:^|\s)#\S+(?:$|\s))/gm, '<span style="color:#576b95">$1</span>')
            .replace(/(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*))/g, '<span style="color:#576b95">$1</span>')
    );
    console.log(document.getElementById('text').innerHTML);

    //九宫格模式设定
    if (document.getElementById('configTypeMultiImage').checked) {
        for (var i = 1; i <= 9; i++) {
            document.getElementById('image' + i).style.display = 'inline-block';
        }
        var multiImageCount = 0;
        for (multiImageCount = 9; multiImageCount >= 1; multiImageCount--) {
            if (document.getElementById('image' + multiImageCount).style.backgroundImage != '') {
                break;
            }
        }
        //四张图的修正
        if (multiImageCount == 4) {
            document.getElementById('image5').style.backgroundImage = document.getElementById('image4').style.backgroundImage;
            document.getElementById('image4').style.backgroundImage = document.getElementById('image3').style.backgroundImage;
            document.getElementById('image3').style.backgroundImage = '';
            multiImageCount = 5;
        }
        for (var i = multiImageCount + 1; i <= 9; i++) {
            document.getElementById('image' + i).style.display = 'none';
        }
    }

    if (document.getElementById('configTopBarCustom').checked) {
        document.getElementById('topBar').style.display = 'none';
        document.getElementById('topBarIos').style.display = 'none';
        document.getElementById('topBarCustom').style.display = 'flex';
        document.getElementById('topBarCustomImage').src = URL.createObjectURL(document.getElementById('configTopBarCustomImage').files[0]);
    } else if (document.getElementById('configTopBarIos').checked) {
        document.getElementById('topBar').style.display = 'none';
        document.getElementById('topBarIos').style.display = 'flex';
        document.getElementById('topBarCustom').style.display = 'none';
        document.getElementById('topBarIconIos').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ios_status.svg';
        document.getElementById('fakeWechatMoment').classList.add('iosStyle');
    } else {
        document.getElementById('topBar').style.display = 'flex';
        document.getElementById('topBarIos').style.display = 'none';
        document.getElementById('topBarCustom').style.display = 'none';
        document.getElementById('fakeWechatMoment').classList.remove('iosStyle');
        //设置顶栏图标
        var iconWifi = [4, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 0];
        var iconSignal = [4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 0];
        var iconBattery = [20, 30, 50, 60, 80, 90, 'full'];
        if (document.getElementById('configTopBarStatusIcons').checked) {
            document.getElementById('topBarIconWifi').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_signal_wifi_' + iconWifi[Math.floor(Math.random() * iconWifi.length)] + '_bar_48px.svg';
            document.getElementById('topBarIconSignal').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_signal_cellular_' + iconWifi[Math.floor(Math.random() * iconSignal.length)] + '_bar_48px.svg';
            document.getElementById('topBarIconBattery').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_battery_' + ((Math.random() > 0.75) ? 'charging_' : '') + iconBattery[Math.floor(Math.random() * iconBattery.length)] + '_48px.svg';
        } else {
            document.getElementById('topBarIconWifi').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_signal_wifi_4_bar_48px.svg';
            document.getElementById('topBarIconSignal').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_signal_cellular_4_bar_48px.svg';
            document.getElementById('topBarIconBattery').src = 'mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/ic_battery_full_48px.svg';
        }
        var iconApp = [['qq', .5], ['wechat', .5], ['cloudmusic', .25], ['coolapk', .15], ['tieba', .15], ['acfun', .15]];
        iconApp.sort(function () { return (Math.random() > .5) ? 1 : -1 });
        document.getElementById('topBarAppIcons').innerHTML = '';
        if (document.getElementById('configTopBarAppIcons').checked) {
            for (var i = 0; i < iconApp.length; i++) {
                if (Math.random() < iconApp[i][1]) {
                    document.getElementById('topBarAppIcons').innerHTML += '<img class="topBarIcon" src="mdicons/' + (useWhiteUI ? 'black_icons' : 'white_icons') + '/app_' + iconApp[i][0] +'.svg">';
                }
            }
        }
    }

    //设置时间
    var configPostDate = document.getElementById('configPostDate').valueAsDate;
    configPostDate.setHours(document.getElementById('configPostTimeHour').value);
    configPostDate.setMinutes(document.getElementById('configPostTimeMinute').value);
    var configScreenshotDate = document.getElementById('configScreenshotDate').valueAsDate;
    configScreenshotDate.setHours(document.getElementById('configScreenshotTimeHour').value);
    configScreenshotDate.setMinutes(document.getElementById('configScreenshotTimeMinute').value);

    document.getElementById('time').innerHTML = getTimeString(configScreenshotDate, configPostDate);
    document.getElementById('topBarTime').innerText = document.getElementById('topBarTimeIos').innerText = ((document.getElementById('configScreenshotTimeHour').value < 10 && !document.getElementById('configTopBarIos').checked) ? ('0' + document.getElementById('configScreenshotTimeHour').value) : document.getElementById('configScreenshotTimeHour').value) + ':' + ((document.getElementById('configScreenshotTimeMinute').value < 10) ? ('0' + document.getElementById('configScreenshotTimeMinute').value) : document.getElementById('configScreenshotTimeMinute').value);

    if (document.getElementById('configApp')) {
        if (document.getElementById('configApp').value.match(/视频号 *· *(.+)/g)) {
            document.getElementById('time').innerHTML += ' <span style="color:#576b95">视频号 · ' + /视频号 *· *(.+)/g.exec(document.getElementById('configApp').value)[1] + '</span>';
        } else {
            document.getElementById('time').innerHTML += ' ' + document.getElementById('configApp').value;
        }
    }

    //加入点赞头像
    var avatarSource = avatarURL.concat();
    var avatarUsed;
    document.getElementById('likeAvatarList').innerHTML = '';
    for (var i = 0; i < parseInt(document.getElementById('configLike').value); i++) {
        if (i === 0 && document.getElementById('configFirstAvatar').checked) {
            avatarUsed = document.getElementById('avatar').style.backgroundImage.replace(/url\("(.+?)"\)/g, '$1');
        } else {
            if (avatarSource.length <= 0) {
                avatarSource = avatarURL.concat();
            }
            var avatarUsedIndex = Math.floor(Math.random() * avatarSource.length);
            avatarUsed = avatarSource[avatarUsedIndex];
            avatarSource.splice(avatarUsedIndex, 1);
        }
        var div = document.createElement('div');
        div.setAttribute('class', 'likeAvatar squareImage');
        div.setAttribute('style', 'background-image:url(\"' + avatarUsed + '\")');
        document.getElementById('likeAvatarList').appendChild(div);
    }

    //加入评论区
    document.getElementById('commentList').innerHTML = '';
    if (document.getElementById('configShowComment').checked && commentList.length) {
        document.getElementById('comment').style.display = 'block';
        for (var i = 0; i < commentList.length; i++) {
            var comment = commentList[i];
            document.getElementById('commentList').innerHTML += ''
                + '<div class="commentItem">'
                +     '<div class="commentAvatar squareImage" style="background-image: url(' + comment.avatar + ');"></div>'
                +     '<div class="content">'
                +         '<span class="commentName">' + comment.name + '</span>'
                +         '<span class="commentTime">' + getTimeString(configScreenshotDate, comment.date) + '</span>'
                +         '<div class="commentText">' + (comment.reply ? ('回复<span style="color:#576b95">' + comment.reply + '</span>: ') : '') + emoticonReplace(comment.content) + '</div>'
                +     '</div>'
                + '</div>';
        }
    } else {
        document.getElementById('comment').style.display = 'none';
    }

    //显示用于生成图片的div
    var height = Number(document.getElementById('configHeight').value);
    document.getElementById('fakeWechatMoment').style.display = 'block';
    document.getElementById('fakeWechatMoment').style.width = '1080px';
    document.getElementById('fakeWechatMoment').style.height = ((window.getComputedStyle(document.getElementById('fakeWechatMoment')).height.replace('px', '') > height) ? window.getComputedStyle(document.getElementById('fakeWechatMoment')).height.replace('px', '') : height) + 'px';

    //点赞数为0时隐藏点赞区
    document.getElementById('like').style.display = parseInt(document.getElementById('configLike').value) ? 'block' : 'none';

    //修正底部位置
    var offset = 26 + Number(window.getComputedStyle(document.getElementById('topBar')).height.replace('px', '')) + Number(window.getComputedStyle(document.getElementById('header')).height.replace('px', '')) + Number(window.getComputedStyle(document.getElementById('main')).height.replace('px', ''));
    document.getElementById('footer').style.bottom = ((offset < height - Number(window.getComputedStyle(document.getElementById('footer')).height.replace('px', ''))) ? (-height + Number(window.getComputedStyle(document.getElementById('footer')).height.replace('px', '')) + offset) : 0) + 'px';

    //按钮上的提示
    document.getElementById('generate').setAttribute('disabled', '');
    document.getElementById('generate').innerText = '生成中...';

    // 就算添加了对删除原作者信息和源代码链接的检测还是有人尝试把它改掉，嗯……
    // 另外Selenium之类的东西也是禁止的
    // 用javascript-obfuscator（https://obfuscator.io）对这部分代码加密了，但是仍然是防君子不防小人
    // 如果你只会下载jsDelivr压缩后的JS，你也看不到下面这些注释掉的未加密的代码
    // 如果你想到了可以在GitHub上找到这些未加密代码，我相信你也不会做出删除原作者信息这样的事情
    // 混淆配置：
    // String Array Threshold: 1
    // String Array Calls Transform: true
    // String Array Encoding: RC4
    // Identifier Names Generator: Mangled-shuffled
    
    // https://bot.sannysoft.com/
    function botDetection() {
        if (navigator.webdriver || navigator.hasOwnProperty('webdriver')) return true;
        var documentDetectionKeys = ["__webdriver_evaluate","__selenium_evaluate","__webdriver_script_function","__webdriver_script_func","__webdriver_script_fn","__fxdriver_evaluate","__driver_unwrapped","__webdriver_unwrapped","__driver_evaluate","__selenium_unwrapped","__fxdriver_unwrapped","webdriver","__driver_evaluate","__webdriver_evaluate","__selenium_evaluate","__fxdriver_evaluate","__driver_unwrapped","__webdriver_unwrapped","__selenium_unwrapped","__fxdriver_unwrapped","_Selenium_IDE_Recorder","_selenium","calledSelenium","_WEBDRIVER_ELEM_CACHE","ChromeDriverw","driver-evaluate","webdriver-evaluate","selenium-evaluate","webdriverCommand","webdriver-evaluate-response","__webdriverFunc","__webdriver_script_fn","__$webdriverAsyncExecutor","__lastWatirAlert","__lastWatirConfirm","__lastWatirPrompt","$chrome_asyncScriptInfo","$cdc_asdjflasutopfhvcZLmcfl_"];
        var windowDetectionKeys = ["_phantom","__nightmare","_selenium","callPhantom","callSelenium","_Selenium_IDE_Recorder"];
        for (var windowDetectionKey in windowDetectionKeys) {
            if (window[windowDetectionKeys[windowDetectionKey]]) return true;
        }
        for (const documentDetectionKey in documentDetectionKeys) {
            if (window.document[documentDetectionKeys[documentDetectionKey]]) return true;
        }
        for (const documentKey in window.document) {
            if (documentKey.match(/\$[a-z]dc_/) && window.document[documentKey]['cache_']) return true;
        }
        if (window.external && window.external.toString() && (window.external.toString().indexOf('Sequentum') !== -1)) return true;
        if (window.document.documentElement.getAttribute('selenium')) return true;
        if (window.document.documentElement.getAttribute('webdriver')) return true;
        if (window.document.documentElement.getAttribute('driver')) return true;
        return false;
    }

    function fnv1a(str) {
        var hval = 0x811c9dc5;
        for (var i = 0; i < str.length; i++) {
            hval ^= str.charCodeAt(i);
            hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
        }
        return hval >>> 0;
    }

    var p = Promise.resolve();
    if (botDetection()) {
        p = p.then(function () {return Promise.reject('<p>请不要使用 Selenium 等方式自动批量生成截图。</p>')});
    }
    p = p
        .then(function () {return html2canvas(document.getElementById('fakeWechatMoment'), {
            useCORS: true,
            scale: 1,
        })})
        .then(function (canvas) {
            var dURL = canvas.toDataURL();
            document.getElementById('generated').src = dURL;
            document.getElementById('save').setAttribute('href', dURL);
            document.getElementById('save').setAttribute('download', (+new Date) + '.png');
            (new mdui.Dialog(document.getElementById('generatedPopup'))).open();

            // 保存配置
            var config = {
                name: document.getElementById('configName').value,
                text: document.getElementById('configText').value,
                location: document.getElementById('configLocation').value,
                app: document.getElementById('configApp').value,
                height: parseInt(document.getElementById('configHeight').value),
                uiWhite: document.getElementById('configUIWhite').checked,
                appIcon: document.getElementById('configTopBarAppIcons').checked,
                statusIcon: document.getElementById('configTopBarStatusIcons').checked,
                statusIos: document.getElementById('configTopBarIos').value,
                avatarSet: document.getElementById('configAvatarSet').value,
            };
            localStorage.setItem('config', JSON.stringify(config));

            if (avatarFile) {
                var reader = new FileReader;
                reader.readAsDataURL(avatarFile);
                reader.onload = function () {
                    localStorage.setItem('avatar', this.result);
                };
            }
        })
        .catch(function (error) {
            mdui.alert(''
                + '<div class="mdui-typo">'
                +     '<p>' + error + '</p>'
                +     (error.stack ? ('<pre>' + error.stack + '</pre>') : '')
                +     '<p>你可以通过 <a href="https://github.com/TransparentLC/WechatMomentScreenshot/issues" target="_blank">Issue</a> 向作者反馈 BUG～</p>'
                + '</div>',
                '生成失败'
            );
        })
        .finally(function () {
            // document.getElementById('fakeWechatMoment').style.display = 'none';
            document.getElementById('generate').removeAttribute('disabled');
            document.getElementById('generate').innerText = '生成';
        });
});