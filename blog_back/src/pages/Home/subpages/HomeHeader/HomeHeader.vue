<template>
  <div id="HomeHeader" class="HomeHeader">
  	<div class="leftIcon">
  		<div class="icon-group">
	  		<a class="icon-control" @click="openNav"><i class="fa fa-list"></i></a>
	  		<a class="icon-control"><i class="fa fa-refresh"></i></a>
	  		<a class="icon-control"><i class="fa fa-search"></i></a>
  		</div>
  	</div>
  	<div class="rightIcon">
  		<div class="icon-group">
	  		<a class="icon-control"><i class="fa fa-tasks"></i><span class="label label-transparent-black">2</span></a>
	  		<a class="icon-control"><i class="fa fa-envelope"></i><span class="label label-transparent-black">2</span></a>
	  		<a class="icon-control"><i class="fa fa-bell"></i><span class="label label-transparent-black">2</span></a>
	  	</div>
  	</div>
  	<div class="user">
      <router-link to="/login" class="login" v-if="!now_user_info">登陆</router-link>
  		<a class="avatar" @click.stop.prevent="menu" v-if="now_user_info"><img width="45" height="45" alt="" 
        :src="faceUrl+now_user_info.avatar"/></a>
  		<a class="name"  @click.stop.prevent="menu" v-if="now_user_info">{{now_user_info.username}}</a>
      <ul class="user-menu" ref="user_menu">
        <li><a @click.stop.prevent="quitLogin">退出登陆</a></li>
      </ul>
  	</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations,mapGetters} from 'vuex';
  import { quitLoginApi } from 'api/Login/login'
  
  export default {  
     data() {
       return {
         faceUrl: global.faceUrl
       }
     },
     methods: {
      openNav() {
        $('#HomeMenuNav').toggleClass('open')
       },
       menu() {
        $(this.$refs.user_menu).toggle()
       },
       quitLogin() {
         quitLoginApi((res)=>{
           // 删除存储的用户信息和LOGIN_TOKEN
           this.setNowUserInfo(undefined)
           this.removeLoginToken()
           this.menu()
         }) 
       },
       ...mapMutations({
          removeLoginToken: 'REMOVE_LOGIN_TOKEN',
          setNowUserInfo: 'SET_NOW_USER_INFO'
        }),
     },
    computed: {
      ...mapGetters([
        'now_user_info',
      ])
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" type="text/css">
  @import "./HomeHeader.scss";
  @import "./MHomeHeader.scss";
</style>
