import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import ArchiveCategoryItem from '../ArchiveCategoryItem/ArchiveCategoryItem'

import './ArchiveCategoryList.less'
import './MArchiveCategoryList.less'

class ArchiveCategoryList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
     
	render() {
		return (
          <div className="ArchiveCategoryList">
          	 {
          	 	this.props.childList.map((item, index)=>{
          	 		return (<ArchiveCategoryItem item={item} key={index} />)
          	 	})
          	 }
          </div>
        )
	}
}

export default withRouter(ArchiveCategoryList)

