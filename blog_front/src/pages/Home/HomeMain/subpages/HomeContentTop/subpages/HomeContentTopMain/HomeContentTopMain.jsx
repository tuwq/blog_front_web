import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import LongCollection from  '../LongCollection/LongCollection'

import { artWeightApi } from 'api/Category/category'

import './HomeContentTopMain.less'
import './MHomeContentTopMain.less'

class HomeContentTopMain extends React.Component {

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
         	<section id="HomeContentTopMain" className="HomeContentTopMain">
				<LongCollection />
         	</section>
        )
	}
}

export default withRouter(HomeContentTopMain)