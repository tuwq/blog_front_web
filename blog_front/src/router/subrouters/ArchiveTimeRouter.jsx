import React from 'react';
import { Route,Switch,Redirect  } from 'react-router-dom';

import ArchiveTime from '@/pages/ArchiveTime/ArchiveTime'

class ArchiveTimeRouter extends React.Component {
    render() {
        return (
            <Switch>
            	<Route exact path="/archiveTime" component={ArchiveTime} />
            </Switch>
        )
    }
}

export default ArchiveTimeRouter
