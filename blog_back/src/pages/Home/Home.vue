<template>
  <div id="Home" class="Home">
     <HomeHeader />
     <HomeMain />
  </div>
</template>

<script type="text/ecmascript-6">
  import HomeHeader from './subpages/HomeHeader/HomeHeader'
  import HomeMain from './subpages/HomeMain/HomeMain'
  export default {  
     created() {
     	
     },
     components: {
     	HomeHeader,
     	HomeMain
     }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./Home.scss";
</style>
