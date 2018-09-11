import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import FirendList from './subpages/FirendList/FirendList'
import FirendTitle from './subpages/FirendTitle/FirendTitle'

import { getFirendsApi } from 'api/Firend/firend'

import './Firend.less'
import './MFirend.less'

class Firend extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
			data: []
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
		getFirendsApi((res)=>{
			if (res.data.code == 200) {
				this.setState({
					data: res.data.result
				})
			}
		})
	}



	render() {
		return (
			<div className="Firend">
				<DocumentTitle title="仟月的友链">
					<div className="Firend-Wrapper">
						<div className="Firend-Inner">
							<FirendTitle />
							{
								this.state.data.length>0&&
								(<FirendList data={this.state.data}/>)
							}		
						</div>
					</div>
				</DocumentTitle>
        	</div>
        )
	}
}

export default withRouter(Firend)


