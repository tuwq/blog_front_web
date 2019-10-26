<template>
  <div class="AddFirend">
    <div class="wrap">
      <div class="inner">
        <div class="form">
          <div class="form-control">
            <span style="color: #d55050;">{{error}}</span>
          </div>
          <div class="form-control">
            <input type="text" placeholder="昵称" v-model="nickname"/>
          </div>
          <!-- <div class="form-control">
            <span class="image" @click="chooseAvatar">
              上传头像
              <img ref="$avatarImg" width="60" height="60" alt="" src=""/>
              <input type="file" ref="$fileInput" style="display: none;"/>
            </span>
          </div> -->
          <div class="form-control">
            <input type="text" placeholder="头像地址" v-model="avatarSite"/>
          </div>
          <div class="form-control">
            <input type="text" placeholder="网站" v-model="website"/>
          </div>
          <div class="form-control">
            <input type="text" placeholder="描述" v-model="desc"/>
          </div>
           <div class="form-control">
           <button @click.stop="finish">添加</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { addFirendApi } from 'api/Firend/firend'
  import * as RESULT_CODE from 'api/constant/resultCode'
  export default {
    created() {
    	
    },
    mounted() {
      // $(this.$refs.$fileInput).on('change',()=>{
      //   this.uploadAvatar()
      // })
    },
    destroyed() {
      // $(this.$refs.$fileInput).off('change')
    },
    data() {
      return {
        nickname: '',
        avatarSite: '',
        website: '',
        desc: '',
        error: ''
      }
    },
    methods: {
    	finish() {
        addFirendApi(this, (res)=>{
          if (res.data.code == 200) {
            this.nickname = ''
            this.avatarSite = ''
            this.website = ''
            this.desc = ''
            this.error = '添加成功'
          }
        })
        // let file = this.$refs.$fileInput.files[0]
        // var formdata = new FormData()
        // formdata.append('file',file)
        // formdata.append("nickname", this.nickname)
        // formdata.append("website", this.website)
        // formdata.append("desc", this.desc)
        // addFirendApi(formdata,(res)=>{
        //    if (res.data.code == 200) {
        //     this.nickname = ''
        //     this.website = ''
        //     this.desc = ''
        //     this.error = '上传成功'
        //    } else if(res.data.code == RESULT_CODE.PARAM_ERROR_CODE || res.data.code == RESULT_CODE.FILE_UPLOAD_FAIL){
        //     this.error = res.data.msg
        //    }
        // })
      },
      chooseAvatar() {
        this.$refs.$fileInput.click()
      },
      uploadAvatar() {
        let file = this.$refs.$fileInput.files[0]
        if (file == undefined) { return }
        var freader = new FileReader();  
        freader.readAsDataURL(file);  
        var self = this
        freader.onload = function(e) {  
          $(self.$refs.$avatarImg).attr("src",e.target.result);  
        };
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "./AddFirend.scss";
</style>
