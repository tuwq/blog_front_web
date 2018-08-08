<template>
  <div class="ImgConfigItem">
      <span>{{item.desc}}</span>
      <span class="image">
        <img alt="" width="100" height="100" :src="item.img"/>
        <button @click.stop="updateButton">更换图片</button>
        <input type="file" ref="$fileInput"/>
      </span>
      <span style="font-size: 12px;">{{item.img}}</span>
      <span>{{item.updateTimeString}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import { updateConfigImgApi } from 'api/Config/config'
  export default {  
    props: {
      item: {
        type: Object,
        default: {}
      },
      index: {
        type: Number,
        default: 0
      }
    },
    mounted() {
      $(this.$refs.$fileInput).on('change',()=>{
        this.updateImg()
      })  
    },
    methods: {
      updateImg() {
        var file = $(this.$refs.$fileInput)[0].files[0]
        var formdata = new FormData()
        formdata.append('file',file)
        formdata.append("id", this.item.id)
        updateConfigImgApi(formdata,(res)=>{
           if(res.data.code == 200) {
             this.item.img = res.data.result
           }
        })
      },
      updateButton() {
        $(this.$refs.$fileInput).click()
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./ImgConfigItem.scss";
</style>
