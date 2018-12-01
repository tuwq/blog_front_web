import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import ReactSwipe from 'react-swipe'

import './HomeReactSwipe.less'
import './MHomeReactSwipe.less'

class HomeReactSwipe extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
         index: 0
      }
	}

	componentDidMount() {

	}
	
	componentWillUnmount() {
		
	}

	render() {
      var opt = {
         auto: 1000,
         callback: function(index) {
             this.setState({
                 index: index
             })
         }.bind(this),
         continuous: true
     }

		return (
         	<div id="HomeReactSwipe" className="HomeReactSwipe" ref={this.silder}>
               <ReactSwipe
                  className="carousel"
                  swipeOptions={ opt }
                >
                  <div>PANE 1</div>
                  <div>PANE 2</div>
                </ReactSwipe>
         	</div>
        )
	}

}

export default withRouter(HomeReactSwipe)

/*
<div className="carousel-item">
   <img src="http://img.twenq.com/upload/config/img/98500b4b6c1a8a6738b4f2bf836a29c7.jpg?v=1533793915422" alt="" width="100%" height="100%"/>
</div>
<div className="carousel-item">
   <img src="http://img.twenq.com/upload/config/img/a693a08ebae745a8726b3dac591830e2.jpg?v=1533793959353" alt="" width="100%" height="100%"/>
</div>
<div className="carousel-item">
   <img src="http://img.twenq.com/upload/config/img/e89e63c82505b9b9316db45b961860b8.jpg?v=1533793831849" alt="" width="100%" height="100%"/>
</div>

*/

