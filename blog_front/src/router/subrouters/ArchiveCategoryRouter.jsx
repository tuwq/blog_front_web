import React from 'react';
import { Route,Switch,Redirect  } from 'react-router-dom';

import ArchiveCategory from '@/pages/ArchiveCategory/ArchiveCategory'

class ArchiveCategoryRouter extends React.Component {
    render() {
        return (
            <Switch>
            	<Route exact path="/archiveCategory" component={ArchiveCategory} />
            </Switch>
        )
    }
}

export default ArchiveCategoryRouter
