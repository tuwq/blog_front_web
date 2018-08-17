<template>
  <div class="FirendItem" @click.stop.prevent="goEdit">
      <span>{{item.nickname}}</span>
      <span class="image">
        <img alt="" width="100" height="100" alt="" :src="avatarPrefix+item.avatar+'?v='+new Date().getTime()"/>
        <button @click.stop="chooseAvatar">更换图片</button>
        <input type="file" ref="$fileInput"/>
      </span>
      <span style="font-size: 12px;">{{item.desc}}</span>
      <span style="font-size: 12px;">{{item.website}}</span>
      <span @click.stop><input class="opearcheck" @click.stop type="checkbox" :value="item.id"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  import { updateAvatarApi } from 'api/Firend/firend'
  export default {  
    props: {
      item: {
        type: Object,
        default: null
      },
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        avatarPrefix: global.firendAvatarimgUrl
      }
    },
    mounted() {
      $(this.$refs.$fileInput).on('change',()=>{
        this.updateAvatar()
      })
    },
    destroyed() {
      $(this.$refs.$fileInput).off('change')
    },
    methods: {
      goEdit() {
        this.$router.push('/firend/edit/'+this.item.id)
      },
      chooseAvatar() {
        this.$refs.$fileInput.click()
      },
      updateAvatar() {
        var file = this.$refs.$fileInput.files[0]
        var formdata = new FormData()
        formdata.append('file',file)
        formdata.append("id", this.item.id)
        updateAvatarApi(formdata,(res)=>{
           if(res.data.code == 200) {
             this.item.avatar = res.data.result
           }
        })
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./FirendItem.scss";
</style>
