<template>
  <div id="MusicList" class="MusicList">
      <div class="inner">
        <MusicItem 
        v-for="(item,index) in data"
        :item="item"
        :index="index"
        :key="item.id"/>
        <Pagination 
        :maxPageCode="maxPageCode"
        :total="total"
        :currentPage="currentPage"
        :pageSize="pageSize"
        :isSerch="isSerch"
        @load="pageData"
        @loadSearch="pageSearch"
        ref="pagination"/>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MusicItem from '../MusicItem/MusicItem'
  import Pagination from 'base/general/Pagination/Pagination'
  import { pageSongApi,pageSearchApi } from 'api/Music/music'
  export default {  
    props: {
      
    },
    data() {
      return {
        data: [],
        maxPageCode: 0,
        total: 0,
        currentPage: 1,
        pageSize: global.MusicPageSize,
        isSerch: false,
        keyword: ''
      }
    },
    created() {
     this.pageData(1)
    },
    methods: {
      searchByKeyWord(keyword) {
         this.keyword = keyword.trim()
         if(this.keyword==''){
            this.isSerch = false
            this.pageData(1)
         } else {
            this.isSerch = true
            this.pageSearch(1)
         }
      },
      pageData(page) {
        if(page) {
           this.currentPage = page
        }
        pageSongApi(this.currentPage,this.pageSize,(res)=>{
          if (res.data.code == 200) {
             this.data = res.data.data
             this.maxPageCode = res.data.pageModel.maxPageCode
             this.total = res.data.pageModel.total
             this.$refs.pagination.currentClass(this.currentPage)
          }
        })
      },
      pageSearch(page) {
        if(page){
          this.currentPage = page
        }
        pageSearchApi(this.currentPage,this.pageSize,this.keyword,(res)=>{
            if (res.data.code == 200) {
             this.data = res.data.data
             this.maxPageCode = res.data.pageModel.maxPageCode
             this.total = res.data.pageModel.total
             this.$refs.pagination.currentClass(this.currentPage)
            }
        })
      }
    },
    components: {
       MusicItem,
       Pagination
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./MusicList.scss";
</style>
