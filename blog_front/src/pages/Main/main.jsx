import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import axios from 'axios'

import './style/main.less'

class Main extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		this.send()
	}
	send() {
		axios.get('/test/get',{
			params: {
				id: 1
			}
		}).then((res)=>{
			console.log(res.data)
		})
		axios.post('/test/post',{
			id: 2,
			name: 'name',
		}).then((res)=>{
			console.log(res.data)
		})
		axios.put('/test/put',{
			id: 3
		}).then((res)=>{
			console.log(res.data)
		})
		axios.delete('/test/del',{
			data: {
				id: 4
			}
		}).then((res)=>{
			console.log(res.data)
		})
	}
	render() {
		return (
			<div id="Main">
				Main
			</div>
		)
	}
}

export default Main

