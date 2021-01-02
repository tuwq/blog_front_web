// 窗口可视范围的高度
export function getClientHeight(){    
    var clientHeight = 0    
    if(document.body.clientHeight&&document.documentElement.clientHeight){    
        clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;            
    }else{    
        clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;        
    }    
    return clientHeight;    
}
// 滚动条距离浏览器顶部的高度
export function getScrollTop(){    
    var scrollTop    
    if(document.documentElement && document.documentElement.scrollTop){    
        scrollTop = document.documentElement.scrollTop;    
    }else if(document.body){    
        scrollTop = document.body.scrollTop;    
    }    
    return scrollTop;    
} 
// 文档内容实际高度
export function getScrollHeight(){    
    return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);    
} 
export function getNowToBrowseDistance() {
    // 滚动条距离浏览器底部的高度 = 文档（页面）内容实际高度 - 滚动条距离浏览器顶部的高度 - 窗口可视范围的高度；
    return getScrollHeight() - getScrollTop() - getClientHeight()
}