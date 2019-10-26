import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import LongList from '../LongList/LongList'
import CardTitle from 'base/general/CardTitle/CardTitle'

import refreshSvg from 'static/svg/refresh.svg'

import { randomArticleApi } from 'api/Category/category'

import './LongCollection.less'
import './MLongCollection.less'

class LongCollection extends React.Component {

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

	componentWillUnmount() {
	   this.setState = (state,callback)=>{
	     return
	   }
	}

	initData() {
		randomArticleApi((res)=>{
			if (res.data.code == 200) {
				this.setState({
					data: res.data.result
				})
			}
		})
	}

	clickTitleFn() {
		this.initData()
	}
	
	render() {
		return (
         	<div id="LongCollection" className="LongCollection">
				 <CardTitle svgSrc={refreshSvg} title="随便看看" description="换一批" clickTitleFn={this.clickTitleFn.bind(this)}/>
				 {
					 this.state.data.length > 0&&
					 (<LongList data={this.state.data}/>)
				 }
         	</div>
        )
	}
}

export default LongCollection

