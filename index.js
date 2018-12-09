(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.Ajax = factory()
} (this, function() {
    'use strict';
    var Ajax = {
        _formatParams: function(data) {
            var arr = [];
            for (var name in data) {
                arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
            }
            arr.push(("v=" + Math.random()).replace(".",""));
            return arr.join("&");
        },
        _createXHR: function(){
            if (window.XMLHttpRequest) {
                return new XMLHttpRequest();
            }else{
                return new ActiveXObject("Microsoft.XMLHTTP")
            }
        },
        /**
         * oj.url
         * obj.data
         * obj.success()
         * obj.fail()
         * @param {*} obj 
         */
        get: function(obj){
            var xmlHttp = this._createXHR();
            var params = this._formatParams(obj.data);
            xmlHttp.open("GET", obj.url + '?' + params, true);
            xmlHttp.send();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState === 4) {
                    if (xmlHttp.status === 200) {
                        obj.success && obj.success(xhr.responseText, xhr.responseXML);
                    } else {
                        obj.fail && obj.fail(status);
                    }
                }
            }
        },
        post: function(obj){
            var xmlHttp = this._createXHR();
            var params = this._formatParams(obj.data);
            xmlHttp.open("POST", obj.url, true);
            //设置表单提交时的内容类型
            xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlHttp.send(params);
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState === 4) {
                    if (xmlHttp.status === 200) {
                        obj.success && obj.success(xhr.responseText, xhr.responseXML);
                    } else {
                        obj.fail && obj.fail(status);
                    }
                }
            }
        }
    }
    
    //返回对象
    return Ajax;
}));
