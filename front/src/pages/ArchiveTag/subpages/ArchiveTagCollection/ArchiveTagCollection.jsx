import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import { shuffle } from 'base/js/util'
import ArchiveTagList from '../ArchiveTagList/ArchiveTagList'


import { articleTagAllApi } from 'api/Archive/archive'
import * as RESULT_CODE from 'api/Constant/resultCode'

import './ArchiveTagCollection.less'
import './MArchiveTagCollection.less'

class ArchiveTagCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
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
		articleTagAllApi((res)=>{
			if (res.data.code == RESULT_CODE.REQUEST_SUCCESS) {
				this.setState({
					data: shuffle(res.data.result)
				})
			}
		})
	}

	render() {
		return (
          <div className="ArchiveTagCollection">
          	{
          		this.state.data.length>0
          		?(<ArchiveTagList data={this.state.data}/>)
          		:(<div></div>)
          	}
          </div>
        )
	}
}

export default withRouter(ArchiveTagCollection)

