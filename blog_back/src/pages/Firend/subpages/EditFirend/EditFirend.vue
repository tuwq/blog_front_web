<template>
  <div class="EditFirend">
    <div class="wrap">
      <div class="inner">
        <div class="form">
          <div class="form-control">
            <span style="color: #d55050;">{{error}}</span>
          </div>
          <div class="form-control">
            <input type="text" placeholder="昵称" v-model="nickname"/>
          </div>
          <div class="form-control">
            <span class="image" @click="chooseAvatar">
              上传头像
              <img ref="$avatarImg" width="60" height="60" alt="" :src="avatar"/>
              <input type="file" ref="$fileInput" style="display: none;"/>
            </span>
          </div>
          <div class="form-control">
            <input type="text" placeholder="网站" v-model="website"/>
          </div>
          <div class="form-control">
            <input type="text" placeholder="描述" v-model="desc"/>
          </div>
           <div class="form-control">
           <button @click.stop="finish">修改完成</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getFirendInfoApi,EditFirendApi,updateAvatarApi } from 'api/Firend/firend'
  import { isNumber } from 'base/js/check'
  import * as RESULT_CODE from 'api/constant/resultCode'
  export default {
    created() {
      this.initData(this.$route.params.id)
    },
    data() {
      return {
        nickname: '',
        website: '',
        desc: '',
        avatar: '',
        error: ''
      }
    },
    mounted() {
      $(this.$refs.$fileInput).on('change',()=>{
        this.uploadAvatar()
      })
    },
    destroyed() {
      $(this.$refs.$fileInput).off('change')
    },
    methods: {
      initData(id) {
        if (!isNumber(id)) {
          this.error = 'id非数字'
          return
        } 
        getFirendInfoApi(id,(res)=>{
          if (res.data.code == 200) {
            this.nickname = res.data.result.nickname
            this.website = res.data.result.website
            this.desc = res.data.result.desc
            this.avatar = global.firendAvatarimgUrl + res.data.result.avatar+'?v='+new Date().getTime()
          }
        })
      },
    	finish() {
        EditFirendApi(this.$route.params.id,this,(res)=>{
          if (res.data.code == 200) {
            this.error = '修改成功'
          }
        })
      },
      chooseAvatar() {
       this.$refs.$fileInput.click()
      },
      uploadAvatar() {
         let file = this.$refs.$fileInput.files[0]
         if (file == undefined) { return }
         var formdata = new FormData()
         formdata.append('file',file)
         formdata.append("id", this.$route.params.id)
         updateAvatarApi(formdata,(res)=>{
           if(res.data.code == 200) {
             this.avatar = global.firendAvatarimgUrl + res.data.result+'?v='+new Date().getTime()
           }
         })
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "./EditFirend.scss";
</style>
