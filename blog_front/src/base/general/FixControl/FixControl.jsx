import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'


import { scroll,addEvent,removeEvent } from 'base/js/ie.js'
import { getNowToBrowseDistance,getScrollHeight } from 'base/js/browse.js'

import topSvg from 'static/svg/top.svg'
import bottomSvg from 'static/svg/bottom.svg'
import './FixControl.less'
import './MFixControl.less'

class FixControl extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.getLeader = this.getLeader.bind(this)
		this.GoTop = this.GoTop.bind(this)
		this.GoBottom = this.GoBottom.bind(this)
		this.removeScroll = this.removeScroll.bind(this)
		this.topArrow = React.createRef()
		this.bottomArrow = React.createRef()
		this.Toptimer = null
		this.Bottomtimer = null
		this.topFn = null
		this.bottomFn = null
		this.Topleader = 0
		this.Bottomleader = 0
	}

	componentDidMount() {
		this.getLeader()
		this.GoTop(this.topArrow.current)
		this.GoBottom(this.bottomArrow.current)
	}

	getLeader() {
		var self = this
		window.onscroll = function() {
			// 更新当前滚动条距顶部的距离
			self.Topleader = scroll().top
			// 更新当前滚动条距底部的距离
			self.Bottomleader = getNowToBrowseDistance()
		}
	}

	GoTop(btn) {
		this.topArrow = btn
		this.topFn = addEvent(this.topArrow,()=>{
			clearInterval(this.Toptimer)
			clearInterval(this.Bottomtimer)
			let Toptarget = 0
	        this.Toptimer = setInterval(()=>{
	            let Topstep = (Toptarget - this.Topleader) / 5
	            Topstep = Topstep > 0 ?Math.ceil(Topstep):Math.floor(Topstep)
	            this.Topleader = this.Topleader + Topstep
	            window.scrollTo(0,this.Topleader)
	            if(this.Topleader === 0){
	                clearInterval(this.Toptimer)
	            }
	        },25)
		},'click')
	}

	GoBottom(btn) {
		this.bottomArrow = btn
		this.bottomFn = addEvent(this.bottomArrow,()=>{
			clearInterval(this.Toptimer)
			clearInterval(this.Bottomtimer)
			this.Bottomtimer = setInterval(() => {
				// 每次移动1/5
				let BottomStep = this.Bottomleader / 5
				BottomStep = BottomStep > 0 ?Math.ceil(BottomStep):Math.floor(BottomStep)
				this.Topleader = this.Topleader + BottomStep
				window.scrollTo(0,this.Topleader)
				if (this.Bottomleader < 10) {
					clearInterval(this.Bottomtimer)
				}
			},25)
		},'click')
	}

	removeScroll() {
		window.onscroll = null
		removeEvent(this.topArrow,this.topFn,'click')
		removeEvent(this.bottomArrow,this.bottomFn,'click')
	}

	componentWillUnmount() {
		// 关闭监听
		this.removeScroll()
		// 防止异步调用数据
        this.setState = (state,callback)=>{
	      return
	    };
	}

	render() {
		return (
			<div className="FixControl">
	          <a className="scroll-top" ref={this.topArrow}><i><img width="16" height="16" alt="" src={topSvg}/></i></a>
	          <a className="scroll-bottom" ref={this.bottomArrow}><i><img width="16" height="16" alt="" src={topSvg}/></i></a>
        	</div>
        )
	}
}

export default FixControl

