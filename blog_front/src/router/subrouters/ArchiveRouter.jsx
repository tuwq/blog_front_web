import React from 'react';
import { Route,Switch,Redirect  } from 'react-router-dom';

import Archive from '@/pages/Archive/Archive'

class ArchiveRouter extends React.Component {
    render() {
        return (
            <Switch>
            	<Route exact path="/archive" component={Archive} />
            </Switch>
        )
    }
}

export default ArchiveRouter
