import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import ArchiveCategoryParentCollection from '../ArchiveCategoryParentCollection/ArchiveCategoryParentCollection'

import { categoryAllApi } from 'api/Category/category'
import * as RESULT_CODE from 'api/Constant/resultCode'

import './ArchiveCategoryContent.less'
import './MArchiveCategoryContent.less'

class ArchiveCategoryContent extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.initData = this.initData.bind(this)
		this.state = {
			parentCollectionList: []
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
		categoryAllApi((res)=>{
			if (res.data.code == RESULT_CODE.REQUEST_SUCCESS) {
				this.setState({
					parentCollectionList: res.data.result
				})
			}
		}) 
	}
     
	render() {
		return (
          <div className="ArchiveCategoryContent">
          	   <div className="ArchiveCategoryParentCollections-wrapper">
          	   		{	
          	   			this.state.parentCollectionList.length>0
          	   			?(<React.Fragment>
          	   				{
          	   				this.state.parentCollectionList.map((item, index)=>{
				   				return (<ArchiveCategoryParentCollection parentItem={item} key={index}/>)
				   			})
          	   				}
          	   			</React.Fragment>)
          	   			:(<div></div>)
          	   		}
          	   </div>
          </div>
        )
	}
}

export default withRouter(ArchiveCategoryContent)

