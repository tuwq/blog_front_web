import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import PubSub from 'pubsub-js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as songsActions from 'store/actions/songs' 

import { _saveSearchSongs,_loadSearchSongs } from 'base/js/localCache'
import { scroll } from 'base/js/ie'
import { uniqueById } from 'base/js/util'

import './PlayerList.less'

import AlbumItem from '../AlbumItem/AlbumItem'
import PlayItem from '../PlayItem/PlayItem'

class PlayerList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.initAlbum = this.initAlbum.bind(this)
		this.initLocalSongs = this.initLocalSongs.bind(this)
		this.tranList = this.tranList.bind(this)
		this.PlaySearchReadySubscribe = this.PlaySearchReadySubscribe.bind(this)
		this.AddLocalSearchSongSubscribe = this.AddLocalSearchSongSubscribe.bind(this)
		this.clearLocalSearchSongSubscribe = this.clearLocalSearchSongSubscribe.bind(this)
		this.showDefaultList = this.showDefaultList.bind(this)
		this.showSearchList = this.showSearchList.bind(this)
		this.$albumList = React.createRef() 
		this.$songList = React.createRef()
		this.$rightIcon = React.createRef()
		PubSub.subscribe(global.PlaySearchReadySubscribe,this.PlaySearchReadySubscribe)
		PubSub.subscribe(global.AddLocalSearchSongSubscribe,this.AddLocalSearchSongSubscribe)
		PubSub.subscribe(global.clearLocalSearchSongSubscribe,this.clearLocalSearchSongSubscribe)
		this.state = {
			AlbumItemList: [],
			data: [],
			meta: {}
		}
	}

	componentDidMount() {
		this.initAlbum()
		this.initLocalSongs()
	}

	componentWillUnmount() {
	    PubSub.unsubscribe(this.PlaySearchReadySubscribe)
	    PubSub.unsubscribe(this.AddLocalSearchSongSubscribe)
	    PubSub.unsubscribe(this.clearLocalSearchSongSubscribe)
	    this.setState = (state,callback)=>{
	      return
	    };
	 }

	initAlbum() {
		let albums = this.state.AlbumItemList.slice()
		albums.push({
			txt: '默认歌单列表',
			sum: this.props.songs.defaultList.length,
			type: 1
		})
		let localData = _loadSearchSongs()
		let localSongs
		let sum = 0
		if (localData) {
			localSongs = JSON.parse(localData)
			uniqueById(localSongs)
			sum = localSongs.length
		}
		albums.push({
			txt: '搜索列表',
			sum: sum,
			type: 2
		})
		this.setState({
			AlbumItemList: albums
		})
	}

	initLocalSongs() {
		let localData = _loadSearchSongs()
		if (localData) {
			let localSongs = JSON.parse(localData)
			uniqueById(localSongs)
			this.props.songsActions.saveSongs({
				searchList: localSongs	
			})
		}
	}

	chooseFn(index) {
		if (index == 0) {
			this.showDefaultList()
		} else if(index == 1) {
			this.showSearchList()
		}
	}

	showDefaultList() {
		this.setState({
			data: this.props.songs.defaultList,
			meta: this.state.AlbumItemList[0]
		},()=>{
			this.tranList()
		})
	}

	showSearchList() {
		this.setState({
			data: this.props.songs.searchList,
			meta: this.state.AlbumItemList[1]
		},()=>{
			this.tranList()
		})
	}

	tranList() {
		$(this.$albumList.current).toggleClass('tran')
		$(this.$songList.current).toggleClass('tran')
		$(this.$rightIcon.current).toggleClass('rotate')
		this.props.cancleSearchFn()
	}

	selectItemFn(chooseItem,index) {
		this.props.songsActions.saveSongs({
			currentIndex: index,
			songList: this.state.data,
			currentSong: chooseItem,
			listType: this.state.meta.type
		})
	}	

	PlaySearchReadySubscribe(msg,callback) {
		this.setState({
			data: this.props.songs.searchList,
			meta: this.state.AlbumItemList[1]
		},()=>{
			$(this.$albumList.current).removeClass('tran')
			$(this.$songList.current).removeClass('tran')
			$(this.$rightIcon.current).toggleClass('rotate')
			callback()
		})
	}

	AddLocalSearchSongSubscribe(msg,length) {
		let itemList = this.state.AlbumItemList.slice()
		itemList[1].sum = length
		this.setState({
			data: this.props.songs.searchList,
			AlbumItemList: itemList
		})
	}

	clearLocalSearchSongSubscribe(msg,data) {
		let itemList = this.state.AlbumItemList.slice()
		itemList[1].sum = 0
		this.props.songsActions.saveSongs({
			searchList: []
		})
		this.setState({
			data: [],
			AlbumItemList: itemList
		})
	}

	render() {
		return (
			<div className="PlayerList">
				<div className="playerlist-d">
					<div className="album-list tran" ref={this.$albumList}>
						<div className="musicHeader">歌单类型(2)</div>
						<div className="list-wrap">
							<div className="list">
								<ul>
									{
										this.state.AlbumItemList.map((item,index)=>{
											return (<AlbumItem chooseFn={this.chooseFn.bind(this)} item={item} index={index} key={index}/>)
										})
									}
								</ul>
							</div>
						</div>
					</div>
					<div className="song-list tran" ref={this.$songList}>
						<div className="musicHeader">
							<i className="fa fa-angle-right" onClick={this.tranList.bind(this)} ref={this.$rightIcon}></i>
							<span>{this.state.meta.txt+"("+this.state.meta.sum+")"}</span>
						</div>
						<div className="list-wrap">
							<div className="list">
									{
										this.state.data.length>0&&
										(<ul>
											{
												this.state.data.map((item,index)=>{
													return (<PlayItem item={item} index={index} key={index} selectItemFn={this.selectItemFn.bind(this)}/>)	
												})
											}
										 </ul>)
									}
								<div className="scroll">
									<div className="bar"></div>
								</div>
							 </div>
						</div>
					</div>
				</div>
        	</div>
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
       songsActions: bindActionCreators(songsActions, dispatch),
    }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PlayerList)
)


