// 获取浏览器各相距位置
export function scroll() {  
    if(window.pageYOffset !== undefined) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
// 事件兼容

export function addEvent(ele,fn,str) {
    //通过判断调用的方式兼容IE678
    //判断浏览器是否支持该方法，如果支持那么调用，如果不支持换其他方法
    if(ele.addEventListener){
        //直接调用
        ele.addEventListener(str,fn);
    }else if(ele.attachEvent){
        ele.attachEvent("on"+str,fn);
    }else{
        //在addEventListener和attachEvent都不存在的情况下，用此代码
        ele["on"+str] = fn;
    }
}
