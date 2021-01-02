import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import MusicCategoryList from '../MusicCategoryList/MusicCategoryList'

import { listCategoryApi } from 'api/Music/music'

import './MusicCategoryCollection.less'
import './MMusicCategoryCollection.less'

class MusicCategoryCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
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
		listCategoryApi((res)=>{
			if (res.data.code == 200) {
				this.setState({
					data: res.data.result
				})
			}
		})
	}

	render() {
		return (
			<div className="MusicCategoryCollection">
			  	{
			  		this.state.data.length>0&&
			  		(<MusicCategoryList data={this.state.data}/>)
			  	}
        	</div>
        )
	}
}

export default withRouter(MusicCategoryCollection)


