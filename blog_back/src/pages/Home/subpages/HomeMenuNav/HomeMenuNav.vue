<template>
  <div id="HomeMenuNav" class="HomeMenuNav">
     <div class="nav-wrap">
        <div class="title"><h3>内容管理</h3></div>
        <ul class="nav-list">
          <li class="nav-control current"><a @click="updateNavType(1,$event)"><i class="fa fa-bar-chart-o"></i>
            <span>数据统计</span></a>
          </li>
          <li class="nav-control"><a @click="updateNavType(2,$event)"><i class="fa fa-pencil"></i>
            <span>填写文章</span></a>
          </li>
          <li class="nav-control"><a @click="updateNavType(3,$event)" ><i class="fa fa-cubes"></i>
            <span>管理评论</span></a>
          </li>
        </ul>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {  
     created() {
     	
     },
     methods: {
      updateNavType(type,e) {
        $(e.target).parents('.nav-control').addClass('current').siblings().removeClass('current')
      }
     }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "./HomeMenuNav.scss";
  @import "./MHomeMenuNav.scss";
</style>
