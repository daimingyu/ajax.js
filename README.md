# ajax.js

## 使用方法
```
//安装dmy-ajax
npm install dmy-ajax

//引入主对象
import Ajax from 'dmy-ajax';

//使用Ajax
Ajax.get(paramsObj);
AJax.post(paramsObj);
```

## paramsObj参数说明
+ url: 请求的url
+ data: 传递的参数
+ success: 成功的回调
+ fail: 失败的回调

## 使用实例
```
Ajax.get({
    url: '//www.xxx.com/data',
    data: {
        name: 'xxx',
        age: 13
    },
    success: function(data){

    },
    fail: function(data){

    }
});
```