import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PubSub from 'pubsub-js'
import * as songsActions from 'store/actions/songs' 
import * as playerActions from 'store/actions/player' 

import { _saveSearchSongs,_loadSearchSongs,_removeSearchSongs } from 'base/js/localCache'
import { uniqueById } from 'base/js/util'

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
		if (this.props.isSearch) {
			this.loadLocalSearchList(selectItem)
		} else {
			this.loadDefaultList(selectIndex)
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

	loadDefaultList(selectIndex) {
		this.props.songsActions.saveSongs({
			songList: this.props.data,
			defaultList: this.props.data,
			currentIndex: selectIndex,
			currentSong: this.props.data[selectIndex]
		})
	}

	loadLocalSearchList(selectItem) {
		let local = _loadSearchSongs()
		let localSongs
		if(local) {
			localSongs = JSON.parse(local)
			localSongs.unshift(selectItem)
			uniqueById(localSongs)
			this.props.songsActions.saveSongs({
				songList: localSongs,
				searchList: localSongs,
				currentIndex: 0,
				currentSong: localSongs[0]
			})
			_saveSearchSongs(JSON.stringify(localSongs))
		} else {
			localSongs = []
			localSongs.push(selectItem)
			this.props.songsActions.saveSongs({
				songList: localSongs,
				searchList: localSongs,
				currentIndex: 0,
				currentSong: localSongs[0]
			})
			_saveSearchSongs(JSON.stringify(localSongs))
		}
		this.setState({
			showResult: false
		})
		PubSub.publish(global.AddLocalSearchSongSubscribe,localSongs.length)
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


