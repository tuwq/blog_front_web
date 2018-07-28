<template>
  <div id="Login" class="Login">
      <div class="login-wrap">
      	<div class="form">
      		<form>
      			<div class="form-group">
      				<div class="form-control">
      					<h2>后台登录</h2>
                        <span style="color: red;" ref="errormessage"></span>
      				</div>
      				<div class="form-control">
      					<input type="text" placeholder="用户名" v-model="username"/>
      				</div>
      				<div class="form-control">
      					<input type="text" placeholder="密码" v-model="password"/>
      				</div>
      				<div class="form-control">
      					<button @click.stop.prevent="login">登录</button>
      				</div>
      				<div class="form-control lr">
      					<span>立即注册</span>
      					<span>忘记密码?</span>
      				</div>
      			</div>
      		</form>
      	</div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { checkLogin } from 'base/js/check'
  import { loginApi } from 'api/Login/login'
  import {mapMutations} from 'vuex'
  import { _set,_remove } from 'base/js/cookie'
  export default {  
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        if (checkLogin(this.username,this.password)) {  
          loginApi(this.username,this.password,(res)=>{
             if(res.data.code < 400) {
                // 存放用户信息和LOGIN_TOKEN,跳转首页
                _set('_TOKEN_',res.data.result.token,{ expires: global.TOKEN_TIME_DAY })
                this.setNowUserInfo(res.data.result.sysUser)
                this.$router.replace('/')
             } else {
                this.$refs.errormessage.innerText = res.data.msg
             } 
          })
        }
      },
      ...mapMutations({
        setNowUserInfo: 'SET_NOW_USER_INFO'
      }),
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./Login.scss";
  @import "./MLogin.scss";
</style>
