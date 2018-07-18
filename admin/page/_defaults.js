define([
    './uis/ui_ad/_default',
    './uis/ui_ad2/_default'

],function(
){

    var list = {};
    // arguments.forEach(el => {
    //     list[el.name] = el;
        
    // });

    var _arguments= arguments;

    var _loop = function _loop(i) {
        list[_arguments[i].name] = function () {
            return JSON.parse(JSON.stringify(_arguments[i]));
        };
      };
      

    for(var i =0, len = arguments.length; i<len;i++){
        _loop(i);
    }
    return list;



})