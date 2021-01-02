import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import { prefixStyle } from 'base/js/dom'

import './VolumeBar.less'

class VolumeBar extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this._offset = this._offset.bind(this)
		this._triggerPercent = this._triggerPercent.bind(this)
		this.progress = React.createRef()
		this.progressBtn = React.createRef()
		this.progressBar = React.createRef()
		this.state = {
			progressBtnHeight: 30,
			transform: prefixStyle('transform')
		}
		this.touch = {}
	}

	componentDidMount() {
		const barHeight = this.progressBar.current.clientHeight-this.state.progressBtnHeight
		const percent = this.progress.current.clientHeight/barHeight
	}

	componentWillReceiveProps(nextProps) {
    	
    }
	
	componentWillUnmount() {
        this.setState = (state,callback)=>{
	      return
	    }
	}

	progressMouseStart(e) {
		e.stopPropagation()
		e.preventDefault()
		this.touch.initiated = true
		// 一开始鼠标点击的位置
		// 进度条已走的高度
		this.touch.startY = e.pageY
		this.touch.top = this.progress.current.clientHeight
	}

	progressMouseMove(e) {
		e.stopPropagation()
		e.preventDefault()
		if (!this.touch.initiated) {return}
		// 鼠标与一开始点击位置的偏移量。向上负值转正值
		const deltaY = -(e.pageY - this.touch.startY)
		// 进度条高度
		const offseHeight = Math.min(this.progressBar.current.clientHeight-this.state.progressBtnHeight,Math.max(0,this.touch.top+deltaY))
		this._offset(offseHeight)
		this._triggerPercent()
	}

	progressMouseEnd(e) {
		e.stopPropagation()
		e.preventDefault()
		this.touch.initiated = false
	}

	progressTouchStart(e) {
		e.stopPropagation()
		e.preventDefault()
		this.touch.initiated = true
		this.touch.startY = e.touches[0].pageY
		this.touch.top = this.progress.current.clientHeight
	}

	progressTouchMove(e) {
		e.stopPropagation()
		e.preventDefault()
		if (!this.touch.initiated) {return}
		const deltaY = -(e.touches[0].pageY - this.touch.startY)
		const offseHeight = Math.min(this.progressBar.current.clientHeight-this.state.progressBtnHeight,Math.max(0,this.touch.top+deltaY))
		this._offset(offseHeight)
		this._triggerPercent()
	}

	progressTouchEnd(e) {
		e.stopPropagation()
		e.preventDefault()
		this.touch.initiated = false
	}

	_offset(offseHeight) {
		this.progress.current.style.height = `${offseHeight}px`
		this.progressBtn.current.style[this.state.transform] = `translate3d(0,${-offseHeight}px,0)`
	}

	_triggerPercent() {
		const barHeight = this.progressBar.current.clientHeight-this.state.progressBtnHeight
		const percent = this.progress.current.clientHeight/barHeight
		this.props.volumeChangeFn(percent)
	}
	
	render() {
		return (
			<div className="VolumeBar" ref={this.progressBar}>
				<div className="bar-inner"
					onTouchStart={this.progressTouchStart.bind(this)} 
			      	onTouchMove={this.progressTouchMove.bind(this)} 
			      	onTouchEnd={this.progressTouchEnd.bind(this)}
					onMouseDown={this.progressMouseStart.bind(this)}
			      	onMouseMove={this.progressMouseMove.bind(this)}
			      	onMouseUp={this.progressMouseEnd.bind(this)}>
			      <div className="progress" ref={this.progress}></div>
			      <div className="progress-btn-wrapper" ref={this.progressBtn}
			      >
			        <div className="progress-btn"></div>
			      </div>
			    </div>
			</div>
        )
	}
}


export default withRouter(VolumeBar)