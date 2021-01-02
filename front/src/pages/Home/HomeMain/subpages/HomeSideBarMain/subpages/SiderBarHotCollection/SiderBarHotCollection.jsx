import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SiderBarHotList from '../SiderBarHotList/SiderBarHotList'

import { artHotDiscussApi } from 'api/Category/category'

import './SiderBarHotCollection.less'
import './MSiderBarHotCollection.less'

class SiderBarHotCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.initData = this.initData.bind(this)
		this.state = {
			hotDiscussList: [],
			category: {}
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
		artHotDiscussApi((res)=>{
			if (res.data.code == 200) {
				this.setState({
					hotDiscussList: res.data.result.articaleList,
					category: res.data.result.category
				})
			}
		})
	}

	render() {
		return (
         	<div id="SiderBarHotCollection" className="SiderBarHotCollection">
         	    {
         	    	this.state.hotDiscussList.length>0&&
         	    	(
         	    		<React.Fragment>
         	    			<h3><span>{this.state.category.name}</span></h3>
         					<SiderBarHotList hotDiscussList={this.state.hotDiscussList}/>
         	    		</React.Fragment>
         	    	)
         	    }
         	</div>
        )
	}
}

export default SiderBarHotCollection

