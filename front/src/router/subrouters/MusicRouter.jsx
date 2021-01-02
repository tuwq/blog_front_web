import React from 'react';
import { Route,Switch,Redirect  } from 'react-router-dom';

import Music from '@/pages/Music/Music'

class MusicRouter extends React.Component {
    render() {
        return (
            <Switch>
            	<Route exact path="/music" component={Music} />
            </Switch>
        )
    }
}

export default MusicRouter
