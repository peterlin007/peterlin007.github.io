
    var is_mobile = (function() {
    var userAgent = navigator.userAgent.toLowerCase();
    var is_iphone = userAgent.indexOf("iphone") > -1;
    var is_ipad = userAgent.indexOf("ipad") > -1;
    var is_ipod = userAgent.indexOf("ipod") > -1;
    var is_android = userAgent.indexOf("android") > -1;

    // check is mobile
    var is_mobile = false;

    if (is_iphone || is_ipod || is_ipad || is_android) {
            is_mobile = true;
    }

    return is_mobile;
  })();

  if (!is_mobile) {
            navigator.__defineGetter__('userAgent', function () {
                return 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36' //Android
            });
  }

  var ONEAD = {};
  ONEAD.channel = 92;
  ONEAD.response_freq = -1;
  ONEAD.category = "-1";

  // async
  ONEAD.cmd = ONEAD.cmd || [];
  ONEAD.external_url = "https://onead.onevision.com.tw";

  ONEAD.check_is_other_cover_ad = function() {
    return false;
  };

  ONEAD.cmd = ONEAD.cmd || [];

  ONEAD.cmd.push(function() {
            ONEAD_slot('div-inread-ad', client_params.playMode);
  });

  function appendIsip(callback) {
    var js = document.createElement("script");
    js.src = "//ad-specs.guoshipartners.com/static/js/isip.js";
    js.onload = callback;
    document.head.appendChild(js);
  }

  appendIsip(function() {
    //=======================================
//         設定 自行替換以下資料
//=======================================
var playMode = client_params.playMode;
var playType = client_params.playType;
var isVast = "false";
// var vastUrl = "null";
var base_url = "https://onead.onevision.com.tw";
var iframe_url = "https://onead.onevision.com.tw/ov_player/iframe/4462/1/opaque";
var l_url = "https://creative.onead.com.tw/api/v1/packs/" + client_params.xmlId +"/l.xml?pid=";
//==========================================

var width;
var height;
var vast_list;

if (playType === "HTML5_IS_DF") {
            width = 640;
  height = 390;
} else {
            width = 950;
  height = 390;
}

// if(isVast === 'true'){
//             vast_list = [{
//                 "source_url": vastUrl,
//                 "vast_url": vastUrl
//             }];
// }

window.ONEAD_is_window_onload = true;
if (ONEAD_get_response[0] !== undefined && typeof ONEAD_get_response[0] == 'function') {
            ONEAD_get_response[0]({
                "guid": "",
                "pid": 20146,
                "play_mode": playMode,
                "is_custom_pid": "true",
                "force_backend": "false",
                "term_id": "",
                "player_type": playType,
                "holdon_second": 0,
                "bypass_second": 0,
                "isip_index": 0,
                "width": width,
                "height": height,
                "stage_width": width,
                "stage_height": height,
                "base_url": base_url,
                "iframe_url": iframe_url,
                "is_vast": isVast,
                "l_url": l_url,
                "vast_list": vast_list
            });
}

  });



