<template>
  <div id="Music" class="Music">
    <div class="wrap">
      <div class="utils">
        <button class="delBtn" @click.stop="delBatch">批量删除</button>
        <div class="search-wrap">
            <input class="" placeholder="请输入搜索条件" v-model="keyword"/>
        </div>
        <button class="searchBtn" @click.stop.prevent="searchByKeyWord">查询</button>
      </div>
      <div class="data-list-wrapper">
        <ul class="meta">
          <li><span>歌名</span></li>
          <li><span>歌手</span></li>
          <li><span>分类</span></li>
          <li><span>封面</span></li>
          <li><span>操作</span></li>
        </ul>
      </div>
    </div>
    <MusicList ref="$musicList"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import MusicList from './subpages/MusicList/MusicList'
  import { delBatchApi } from 'api/Music/music'
  export default {
    data() {
      return {
        keyword: ''
      }
    },
    created() {
    	
    },
    methods: {
      searchByKeyWord() {
          this.$refs.$musicList.searchByKeyWord(this.keyword)
      },
    	delBatch() {
        if(confirm("确定要删除这些音乐吗?")) {
           var items = $('.Music .opearcheck[type="checkbox"]:checked')
           if(items.length > 0) {
              var ids = ''
              items.each((index,item)=>{
                ids += $(item).val() + ','
              })
              delBatchApi(ids,(res)=>{
                if (res.data.code == 200) {
                  this.$refs.$musicList.pageData(1)
                }
              })
           }
        }
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import "./Music.scss"
</style>
