<template>
  <div id="ImgConfig" class="ImgConfig">
      <div class="wrap">
      	<div class="data-list-wrapper">
      		<ul class="meta">
      			<li><span>描述</span></li>
            <li><span>图片</span></li>
      			<li><span>图片地址</span></li>
      			<li><span>更新时间</span></li>
      		</ul>
      	</div>
      	<ImgConfigList v-if="data" :data="data"/>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ImgConfigList from './subpages/ImgConfigList/ImgConfigList'
  import { getConfigImgApi } from 'api/Config/config'
  export default {  
    components: {
    	ImgConfigList
    },
    data(){
      return {
        data: []
      }
    },
    created() {
      this.initData()
    },
    methods: {
      initData() {
        getConfigImgApi((res)=>{
          if (res.data.code == 200) {
            this.data = res.data.result
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./ImgConfig.scss"
</style>
