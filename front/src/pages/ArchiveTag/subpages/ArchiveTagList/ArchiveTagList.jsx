import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import ArchiveTagItem from '../ArchiveTagItem/ArchiveTagItem'

import './ArchiveTagList.less'
import './MArchiveTagList.less'

class ArchiveTagList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
          <div className="ArchiveTagList">
          {
          	this.props.data.map((item, index)=>{
          		return (<ArchiveTagItem item={item} key={index}/>)
          	})
          }
          </div>
        )
	}
}

export default withRouter(ArchiveTagList)

