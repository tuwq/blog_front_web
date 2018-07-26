<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import '@/lib/jquery/jquery-3.3.1.min.js'
  import 'highlight/lib/vendor/highlight.js/styles/dark.css'
  import { getUserInfoApi } from 'api/User/user'
  import {mapMutations} from 'vuex';
  
  

  export default {
    created() {
    	getUserInfoApi((res)=>{
    		this.setNowUserInfo(res.data.result)
    	})
    },
    methods: {
    	...mapMutations({
	        setNowUserInfo: 'SET_NOW_USER_INFO'
     	}),
    }
  }
</script>

<style lang="scss" type="text/scss">
 
</style>
