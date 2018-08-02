import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './WidgetItem.less'
import './MWidgetItem.less'

class WidgetItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
	
	render() {
		return (
         	<div className="WidgetItem">
     			<div className="thumb">
     				<a>
     					<img width="128" height="64" alt="" src={global.artImgPrefix+this.props.item.faceCover}></img>
     				</a>
     			</div>
     			<div className="detail">
     				<h2 className="detail-title"><a>{this.props.item.title}</a></h2>
     				<div className="detail-meta">
                        <span>
                            <time>{this.props.item.updateTimeString}</time>&nbsp;
                        </span>
                    </div>
     			</div>
         	</div>
        )
	}
}

export default WidgetItem

