
// ----- ajax请求错误 ---- 

// ajax请求错误
var ajaxRequestError = document.getElementsByClassName("err-ajax-request")[0];
ajaxRequestError.onclick = function () {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.timeout = 30000;
  xhr.open("get", '/ajaxerror', true);
  xhr.setRequestHeader("content-type", "application/json;charset=utf-8");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();
}



// ----- 资源加载异常 ---- 

// js
var jsload = document.getElementsByClassName("err-js-load")[0];
jsload.onclick = function () {
  var script = document.createElement("script");
  script.src = `./js/undefied.js`;
  document.body.appendChild(script);
}

var cssload = document.getElementsByClassName("err-css-load")[0];
cssload.onclick = function () {
  var css = document.createElement("link");
  css.type = `text/css`;
  css.rel = 'stylesheet';
  css.href = `./js/undefied.css`;
  document.head.appendChild(css);
}

var imageload = document.getElementsByClassName("err-image-load")[0];
imageload.onclick = function () {
  var img = document.createElement("img");
  img.src = `./js/undefied.png`;
  document.body.appendChild(img);
}

var iframeload = document.getElementsByClassName("err-iframe-load")[0];
iframeload.onclick = function () {
  var iframe = document.createElement("iframe");
  iframe.src = `./js/undefied.html`;
  document.body.appendChild(iframe);
}


      