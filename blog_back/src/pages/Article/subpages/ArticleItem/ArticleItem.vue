<template>
  <div class="ArticleItem">
      <span>{{item.title}}</span>
      <span>{{item.commentSum||0}}</span>
      <span>{{item.createTime}}</span>
      <span>{{item.updateTime}}</span>
      <span>{{item.status}}</span>
      <span>{{item.userId}}</span>
      <span><input type="checkbox"></span>
  </div>
</template>

<script type="text/ecmascript-6">
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
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./ArticleItem.scss";
  @import "./MArticleItem.scss";
</style>
