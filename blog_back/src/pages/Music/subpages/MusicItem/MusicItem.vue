<template>
  <div class="MusicItem" @click.stop="goEdit">
      <span>{{item.songName}}</span>
      <span>{{item.singer}}</span>
      <span>{{item.categoryName}}</span>
      <span class="image">
        <img width="50" height="50" alt="" :src="musicCoverPrefix+item.cover"/>
      </span>
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
    data() {
      return {
        musicCoverPrefix: global.musicCoverUrl
      }
    },
    methods: {
      goEdit() {
        this.$router.push('/music/edit/'+this.item.id)
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./MusicItem.scss";
</style>
