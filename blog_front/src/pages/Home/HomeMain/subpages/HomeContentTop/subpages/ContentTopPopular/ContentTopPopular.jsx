import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import WidgetList from '../WidgetList/WidgetList'

import { artPraiseApi } from 'api/Article/article'

import './ContentTopPopular.less'
import './MContentTopPopular.less'

class ContentTopPopular extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.initData = this.initData.bind(this)
		this.state = {
			praiseList: []
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
		artPraiseApi((res)=>{
			if (res.data.code == 200) {
				this.setState({
					praiseList: res.data.result
				})
			}
		})
	}
	
	render() {
		return (
         	<div id="ContentTopPopular" className="ContentTopPopular">
				{
					this.state.praiseList.length>0&&
					(<WidgetList praiseList={this.state.praiseList}/>)
				}         	
         	</div>
        )
	}
}

export default ContentTopPopular

