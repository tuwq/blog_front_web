import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'



import './CardTitle.less'
import './MCardTitle.less'

class CardTitle extends React.Component {

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
		return (
            <h2 className="CardTitle">
                <span>{this.props.title}</span>
                <a onClick={this.props.clickTitleFn}>{this.props.description}&nbsp;<i><img width="12" height="12" alt="" src={this.props.svgSrc} /></i></a>
            </h2>
        )
	}
}

export default CardTitle

