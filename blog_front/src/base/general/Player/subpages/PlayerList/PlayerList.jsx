import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import PubSub from 'pubsub-js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as songsActions from 'store/actions/songs' 

import { scroll } from 'base/js/ie'

import './PlayerList.less'

import AlbumItem from '../AlbumItem/AlbumItem'
import PlayItem from '../PlayItem/PlayItem'

class PlayerList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.initAlbum = this.initAlbum.bind(this)
		this.tranList = this.tranList.bind(this)
		this.PlaySearchReadySubscribe = this.PlaySearchReadySubscribe.bind(this)
		this.$albumList = React.createRef() 
		this.$songList = React.createRef()
		this.$rightIcon = React.createRef()
		PubSub.subscribe(global.PlaySearchReadySubscribe,this.PlaySearchReadySubscribe)
		this.state = {
			AlbumItemList: [],
			data: [],
			meta: {}
		}
	}

	componentDidMount() {
		this.initAlbum()
	}

	componentWillUnmount() {
	    PubSub.unsubscribe(this.PlaySearchReadySubscribe)
	    this.setState = (state,callback)=>{
	      return
	    };
	 }

	initAlbum() {
		let albums = this.state.AlbumItemList.slice()
		albums.push({
			txt: '默认歌单列表',
			sum: this.props.songs.songList.length
		})
		albums.push({
			txt: '搜索列表',
			sum: 0
		})
		this.setState({
			AlbumItemList: albums
		})
	}

	chooseFn(index) {
		if (index == 0) {
			this.setState({
				data: this.props.songs.songList,
				meta: this.state.AlbumItemList[0]
			},()=>{
				this.tranList()
			})
		} else if(index == 1) {

		}
	}

	tranList() {
		$(this.$albumList.current).toggleClass('tran')
		$(this.$songList.current).toggleClass('tran')
		$(this.$rightIcon.current).toggleClass('rotate')
	}

	selectItemFn(chooseItem,index) {
		this.props.songsActions.saveSongs({
			currentIndex: index,
			songList: this.state.data,
			currentSong: chooseItem
		})
	}

	PlaySearchReadySubscribe(msg,callback) {
		this.setState({
			data: this.props.songs.songList,
			meta: this.state.AlbumItemList[1]
		},()=>{
			$(this.$albumList.current).removeClass('tran')
			$(this.$songList.current).removeClass('tran')
			$(this.$rightIcon.current).toggleClass('rotate')
			callback()
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


