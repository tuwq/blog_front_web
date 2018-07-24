import * as types from '../store/mutation-types'
import store from 'store/main.js'
import axios from 'axios'
import router from './index'
import * as CONSTANT_CODE from 'api/constant/resultCode'
// 每次请求携带LOGIN_TOKEN
axios.interceptors.request.use(
    config => {
        if (store.state.login_token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.login_token  = `${store.state.login_token}`;
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
    		store.commit(types.REMOVE_LOGIN_TOKEN)
            router.replace({
              path: '/login',
              query: {redirect: router.currentRoute.fullPath}
            })
    	} else if (response.data.code == CONSTANT_CODE.TOKEN_MATURITY) {
            store.commit(types.REMOVE_LOGIN_TOKEN)
        }
        return response;
    },
    err => {
    	return Promise.reject(err);
    }
);