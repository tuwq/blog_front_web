import axios from 'axios'
import * as RESULT_CODE from 'api/Constant/resultCode'
import { _getToken,_removeToken } from 'base/js/cookie'
import * as userActions from '@/store/actions/user'
import {createBrowserHistory, createHashHistory} from 'history'
import PubSub from 'pubsub-js'

axios.defaults.withCredentials = true;
// 每次请求携带securityToken
axios.interceptors.request.use(
    config => {
        if (_getToken()) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.securityToken = _getToken();
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// 每次检查TOKEN过期
axios.interceptors.response.use(
    response => {
    	if ( response.data.code == RESULT_CODE.TOKEN_TOLOGIN 
            || response.data.code == RESULT_CODE.TOKEN_NOTUSER
            || response.data.code == RESULT_CODE.TOKEN_REDIS_NOT_MATCH ) {
    		// 删除token和用户信息
            // 跳转登录
            global.store.dispatch(userActions.save(undefined))
            _removeToken()
            PubSub.publish(global.rediectLoginSubscribe,createBrowserHistory().location.pathname);         
    	} else if (response.data.code == RESULT_CODE.TOKEN_MATURITY) {
            // 删除token和用户信息
            global.store.dispatch(userActions.save(undefined))
            _removeToken()
        } else if (response.data.code == RESULT_CODE.ITEM_NOT_FOUND) {
            createBrowserHistory().replace('/notFound')
        }
        return response;
    },
    err => {
    	return Promise.reject(err);
    }
);