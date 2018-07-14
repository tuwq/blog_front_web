import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { addEvent,removeEvent } from 'base/js/ie.js'

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
		this.move = this.move.bind(this)
		this.screen = React.createRef()
		this.imageList = React.createRef()
		this.pointList = React.createRef()
		this.key = 0
		this.square = 0
		this.imgWidth = 0
		this.pointArr = []
		this.Movetimer = null
		this.Autotimer = null
		this.pend = false
	}

	componentDidMount() {
		this.initEle()
		this.pointClick()
		this.autoPlay()
	}
	
	render() {
		return (
         	<div id="Slider" className="Silder">
         		<div className="screen" ref={this.screen}>
         			<ul ref={this.imageList}>
         				<li><a><img width="" height="" alt="" src="https://ikmoe.com/wp-content/uploads/wp-img/images/2018/02/09/98f57d54a6ac0a0161af26143161a460.png?imageView2/1/w/750/h/375/q/100"/></a></li>
         				<li><a><img width="" height="" alt="" src="https://ikmoe.com/wp-content/uploads/2018/02/20180226231848-ikmoe-45.png?imageView2/1/w/750/h/375/q/100"/></a></li>
         				<li><a><img width="" height="" alt="" src="https://ikmoe.com/wp-content/uploads/2018/02/20180226231848-ikmoe-45.png?imageView2/1/w/750/h/375/q/100"/></a></li>
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
		// 单张图片的宽度
		this.imgWidth =	screen.offsetWidth
		// 复制第一张图片所在的li,添加到ul的最后面
		let newImage = imageList.children[0].cloneNode(true)
		imageList.appendChild(newImage)
		// 给ol中添加li，ul中的个数-1个，并点亮第一个按钮。
		for (let i = 0 ;i < imageList.children.length - 1; i++) {
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
			addEvent(this.pointArr[i],()=>{
				if(this.pend) {return}
				for (let j = 0;j < this.pointArr.length; j++) {
					this.pointArr[j].className = ''
				}
				current.className = 'current'
				this.key = this.square = current.index
				this.move(this.imageList.current,-current.index*this.imgWidth)
			},'click')
		}
	}

	move(ele,target) {
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
                clearInterval(this.Movetimer)
			}
		},10)
	}

	autoPlay() {
		this.Autotimer = setInterval(this.leftslide,2000)
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
		this.key++
		let ul = this.imageList.current
		if (this.key > this.pointArr.length) {
			ul.style.left = 0
			this.key = 1
		} 
		this.move(ul,-this.key*this.imgWidth)
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
		if(this.pend) {return}
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
		this.pointArr[this.square].className = 'current'
	}
}

export default Slider

