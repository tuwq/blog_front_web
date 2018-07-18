import React from 'react';
import { Route,Switch  } from 'react-router-dom';

import Search from '@/pages/Search/Search'


class SearchRouter extends React.Component {
    render() {
        return (
            <Switch>
        		<Route exact path="/search/:keyword" component={Search} />
            </Switch>
        )
    }
}

export default SearchRouter
