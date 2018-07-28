<template>
  <div class="ArticleItem" @click.stop.prevent="toArticle">
      <span>{{item.title}}</span>
      <span>{{item.categoryName}}</span>
      <span>{{item.commentSum||0}}</span>
      <span>{{item.createTimeString}}</span>
      <span>{{item.updateTimeString}}</span>
      <span>{{item.status}}</span>
      <span @click.stop>{{item.operatorerName}}</span>
      <span @click.stop><input class="opearcheck" @click.stop type="checkbox" :value="item.id"></span>
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
    },
    methods: {
      toArticle() {
        this.$router.push('/article/edit/'+this.item.id)
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./ArticleItem.scss";
  @import "./MArticleItem.scss";
</style>
