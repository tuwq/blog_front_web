import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import WidgetList from '../WidgetList/WidgetList'

import { artPraiseApi } from 'api/Category/category'

import './WidgetCollection.less'
import './MWidgetCollection.less'

class WidgetCollection extends React.Component {

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
         	<div id="WidgetCollection" className="WidgetCollection">
				{
					this.state.praiseList.length>0&&
					(<WidgetList praiseList={this.state.praiseList}/>)
				}         	
         	</div>
        )
	}
}

export default WidgetCollection

