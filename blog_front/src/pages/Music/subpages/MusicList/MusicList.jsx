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

	selectItemFn(selectItem,selectIndex) {
		let index = this.props.songs.songList.findIndex((item)=>{
			return item.id === selectItem.id
		})
		if (index<0) {
			let list = this.props.songs.songList.slice()
			list.push(selectItem)
			this.props.songsActions.saveSongs({
				songList: list,
				currentIndex: list.length-1,
				currentSong: list[list.length-1]
			})
		} else {
			this.props.songsActions.saveSongs({
				currentIndex: index,
				currentSong: this.props.songs.songList[index]
			})
		}
		if (this.props.player.palyStatus && !this.props.player.fullScreen) {
			this.props.playerActions.savePlayData({
				palyering: true,
			})
		} else {
			this.props.playerActions.savePlayData({
				palyStatus: true,
				palyering: true,
				fullScreen: true
			})
		}
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
       songs: state.songs,
	   player: state.player
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


