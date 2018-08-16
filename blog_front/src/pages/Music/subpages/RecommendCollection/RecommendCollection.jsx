import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './RecommendCollection.less'
import './MRecommendCollection.less'

class RecommendCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
	}

	componentDidMount() {
	  
	}

	render() {
		return (
			<div className="RecommendCollection">
				RecommendCollection
        	</div>
        )
	}
}

export default withRouter(RecommendCollection)


