import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './InformationCard.less'
import './MInformationCard.less'

class InformationCard extends React.Component {

        constructor(props,context) {
                super(props,context)
                this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
                
        }

        componentDidMount() {
                
        }

        render() {
            return (
                <div className="InformationCard">
                    card
                </div>
            )
        }
}

export default withRouter(InformationCard)


