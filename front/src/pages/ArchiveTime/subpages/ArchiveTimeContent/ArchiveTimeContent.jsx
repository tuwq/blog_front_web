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
			pageModel: {},
			resultData: undefined
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
				let resultData = res.data.mapData
				this.setState({
					resultData: resultData,
					pageModel: res.data.pageModel,
					currentPage: res.data.pageModel.currentPage
				})
			}
		})
	}

	render() {
		return (
          <div className="ArchiveTimeContent">
          	{
      			this.state.resultData!=undefined
      			?(<React.Fragment>
      				{
      					Object.keys(this.state.resultData).sort((a, b)=>{
							return b - a;
						}).map((key, index) => {
		          			return (<ArchiveTimeYearCollection data={this.state.resultData[key]} yearTime={key} key={index}/>)
		          		})
      				}	
      				<Pagination pageModel={this.state.pageModel} loadPageFn={this.pageData.bind(this)}/>
      			</React.Fragment>)
      			:(<div></div>)
          	}
          </div>
        )
	}
}

export default withRouter(ArchiveTimeContent)

