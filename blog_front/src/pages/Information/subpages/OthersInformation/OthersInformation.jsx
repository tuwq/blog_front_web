import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import { userInfoApi } from 'api/Informartion/informartion'

import InformationCard from '../InformationCard/InformationCard'
import InformationContent from '../InformationContent/InformationContent'

class OthersInformation extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
	   this.setState = (state,callback)=>{
	     return
	   }
	}

	componentWillReceiveProps(nextProps) {
		
	}

	render() {
		return (
			<React.Fragment>
				<InformationCard />
  	 			<InformationContent />
        	</React.Fragment>
        )
	}
}

export default withRouter(OthersInformation)