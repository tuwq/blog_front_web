import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import ArchiveTimeYearCollection from '../ArchiveTimeYearCollection/ArchiveTimeYearCollection'
import Pagination from 'base/general/Pagination/Pagination'

import { pageArticleByCreateTimeApi } from 'api/Archive/archive'
import { isNumber } from 'base/js/check'
import * as RESULT_CODE from 'api/Constant/resultCode'

import './ArchiveTimeContent.less'
import './MArchiveTimeContent.less'

class ArchiveTimeContent extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.pageData = this.pageData.bind(this)
		this.state = {
			currentPage: 1,
			pageSize: global.archiveTimePageSize,
			data: [],
			pageModel: {},
			articleTag: {}
		}
	}

	componentDidMount() {
		this.pageData(1)
	}

	componentWillUnmount() {
	   this.setState = (state,callback)=>{
	     return
	   }
	}

	pageData(page) {
		pageArticleByCreateTimeApi(page, this.state.pageSize, (res)=>{
			if (res.data.code == RESULT_CODE.REQUEST_SUCCESS) {
				this.setState({
					data: res.data.data,
					pageModel: res.data.pageModel,
					currentPage: res.data.pageModel.currentPage
				})
				res.data.data.map((item)=>{
					console.log(item.createTime)
				})
			}
		})
	}

	render() {
		return (
          <div className="ArchiveTimeContent">
          	<ArchiveTimeYearCollection />
          	<ArchiveTimeYearCollection />
          	<ArchiveTimeYearCollection />
          </div>
        )
	}
}

export default withRouter(ArchiveTimeContent)

