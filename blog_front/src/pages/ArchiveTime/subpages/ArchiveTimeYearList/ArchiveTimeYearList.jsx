import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import ArchiveTimeYearItem from '../ArchiveTimeYearItem/ArchiveTimeYearItem'

import './ArchiveTimeYearList.less'
import './MArchiveTimeYearList.less'

class ArchiveTimeYearList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
          <div className="ArchiveTimeYearList">
          	 <ArchiveTimeYearItem />
          	 <ArchiveTimeYearItem />
          	 <ArchiveTimeYearItem />
          	 <ArchiveTimeYearItem />
          	 <ArchiveTimeYearItem />
          </div>
        )
	}
}

export default withRouter(ArchiveTimeYearList)

