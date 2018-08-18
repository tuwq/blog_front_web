import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,NavLink } from 'react-router-dom'
import PubSub from 'pubsub-js'

import './MusicCategoryItem.less'
import './MMusicCategoryItem.less'

class MusicCategoryItem extends React.Component {

	constructor(props,context) {
		super(props,context)
	}

	componentDidMount() {
		$('.MusicCategoryItem:eq(0)').addClass('active')
	}

	changeCategory(id,e) {
		$(e.target).parent().addClass('active').siblings().removeClass('active')
		PubSub.publish(global.MusicCategoryChangeSubscribe,id);
	}

	render() {
		return (
			<div className="MusicCategoryItem" onClick={this.changeCategory.bind(this,this.props.item.id)}>
				<a className="name">{this.props.item.name}</a>
        	</div>
        )
	}
}

export default withRouter(MusicCategoryItem)


