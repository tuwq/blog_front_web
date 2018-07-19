import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import InformationCard from '../InformationCard/InformationCard'
import InformationContent from '../InformationContent/InformationContent'

import './InformationMain.less'
import './MInformationMain.less'

class InformationMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="InformationMain">
			  <div className="Information-Warpper">
			  	 <InformationCard />
			  	 <InformationContent />
			  </div>
        	</div>
        )
	}
}

export default withRouter(InformationMain)