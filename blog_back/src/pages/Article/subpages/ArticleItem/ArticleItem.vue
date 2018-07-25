<template>
  <div class="ArticleItem">
      <span>{{item.title}}</span>
      <span>{{item.categoryName}}</span>
      <span>{{item.commentSum||0}}</span>
      <span>{{item.createTimeString}}</span>
      <span>{{item.updateTimeString}}</span>
      <span>{{item.status}}</span>
      <span>{{item.operatorerName}}</span>
      <span><input class="opearcheck" type="checkbox" :value="item.id"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  import moment from 'moment'
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
