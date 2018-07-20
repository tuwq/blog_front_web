import React from 'react';
import { Route,Switch  } from 'react-router-dom';

import Search from '@/pages/Search/Search'
import NotFound from '@/pages/NotFound/NotFound'


class SearchRouter extends React.Component {
    render() {
        return (
            <Switch>
            	<Route exact path="/search" component={NotFound} />
        		<Route exact path="/search/:keyword" component={Search} />
        		<Route path="/search/*" component={NotFound} />
            </Switch>
        )
    }
}

export default SearchRouter
