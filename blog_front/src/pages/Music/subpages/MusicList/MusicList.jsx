import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as songsActions from 'store/actions/songs' 
import * as playerActions from 'store/actions/player' 

import MusicItem from '../MusicItem/MusicItem'

import './MusicList.less'
import './MMusicList.less'

class MusicList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.selectItemFn = this.selectItemFn.bind(this)
	}

	componentDidMount() {
	  
	}

	selectItemFn(item,index) {
		this.props.songsActions.saveSongs({
			currentIndex: index,
			currentSong: this.props.data[index]
		})
		this.props.playerActions.savePlayData({
			palyStatus: true,
			palyering: true,
			fullScreen: true
		})
	}

	render() {
		return (
			<div className="MusicList">
				{
					this.props.data.map((item,index)=>{
						return (<MusicItem item={item} index={index} key={index} selectItemFn={this.selectItemFn.bind(this)}/>)
					})
				}
        	</div>
        )
	}
}

function mapStateToProps(state) {
    return {
       
    }
}
function mapDispatchToProps(dispatch) {
    return {
        songsActions: bindActionCreators(songsActions, dispatch),
        playerActions: bindActionCreators(playerActions, dispatch)
    }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MusicList)
)


