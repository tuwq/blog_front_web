<template>
  <div id="ImgConfigList" class="ImgConfigList">
      <ImgConfigItem v-for="(item,index) in data" :key="item.id" :item="item" :index="index"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import ImgConfigItem from '../ImgConfigItem/ImgConfigItem'
  export default {  
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        
      }
    },
    created() {
     
    },
    methods: {
      
    },
    components: {
       ImgConfigItem
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./ImgConfigList.scss";
</style>
