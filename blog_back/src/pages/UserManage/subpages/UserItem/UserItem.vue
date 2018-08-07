<template>
  <div class="UserItem">
      <span>{{item.nickname}}</span>
      <span>{{item.desc}}</span>
      <span>{{item.commentSum}}</span>
      <span>{{item.createTimeString}}</span>
      <span>{{item.status}}</span>
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
  @import "./UserItem.scss";
</style>
