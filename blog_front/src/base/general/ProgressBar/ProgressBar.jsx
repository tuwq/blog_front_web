import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import { prefixStyle } from 'base/js/dom'

import './ProgressBar.less'
import './MProgressBar.less'

class ProgressBar extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.progressBar = React.createRef()
		this.progressBtn = React.createRef()
		this.progress = React.createRef()
		this.watchPercent = this.watchPercent.bind(this)
		this._offset = this._offset.bind(this)
		this._triggerPercent = this._triggerPercent.bind(this)
		this.state = {
			progressBtnWidth: 16,
			transform: prefixStyle('transform')
		}
		this.touch = {}
	}

	componentDidMount() {

	}

	componentWillReceiveProps(nextProps) {
    	if (this.props.percent != nextProps.percent) {
    		this.watchPercent(this.props.percent,nextProps.percent)
    	}
    }
	
	componentWillUnmount() {
        this.setState = (state,callback)=>{
	      return
	    }
	}

	progressClick(e) {
		e.stopPropagation()
        const rect = this.progressBar.current.getBoundingClientRect()
        const offsetWidth = e.pageX - rect.left
        this._offset(offsetWidth)
        this._triggerPercent()
	}

	progressTouchStart(e) {
		e.stopPropagation()
		e.preventDefault()
		this.touch.initiated = true
		this.touch.startX = e.touches[0].pageX
		this.touch.left = this.progress.current.clientWidth
	}

	progressTouchMove(e) {
		e.stopPropagation()
		e.preventDefault()
		if (!this.touch.initiated) {return}
		const deltaX = e.touches[0].pageX - this.touch.startX
		const offsetWidth = Math.min(this.progressBar.current.clientWidth-this.state.progressBtnWidth,Math.max(0,this.touch.left+deltaX))
		this._offset(offsetWidth)
	}

	progressTouchEnd(e) {
		e.stopPropagation()
		e.preventDefault()
		this.touch.initiated = false
		this._triggerPercent()
	}

	progressMouseStart(e) {
		e.stopPropagation()
		e.preventDefault()
		this.touch.initiated = true
		this.touch.startX = e.pageX
		this.touch.left = this.progress.current.clientWidth
	}

	progressMouseMove(e) {
		e.stopPropagation()
		e.preventDefault()
		if (!this.touch.initiated) {return}
		const deltaX = e.pageX - this.touch.startX
		const offsetWidth = Math.min(this.progressBar.current.clientWidth-this.state.progressBtnWidth,Math.max(0,this.touch.left+deltaX))
		this._offset(offsetWidth)
	}

	progressMouseEnd(e) {
		e.stopPropagation()
		e.preventDefault()
		this.touch.initiated = false
		this._triggerPercent()
	}

	_triggerPercent() {
		const barWidth = this.progressBar.current.clientWidth-this.state.progressBtnWidth
		const percent = this.progress.current.clientWidth/barWidth
		this.props.percentChangeFn(percent)
	}

	watchPercent(oldval,newval) {
		if (newval >= 0 && !this.touch.initiated) {
			const barWidth = this.progressBar.current.clientWidth-this.state.progressBtnWidth
			const offsetWidth = newval * barWidth
			this._offset(offsetWidth)
		}
	}

	_offset(offsetWidth) {
		this.progress.current.style.width = `${offsetWidth}px`
		this.progressBtn.current.style[this.state.transform] = `translate3d(${offsetWidth}px,0,0)`
	}

	render() {
		return (
			<div className="ProgressBar" ref={this.progressBar} onClick={this.progressClick.bind(this)}>
				<div className="bar-inner">
			      <div className="progress" ref={this.progress}></div>
			      <div className="progress-btn-wrapper" ref={this.progressBtn}
			      	onTouchStart={this.progressTouchStart.bind(this)} 
			      	onTouchMove={this.progressTouchMove.bind(this)} 
			      	onTouchEnd={this.progressTouchEnd.bind(this)}
			      	onMouseDown={this.progressMouseStart.bind(this)}
			      	onMouseMove={this.progressMouseMove.bind(this)}
			      	onMouseUp={this.progressMouseEnd.bind(this)}
			      >
			        <div className="progress-btn"></div>
			      </div>
			    </div>
			</div>
        )
	}
}


export default withRouter(ProgressBar)