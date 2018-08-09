import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { addEvent,removeEvent } from 'base/js/ie.js'
import { debounce } from 'lodash'

import './Slider.less'
import './MSlider.less'

class Slider extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.initEle = this.initEle.bind(this)
		this.pointClick = this.pointClick.bind(this)
		this.autoPlay = this.autoPlay.bind(this)
		this.leftslide = this.leftslide.bind(this)
		this.rightslide = this.rightslide.bind(this)
		this.removeTimer = this.removeTimer.bind(this)
		this.listenWindow = this.listenWindow.bind(this)
		this.reSize = this.reSize.bind(this)
		this.move = this.move.bind(this)
		this.screen = React.createRef()
		this.imageList = React.createRef()
		this.pointList = React.createRef()
		this.silder = React.createRef()
		this.key = 0
		this.square = 0
		this.imgWidth = 0
		this.pointArr = []
		this.Movetimer = null
		this.Autotimer = null
		this.pend = false
		this.pointFnList = []
		this.now = 0
		this.lis = {}
		this.imgs = {}
	}

	componentDidMount() {
		this.listenWindow()
		this.initEle()
		this.pointClick()
		this.autoPlay()
	}
	
	componentWillUnmount() {
		// 关闭滑动
		this.removeTimer()
		// 防止异步调用数据
        this.setState = (state,callback)=>{
	      return
	    };
	}

	removeTimer() {
		clearInterval(this.Autotimer)
		window.onresize = ''
		for (let i = 0 ;i < this.pointArr.length; i++) {
			removeEvent(this.pointArr[i],this.pointFnList[i],'click')
		}
	}


	listenWindow() {
		window.onresize = debounce(this.reSize,1000)
	}

	reSize() {
		// 适应屏幕宽度
		// debounce节流
		if (this.screen.current) {
			this.imgWidth =	this.screen.current.clientWidth
			this.imageList.current.style.width = this.imgWidth * this.props.data.length + 'px'
			$.each(this.imgs,(index,el)=>{
				el.style.width = this.imgWidth + 'px'
			})
		}
	}

	render() {
		return (
         	<div id="Slider" className="Silder" ref={this.silder}>
         		<div className="screen" ref={this.screen}>
         			<ul ref={this.imageList}>
         				{
         					this.props.data.map((item,index)=>{
         						return (<li key={index}><a><img width="" height="" alt="" src={item}/></a></li>)
         					})
         				}
         			</ul>
         			<ol ref={this.pointList}></ol>
         		</div>
         	</div>
        )
	}

	initEle() {
		let screen = this.screen.current
		let imageList = this.imageList.current
		let pointList = this.pointList.current
		this.lis = this.imageList.current.children
		this.imgs = $(this.lis).find('img')
		// 单张图片的宽度
		this.reSize()
		// 复制第一张图片所在的li,添加到ul的最后面
			// let newImage = this.imageList.current.children[0].cloneNode(true)
			// this.imageList.current.appendChild(newImage)
		// 给ol中添加li，ul中的个数-1个，并点亮第一个按钮。
		for (let i = 0 ;i < imageList.children.length ; i++) {
			var point = document.createElement("li")
			pointList.appendChild(point)
		}
		// 给第一个添加被显示
		this.pointArr = pointList.children;
        this.pointArr[0].className = "current";
	}

	pointClick() {
		// 鼠标点击切换图片和样式
		for (let i = 0 ;i < this.pointArr.length; i++) {
			let current = this.pointArr[i]
			current.index = i
			let pointFn = addEvent(this.pointArr[i],()=>{
				if(this.pend) {return}
				for (let j = 0;j < this.pointArr.length; j++) {
					this.pointArr[j].className = ''
				}
				current.className = 'current'
				this.key = this.square = current.index
				this.move(this.imageList.current,-current.index*this.imgWidth)
			},'click')
			this.pointFnList.push(pointFn)
		}
	}

	move(ele,target,callback) {
		// 工作中
		this.pend = true
		// 改变left滑动,需要元素添加绝对定位属性
		clearInterval(this.Movetimer);
		var speed = target > ele.offsetLeft?20:-20
		this.Movetimer = setInterval(()=>{
			var val = target - ele.offsetLeft
            ele.style.left = ele.offsetLeft + speed + "px"
			if (Math.abs(val) < Math.abs(speed)) {
				ele.style.left = target + "px"
				this.pend = false
				if(callback) {callback()}
                clearInterval(this.Movetimer)
			}
		},10)
	}

	autoPlay() {
		this.Autotimer = setInterval(this.leftslide,3000)
		// this.screen = this.screen.current
		// addEvent(this.screen,()=>{
		// 	clearInterval(this.Autotimer)
		// },'mouseover')
		// addEvent(this.screen,()=>{
		// 	this.Autotimer = setInterval(this.leftslide,2000)
		// },'mouseout')
	}

	leftslide() {
		if(this.pend) {return}
		var ul = this.imageList.current
		if(this.key == this.pointArr.length-1) {
			this.lis[0].style.position = 'relative'
			this.lis[0].style.left = this.lis.length * this.imgWidth + 'px'
			this.key = 0
		} else {
			this.key++ 
		}
		this.now++ 
		this.move(ul,-this.now*this.imgWidth,()=>{
			if(this.key == 0){
				this.lis[0].style.position = 'static'
				ul.style.left = 0
				this.now = 0
			}
		})
		this.square++
		if (this.square > this.pointArr.length -1) {
			this.square = 0
		}
		for (let i = 0; i< this.pointArr.length; i++) {
			this.pointArr[i].className = ''
		}
		this.pointArr[this.square].className = 'current'
	}

	rightslide() {
		/*if(this.pend) {return}
		this.key--
		let ul = this.imageList.current
		if (this.key < 0) {
			ul.style.left = -this.imgWidth*(this.pointArr.length) + 'px'
			this.key = this.pointArr.length-1
		}
		this.move(ul,-this.key*this.imgWidth)
		this.square--
		if (this.square < 0) {
			this.square = this.pointArr.length-1
		}
		for (let i = 0; i< this.pointArr.length; i++) {
			this.pointArr[i].className = ''
		}
		this.pointArr[this.square].className = 'current'*/
	}
}

export default Slider

