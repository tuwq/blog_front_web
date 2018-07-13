import { scroll,addEvent } from './ie.js'
import { getNowToBrowseDistance,getScrollHeight } from './browse.js'

var Toptimer,Bottomtimer
var Topleader
var Bottomleader

// 监听位置变化
export function getLeader() {
	window.onscroll = function() {
		// 更新当前滚动条距顶部的距离
		Topleader = scroll().top
		// 更新当前滚动条距底部的距离
		Bottomleader = getNowToBrowseDistance()
	}
}
// 去顶部
export function GoTop(btn) {
	// 当前距顶部
	let Toptarget = 0
	addEvent(btn,()=>{
		clearInterval(Toptimer)
		clearInterval(Bottomtimer)
        Toptimer = setInterval(function () {
        	console.log('GoTop')
            var Topstep = (Toptarget - Topleader) / 5
            Topstep = Topstep > 0 ?Math.ceil(Topstep):Math.floor(Topstep)
            Topleader = Topleader + Topstep
            window.scrollTo(0,Topleader)
            if(Topleader === 0){
                clearInterval(Toptimer)
            }
        },25)
	},'click')
} 
// 去底部
export function GoBottom(btn) {
	// 底部高度
	addEvent(btn,()=>{
		clearInterval(Toptimer)
		clearInterval(Bottomtimer)
		Bottomtimer = setInterval(function(){
			console.log('GoBottom')
			// 顶 0  底1000  当前距顶 200  距底800
			// 800/5 => 160  当前距顶 360 距底640
			// 移动到当距顶200 + 160 到360
			// 当前距顶360 距底640
			// 675/5 => 135  当前距顶 495 距底550
			// 当当前距底 < 1 
			// 停止
			var BottomStep = Bottomleader / 5
			BottomStep = BottomStep > 0 ?Math.ceil(BottomStep):Math.floor(BottomStep)
			Topleader = Topleader + BottomStep
			window.scrollTo(0,Topleader)
			if (Bottomleader < 10) {
				clearInterval(Bottomtimer)
			}
		},25)
	},'click')
}
