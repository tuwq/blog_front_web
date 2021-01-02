import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './PlayItem.less'

class PlayItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<li className={(this.props.songs.currentSong.id==this.props.item.id?'active':'')+' PlayItem'}onClick={this.props.selectItemFn.bind(this,this.props.item,this.props.index)}>
				<span className="index">{this.props.index+1}</span>
				{this.props.item.songName} - {this.props.item.singer}
        	</li>
        )
	}
}

function mapStateToProps(state) {
    return {
       songs: state.songs
    }
}
function mapDispatchToProps(dispatch) {
	return {
		
	}
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PlayItem)
)


