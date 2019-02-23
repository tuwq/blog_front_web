import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './BackGround.less'
import './MBackGround.less'

class BackGround extends React.Component {

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

	render() {
		let imgStyle = {
		  backgroundImage: 'url(' + this.props.imgConfig.mainImg + ')',
		};

		return (
			<div className="BackGround" style={imgStyle}>
				{
		          this.props.children
		        }
        	</div>
        )
	}
}

function mapStateToProps(state) {
    return {
        imgConfig: state.imgConfig
    }
}
function mapDispatchToProps(dispatch) {
    return {
        
    }
}


export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(BackGround)
)



