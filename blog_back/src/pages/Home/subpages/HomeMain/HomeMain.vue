<template>
  <div id="HomeMain" class="HomeMain">
     <HomeMenuNav />
     <HomeContent />
  </div>
</template>

<script type="text/ecmascript-6">
import HomeMenuNav from '../HomeMenuNav/HomeMenuNav'
import HomeContent from '../HomeContent/HomeContent'
  export default {  
     created() {
     	
     },
     components: {
       HomeMenuNav,
       HomeContent
     }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "./HomeMain.scss";
  @import "./MHomeMain.scss";
</style>
