import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import ArchiveTagDetailItem from '../ArchiveTagDetailItem/ArchiveTagDetailItem'

import './ArchiveTagDetailList.less'
import './MArchiveTagDetailList.less'

class ArchiveTagDetailList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {

	}

	render() {
		return (
          <div className="ArchiveTagDetailList">
            {
              this.props.data.map((item, index)=>{
                return (<ArchiveTagDetailItem item={item} key={index}/>)
              })
            }
          </div>
        )
	}
}

export default withRouter(ArchiveTagDetailList)

