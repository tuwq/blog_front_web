import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as songsActions from 'store/actions/songs' 
import * as playerActions from 'store/actions/player' 
import { playModel } from 'store/constants/songModel'

import { shuffle } from 'base/js/util'
import { scroll } from 'base/js/ie'

import ProgressBar from 'base/general/ProgressBar/ProgressBar'
import ProgressCircle from 'base/general/ProgressCircle/ProgressCircle'

import './Player.less'
import './MPlayer.less'

class Player extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.watchCurrentSong = this.watchCurrentSong.bind(this)
		this.watchPalying = this.watchPalying.bind(this)
		this.resetCurrentIndex = this.resetCurrentIndex.bind(this)
		this.loop = this.loop.bind(this)
		this.format = this.format.bind(this)
		this._pad = this._pad.bind(this)
		this.$audio = React.createRef()
        this.$fullPlayer = React.createRef()
		this.state = {
			watchSong: {},
			watchPlaying: true,
			songReady: false,
			currentTime: 0,
			percent: 0
		}
	}

	componentDidMount() {
	  this.$audio.current.play()
	}

	componentWillReceiveProps(nextProps) {
    	if (this.props.songs.currentSong != nextProps.songs.currentSong) {
    		this.watchCurrentSong(this.props.songs.currentSong,nextProps.songs.currentSong);
    	}   
    	if (this.props.player.palyering != nextProps.player.palyering) {
    		this.watchPalying(this.props.player.palyering,nextProps.player.palyering)
    	} 
    }

    end() {
    	if (this.props.player.model == playModel.loop) {
    		this.loop()
    	} else {
    		this.next()
    	}
    }

    loop() {
    	this.$audio.current.currentTime = 0
    	this.$audio.current.play()
    }

    changeModel() {
    	const model = (this.props.player.model + 1)%3
    	this.props.playerActions.savePlayData({
    		model: model
    	})
    	let list = null
    	if (model == playModel.random) {
    		list = shuffle(this.props.songs.sequenceList)
    	} else {
    		list = this.props.songs.sequenceList
    	}
    	this.props.songsActions.saveSongs({
			songList: list
		})
		this.resetCurrentIndex(list)
    }

    resetCurrentIndex(list) {
    	let index = list.findIndex((item)=>{
    		return item.id === this.props.songs.currentSong.id
    	})
    	if (index < 0) {return}
    	this.props.songsActions.saveSongs({
			currentIndex: index
		})
    }

    updateTime(e) {
    	this.setState({
    		currentTime: e.target.currentTime,
    		percent: e.target.currentTime/this.props.songs.currentSong.duration
    	})
    }

    percentChangeFn(percent) {
    	this.$audio.current.currentTime = this.props.songs.currentSong.duration * percent
    	if (!this.props.player.palyering) {
    		this.togglePalying()
    	}
    }

    format(interval) {
    	interval = interval | 0
    	const minute = interval/60 | 0
    	const second = this._pad(interval % 60)
    	return `${minute}:${second}`
    }

    _pad(num,n = 2) {
    	let len = num.toString().length
    	while(len < n) {
    		num = '0' + num
    		len++
    	}
    	return num
    }

    next(e) {
    	if(!this.state.songReady) {return}
    	let index = this.props.songs.currentIndex + 1 
    	if (index >= this.props.songs.songList.length) {
    		index = 0
    	}
    	this.props.songsActions.saveSongs({
    		currentIndex: index,
    		currentSong: this.props.songs.songList[index]
    	})
    	if (!this.props.player.palyering) {
    		this.togglePalying(e)
    	}
    	this.setState({
    		songReady: false
    	})
    }

    prev(e) {
    	if(!this.state.songReady) {return}
    	let index = this.props.songs.currentIndex - 1
    	if (index == -1) {
    		index = this.props.songs.songList.length-1
    	}	
    	this.props.songsActions.saveSongs({
    		currentIndex: index,
    		currentSong: this.props.songs.songList[index]
    	})
    	if (!this.props.player.palyering) {
    		this.togglePalying(e)
    	}
    	this.setState({
    		songReady: false
    	})
    }

    ready() {
    	this.setState({
    		songReady: true
    	})
    }

    error() {
    	this.setState({
    		songReady: true
    	})
    }

    watchPalying(oldval,newval) {
    	const audio = this.$audio.current
    	this.setState({
    		watchPlaying: newval
    	},()=>{
    		newval?audio.play():audio.pause()	
    	})
    }

    watchCurrentSong(oldval,newval) {
    	if(oldval.id === newval.id){return}
    	this.setState({
    		watchSong: newval
    	},()=>{
    		this.$audio.current.play()
    	})
    }

    togglePalying(e) {
    	if (e) {
    		e.stopPropagation()
    		e.preventDefault()
    	}
    	this.props.playerActions.savePlayData({
			palyering: !this.props.player.palyering
		})
        $('.play').toggleClass('hide')
        $('.pause').toggleClass('show')
    }

	quit() {
		this.props.playerActions.savePlayData({
			palyStatus: false,
			palyering: false,
			fullScreen: false
		})
	}
	
	back() {
		this.props.playerActions.savePlayData({
			fullScreen: false
		})
	}	

	enlarge() {
		this.props.playerActions.savePlayData({
			fullScreen: true
		})
	}

    dragStart(event) {
        let box = this.$fullPlayer.current
        event = event || window.event
        let pageX = event.pageX|| scroll().left + event.clientX
        let pageY = event.pageY|| scroll().top + event.clientY
        let mouseX = pageX - box.offsetLeft
        let mouseY = pageY - box.offsetTop
        document.onmousemove = function (event) {
            event = event || window.event
            let pageX = event.pageX|| scroll().left + clientX
            let pageY = event.pageY|| scroll().top+event.clientY
            pageX = pageX-mouseX
            pageY = pageY-mouseY
            box.style.left = pageX + 'px'
            box.style.top  = pageY + 'px'
            window.getSelection 
            ?window.getSelection().removeAllRanges()
            :document.selection.empty();
        }
    }

    dragEnd(event) {
        document.onmousemove = null
    }

	render() {

		let player = null
		if (this.props.player.fullScreen) {
			player = (<div className="full-player" ref={this.$fullPlayer}>
							<div className="full-wrap" 
                                onMouseDown={this.dragStart.bind(this)}
                                onMouseUp={this.dragEnd.bind(this)}>
                                <div className="background">
                                    <img alt="" src={global.musicCoverPrefix+this.props.songs.currentSong.cover}/>
                                </div>
                                <div className="infos">
                                    <div className="songStyle">
                                        <i className="fa fa-music"></i>
                                        <span title={this.props.songs.currentSong.songName}>{this.props.songs.currentSong.songName}</span>
                                    </div>
                                    <div className="timeStyle">
                                        <span>{this.format(this.state.currentTime)} / {this.format(this.props.songs.currentSong.duration)}</span>
                                        <i className="fa fa-clock-o"></i>
                                    </div>
                                    <div className="artiststyle clearfix">
                                        <i className="fa fa-user"></i>
                                        <span className="artist">
                                            <span>{this.props.songs.currentSong.singer}</span>
                                        </span>
                                        <span className="moshi">
                                            {
                                                this.props.player.model==playModel.sequence
                                                ?(<React.Fragment>
                                                    <span>顺序播放</span><i className="fa fa-retweet"></i>
                                                  </React.Fragment>)
                                                :this.props.player.model==playModel.loop
                                                ?(<React.Fragment>
                                                    <span>单曲循环</span><i className="fa fa-refresh"></i>
                                                  </React.Fragment>)
                                                :(<React.Fragment>
                                                    <span>随机播放</span><i className="fa fa-random"></i>
                                                  </React.Fragment>)
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="control">
                                    <i  title="切换模式" onClick={this.changeModel.bind(this)} 
                                        className={(this.props.player.model==playModel.sequence?'fa fa-retweet':
                                                        this.props.player.model==playModel.loop?'fa fa-refresh':'fa fa-random')+' palytype current'}></i>
                                    <i className="prev fa fa-backward" title="上一首" onClick={this.prev.bind(this)}></i>
                                    <div className="status">
                                        <b>
                                            <i className="pause fa fa-pause" title="暂停" onClick={this.togglePalying.bind(this)}></i>
                                            <i className="play fa fa-play" title="播放" onClick={this.togglePalying.bind(this)}></i>
                                        </b>
                                    </div>
                                    <i className="next fa fa-forward" title="下一首" onClick={this.next.bind(this)}></i>
                                    <i className="search fa fa-search" title="搜索歌曲"></i>
                                </div>
                                <div className="bottom cleafix">
                                    <div className="palyer-progress">
                                        <ProgressBar percent={this.state.percent} percentChangeFn={this.percentChangeFn.bind(this)}/>
                                    </div>
                                </div>
                                <div className={this.props.player.palyering?'cover play':'cover play pause'}>
                                    <img src={global.musicCoverPrefix+this.props.songs.currentSong.cover}/>
                                </div>
							</div>
                            <div className="switch-palyer">
                                <div className="switch-control">
                                    <i className="fa fa-angle-down" onClick={this.back.bind(this)}></i>
                                </div>
                                <div className="switch-control">
                                     <i className="fa fa-close" onClick={this.quit.bind(this)}></i>
                                </div>
                            </div>
						</div>)
		} else if (!this.props.player.fullScreen) {
			player = (<div className="mini-player" onClick={this.enlarge.bind(this)}>
							<div className="mini-wrap">
								<div className="left">
									<div className={this.props.player.palyering?'cd play':'cd play pause'}>
										<img alt="" src={global.musicCoverPrefix+this.props.songs.currentSong.cover}/>
									</div>
									<div className="info">
										<h3>{this.props.songs.currentSong.songName}</h3>
										<p>{this.props.songs.currentSong.singer}</p>
									</div>
								</div>
								<div className="right">
									<div className="control" onClick={this.togglePalying.bind(this)}>
										<ProgressCircle radius={32} percent={this.state.percent}>
											<i className={(this.props.player.palyering?'fa fa-pause':'fa fa-play')+' icon-mini'}></i>
										</ProgressCircle>
									</div>
									<div className="control">
										<i className="fa fa-outdent"></i>
									</div>
								</div>
							</div>
					  </div>)

		}
		return (
			<div className="Player">
				{ player }
				<audio ref={this.$audio} src={global.musicResourcePrefix+this.props.songs.currentSong.url} 
					onCanPlay={this.ready.bind(this)} onError={this.error.bind(this)}
					onTimeUpdate={this.updateTime.bind(this)}
					onEnded={this.end.bind(this)}/>
        	</div>
        )
	}
}

