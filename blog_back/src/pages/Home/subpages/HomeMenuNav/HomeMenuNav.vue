<template>
  <div id="HomeMenuNav" class="HomeMenuNav">
     <div class="nav-wrap">
        <div class="title"><h3>内容管理</h3></div>
        <ul class="nav-list">
          <li class="nav-control current"><a @click.stop.prevent="updateNavType(1,$event)"><i class="fa fa-bar-chart-o"></i>
            <span>数据统计</span></a>    
          </li>
          <li class="nav-control"><a @click.stop.prevent="updateNavType(2,$event)"><i class="fa fa-pencil"></i>
            <span>文章管理</span></a>
            <ul class="menu-group">
              <li class="current" @click.stop.prevent="showArticle">文章列表</li>
              <li @click.stop.prevent="addArticle">新增文章</li>
            </ul>
          </li>
          <li class="nav-control"><a @click.stop.prevent="updateNavType(3,$event)"><i class="fa fa-commenting"></i>
            <span>评论管理</span></a>
            <ul class="menu-group">
              <li @click.stop.prevent="showComments">评论列表</li>
            </ul>
          </li>
          <li class="nav-control"><a @click.stop.prevent="updateNavType(4,$event)"><i class="fa fa-user"></i>
            <span>用户管理</span></a>
            <ul class="menu-group">
              <li @click.stop.prevent="showUserManage">用户列表</li>
            </ul>
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
      showArticle(e) {
        $(e.target).addClass('current').siblings().removeClass('current')
        this.$router.replace('/article')
      },
      showComments(e) {
         $(e.target).addClass('current').siblings().removeClass('current')
         this.$router.replace('/comment')
      },
      showUserManage(e) {
         $(e.target).addClass('current').siblings().removeClass('current')
         this.$router.replace('/userManage')
      },
      addArticle(e) {
        $(e.target).addClass('current').siblings().removeClass('current')
        this.$router.replace('/article/add')
      },
      updateNavType(type,e) {
        $('.menu-group').removeClass('show')
        $(e.target).parents('.nav-control').find('.menu-group').toggleClass('show')
        $(e.target).parents('.nav-control').addClass('current').siblings().removeClass('current')
        let pageName = type==1?'':type==2?'article':type==3?'comment':'userManage'
        this.$router.replace('/' + pageName)
      }
     }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import "./HomeMenuNav.scss";
  @import "./MHomeMenuNav.scss";
</style>
