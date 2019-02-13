<template>
  <div class="CommentItem">
      <span>{{item.article.title}}</span>
      <span>{{item.user.nickname}}</span>
      <span>{{item.content}}</span>
      <span>{{item.createTimeString}}</span>
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
      
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./CommentItem.scss";
</style>
