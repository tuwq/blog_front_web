import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PubSub from 'pubsub-js'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as songsActions from 'store/actions/songs' 

import { pageSongByKeywordApi } from 'api/Music/music'
import { _saveSearchSongs,_loadSearchSongs,_removeSearchSongs } from 'base/js/localCache'
import { uniqueById } from 'base/js/util'

import PlayerSearchItem from '../PlayerSearchItem/PlayerSearchItem'

import './PlayerSearch.less'

class PlayerSearch extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			keyword: '',
			pageSize: 20,
			data: [],
			showResult: false
		}
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		// 防止异步调用数据
        this.setState = (state,callback)=>{
	      return
	    };
	}

	search() {
		pageSongByKeywordApi(1,this.state.pageSize,
			this.state.keyword,(res)=>{
				if (res.data.code == 200) {
					this.setState({
						data: res.data.data,
						showResult: true
					})
				}
			})
	}

	selectItemFn(selectItem,selectIndex) {
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
				currentSong: localSongs[0],
				listType: 2
			})
			_saveSearchSongs(JSON.stringify(localSongs))
		} else {
			localSongs = []
			localSongs.push(selectItem)
			this.props.songsActions.saveSongs({
				songList: localSongs,
				searchList: localSongs,
				currentIndex: 0,
				currentSong: localSongs[0],
				listType: 2
			})
			_saveSearchSongs(JSON.stringify(localSongs))
		}
		this.setState({
			showResult: false
		})
		PubSub.publish(global.AddLocalSearchSongSubscribe,localSongs.length)
	}

	handleChange(e) {
		this.setState({
			keyword: e.target.value
		})
	}

	keypress(e) {
		// 回车搜索
		if (e.which === 13) {
			this.search()
		}
	}

	clearLocal() {
		_removeSearchSongs()
		PubSub.publish(global.clearLocalSearchSongSubscribe)
	}

	render() {
		return (
			<div className="PlayerSearch">
				<input type="text" placeholder="搜索后回车" value={this.state.keyword} onChange={this.handleChange.bind(this)} onKeyPress={this.keypress.bind(this)}/>
				<i title="清空本地搜索记录" className="delSearchList fa fa-trash" onClick={this.clearLocal.bind(this)}></i>
				<div className={(this.state.showResult?'show':'')+" searchlist-box"}>
					<div className="searchlist-wrap">
						<div className="container">
							{
								this.state.data.length>0&&
								(<ul>
									{
										this.state.data.map((item,index)=>{
											return (<PlayerSearchItem item={item} index={index} key={index} selectItemFn={this.selectItemFn.bind(this)}/>)
										})
									}
								</ul>)
							}
						</div>
					</div>
				</div>
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
    }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PlayerSearch)
)


