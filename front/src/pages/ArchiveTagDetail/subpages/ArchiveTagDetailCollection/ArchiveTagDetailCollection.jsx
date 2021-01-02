import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import ArchiveTagDetailTitle from '../ArchiveTagDetailTitle/ArchiveTagDetailTitle'
import ArchiveTagDetailList from '../ArchiveTagDetailList/ArchiveTagDetailList'
import Pagination from 'base/general/Pagination/Pagination'

import { pageArticleByArticleTagApi } from 'api/Archive/archive'
import { isNumber } from 'base/js/check'
import * as RESULT_CODE from 'api/Constant/resultCode'

import './ArchiveTagDetailCollection.less'
import './MArchiveTagDetailCollection.less'

class ArchiveTagDetailCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.pageData = this.pageData.bind(this)
		this.loadPage = this.loadPage.bind(this)
		this.state = {
			currentPage: 1,
			pageSize: global.archiveTagPageSize,
			data: [],
			pageModel: {},
			articleTag: {}
		}
	}

	componentDidMount() {
		if(!isNumber(this.props.match.params.id)) {
			this.props.history.replace('/notFound')
			return
		}
		this.pageData(1,this.props.match.params.id)
	}

	componentWillUnmount() {
	   this.setState = (state,callback)=>{
	     return
	   }
	}

	componentWillReceiveProps(nextProps) {
		if(!isNumber(nextProps.match.params.id)) {
			this.props.history.replace('/notFound')
			return
		}
		if (nextProps.match.params.id != this.props.match.params.id) {
			this.setState({
				currentPage: 1,
				pageSize: global.archiveTagPageSize,
				data: [],
				pageModel: {}
			},()=>{
				this.pageData(1,nextProps.match.params.id)
			})
		}
	}

	pageData(page, articleTagId) {
		pageArticleByArticleTagApi(page, this.state.pageSize, articleTagId, (res)=>{
			if (res.data.code == RESULT_CODE.REQUEST_SUCCESS) {
				this.setState({
					data: res.data.data,
					pageModel: res.data.pageModel,
					currentPage: res.data.pageModel.currentPage,
					articleTag: res.data.articleTag
				})
			}
		})
	}

	loadPage(page) {
		this.pageData(page, this.props.match.params.id)
	}

	render() {
		return (
          <div className="ArchiveTagDetailCollection">
	          {
	          	this.state.data.length>0
	          	?(<React.Fragment>
	          		<ArchiveTagDetailTitle articleTag={this.state.articleTag} />
	          		<ArchiveTagDetailList data={this.state.data} />
	          		<Pagination pageModel={this.state.pageModel} loadPageFn={this.loadPage.bind(this)}/>
	          	</React.Fragment>)
	          	:(<div></div>)
	          }
          </div>
        )
	}
}

export default withRouter(ArchiveTagDetailCollection)

