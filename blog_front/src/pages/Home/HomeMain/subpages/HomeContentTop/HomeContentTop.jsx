import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import Slider from 'base/general/Slider/Slider'
import WidgetCollection from './subpages/WidgetCollection/WidgetCollection'

import { artWeightApi } from 'api/Category/category'

import './HomeContentTop.less'
import './MHomeContentTop.less'

class HomeContentTop extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.initData = this.initData.bind(this)
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		this.initData()
	}

	initData() {
		artWeightApi((res)=>{
			if (res.data.code == 200) {
				this.setState({
					data: res.data.result
				})
			}
		})
	}

	componentWillUnmount() {
	    // 防止异步调用数据
	    this.setState = (state,callback)=>{
	      return
	    };
	}
	
	render() {
		return (
         	<section id="HomeContentTop" className="HomeContentTop">
         	 	{
         	 		this.state.data.length>0&&
         	 		(<Slider data={this.state.data}/>)
         	 	}
         	 	<WidgetCollection />
         	</section>
        )
	}
}

export default withRouter(HomeContentTop)


