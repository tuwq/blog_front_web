import React from 'react';
import { Route,Switch  } from 'react-router-dom';

import Article from '@/pages/Article/Article'
import NotFound from '@/pages/NotFound/NotFound'


class ArticleRouter extends React.Component {
    render() {
        return (
            <Switch>
            	<Route exact path="/article" component={NotFound}/>
        		<Route exact path="/article/:id" component={Article} />
        		<Route path="/article/*" component={NotFound}/>
            </Switch>
        )
    }
}

export default ArticleRouter
