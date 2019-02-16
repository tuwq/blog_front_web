import React from 'react';
import { Route,Switch,Redirect  } from 'react-router-dom';

import ArticleTag from '@/pages/ArticleTag/ArticleTag'
import ArticleTagDetail from '@/pages/ArticleTagDetail/ArticleTagDetail'

class ArticleTagRouter extends React.Component {
    render() {
        return (
            <Switch>
            	<Route exact path="/articletag" component={ArticleTag} />
            	<Route exact path="/articletag/:id" component={ArticleTagDetail} />
            </Switch>
        )
    }
}

export default ArticleTagRouter
