import React from 'react';
import { Route,Switch,Redirect  } from 'react-router-dom';

import ArchiveTag from '@/pages/ArchiveTag/ArchiveTag'
import ArchiveTagDetail from '@/pages/ArchiveTagDetail/ArchiveTagDetail'

class ArchiveTagRouter extends React.Component {
    render() {
        return (
            <Switch>
            	<Route exact path="/archiveTag" component={ArchiveTag} />
            	<Route exact path="/archiveTag/:id" component={ArchiveTagDetail} />
            </Switch>
        )
    }
}

export default ArchiveTagRouter
