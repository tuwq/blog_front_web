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
	          <a className="scroll-top" ref={this.topArrow} data-tooltip="返回顶部"><i><svg viewBox="0 0 1024 1024" width="16" height="16">
	          <path d="M888.68464 440.516946l-25.712615 24.940019c-5.962805 5.762237-13.833053 8.940626-22.179139 8.940626-8.384971 0-16.256242-3.178389-22.177092-8.940626L557.218366 212.026998l0 726.44507c0 10.968819-8.903787 19.911492-19.832697 19.911492l-51.627844 0c-10.968819 0-19.871583-8.942673-19.871583-19.911492L465.886241 211.828476l-261.557064 253.628488c-5.922896 5.762237-13.831007 8.940626-22.177092 8.940626-8.385994 0-16.256242-3.178389-22.177092-8.940626l-25.713638-24.940019c-6.081509-5.882987-9.419534-13.731746-9.419534-22.098297 0-8.385994 3.338025-16.256242 9.419534-22.157649L468.787314 71.888284c0.398066-0.3776 0.795109-0.715291 1.153266-1.013073 3.696182-4.868891 9.459442-7.849782 15.818267-7.849782l51.627844 0c6.477528 0 12.360516 3.099594 16.016789 8.18645 0.277316 0.23843 0.556679 0.475837 0.836041 0.7552l334.445118 324.313364c6.081509 5.881964 9.420557 13.751189 9.420557 22.138206C898.105197 426.7852 894.72624 434.633958 888.68464 440.516946z" fill="#515151"></path>
	          </svg>
	          </i></a>
	          <a className="scroll-bottom" ref={this.bottomArrow} data-tooltip="返回底部"><i><svg viewBox="0 0 1024 1024" width="16" height="16">
	          <path d="M134.261355 580.892043l25.712615-24.940019c5.962805-5.762237 13.833053-8.940626 22.179139-8.940626 8.384971 0 16.256242 3.178389 22.177092 8.940626l261.397429 253.429966 0-726.44507c0-10.968819 8.903787-19.911492 19.832697-19.911492L537.18817 63.025429c10.968819 0 19.871583 8.942673 19.871583 19.911492L557.059753 809.581536 818.617841 555.952025c5.921873-5.762237 13.831007-8.940626 22.177092-8.940626 8.385994 0 16.256242 3.178389 22.177092 8.940626l25.714661 24.940019c6.080485 5.882987 9.419534 13.731746 9.419534 22.098297 0 8.385994-3.339048 16.256242-9.419534 22.157649L554.15868 949.521728c-0.398066 0.3776-0.794086 0.715291-1.153266 1.01205-3.696182 4.869914-9.458419 7.849782-15.818267 7.849782l-51.626821 0c-6.477528 0-12.360516-3.098571-16.016789-8.18645-0.277316-0.23843-0.556679-0.476861-0.836041-0.7552L134.261355 625.128547c-6.081509-5.881964-9.420557-13.751189-9.420557-22.138206C124.840798 594.623789 128.220778 586.775031 134.261355 580.892043z" fill="#515151"></path>
	          </svg>
	          </i></a>
        	</div>
        )
	}
}

export default FixControl

