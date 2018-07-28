import * as types from '../store/mutation-types'
import store from 'store/main.js'
import axios from 'axios'
import router from './index'
import * as CONSTANT_CODE from 'api/constant/resultCode'
import { _set,_get,_remove } from 'base/js/cookie'
// 每次请求携带LOGIN_TOKEN
axios.interceptors.request.use(
    config => {
        if (_get('_TOKEN_')) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers._TOKEN_  = _get('_TOKEN_');
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
    	if ( response.data.code == CONSTANT_CODE.TOKEN_MATURITY_LOGIN || response.data.code == CONSTANT_CODE.TOKEN_NOTUSER ) {
    		_remove('_TOKEN_')
            store.commit(types.SET_NOW_USER_INFO,undefined)
            router.replace({
              path: '/login',
              query: {redirect: router.currentRoute.fullPath}
            })
    	} else if (response.data.code == CONSTANT_CODE.TOKEN_MATURITY) {
            _remove('_TOKEN_')
            store.commit(types.SET_NOW_USER_INFO,undefined)
        }
        return response;
    },
    err => {
    	return Promise.reject(err);
    }
);