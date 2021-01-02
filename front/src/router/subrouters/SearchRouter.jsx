import React from 'react';
import { Route,Switch,Redirect  } from 'react-router-dom';

import Search from '@/pages/Search/Search'
import NotFound from '@/pages/NotFound/NotFound'


class SearchRouter extends React.Component {
    render() {
        return (
            <Switch>
            	<Route exact path="/search" component={Search} />
        		<Redirect from="/search/*" to="/notFound" />
            </Switch>
        )
    }
}

export default SearchRouter