function mapStateToProps(state) {
    return {
       player: state.player,
       songs: state.songs
    }
}
function mapDispatchToProps(dispatch) {
    return {
        songsActions: bindActionCreators(songsActions, dispatch),
        playerActions: bindActionCreators(playerActions, dispatch)
    }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Player)
)

/*(<div className="full-player">
                            <div className="background"></div>
                            <div className="full-wrap">
                                <div className="top">
                                    <div className="top-wrap">
                                        <div className="quit" onClick={this.quit.bind(this)}><i className="fa fa-close"></i></div>
                                        <div className="info">
                                            <h3>{this.props.songs.currentSong.songName}</h3>
                                            <p>{this.props.songs.currentSong.singer}</p>
                                        </div>
                                        <div className="back" onClick={this.back.bind(this)}><i className="fa fa-angle-down"></i></div>
                                    </div>
                                </div>
                                <div className="middle">
                                    <div className="cd-wrap">
                                        <div className={this.props.player.palyering?'cd play':'cd play pause'}><img alt="" src={global.musicCoverPrefix+this.props.songs.currentSong.cover}/></div>
                                    </div>
                                </div>
                                <div className="Progress">
                                    <span className="time time-l">{this.format(this.state.currentTime)}</span>
                                    <div className="progress-bar-wrapper">
                                        <ProgressBar percent={this.state.percent} percentChangeFn={this.percentChangeFn.bind(this)}/>
                                    </div>
                                    <span className="time time-r">{this.format(this.props.songs.currentSong.duration)}</span>
                                </div>
                                <div className="bottom">
                                    <div className="icon-wrap">
                                        <div><i onClick={this.changeModel.bind(this)} className={this.props.player.model==playModel.sequence?'fa fa-exchange':
                                                        this.props.player.model==playModel.loop?'fa fa-refresh':'fa fa-random'}></i></div>
                                        <div><i className={this.state.songReady?'fa fa-step-backward':'fa fa-step-backward disable'} onClick={this.prev.bind(this)}></i></div>
                                        <div><i className={(this.props.player.palyering?'fa fa-pause':'fa fa-play')+(this.state.songReady?'':' disable')} onClick={this.togglePalying.bind(this)}></i></div>
                                        <div><i className={this.state.songReady?'fa fa-step-forward':'fa fa-step-forward disable'} onClick={this.next.bind(this)}></i></div>
                                        <div><i className="fa fa-outdent"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>)*/