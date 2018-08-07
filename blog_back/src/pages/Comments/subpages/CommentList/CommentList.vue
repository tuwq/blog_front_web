<template>
  <div id="CommentList" class="CommentList">
      <div class="inner" v-if="commentList">
        <CommentItem 
        v-for="(item,index) in commentList"
        :item="item"
        :index="index"
        :key="item.id"/>
        <Pagination 
        :maxPageCode="maxPageCode"
        :total="total"
        :currentPage="currentPage"
        :pageSize="pageSize"
        :isSerch="isSerch"
        @load="pageComment"
        @loadSearch="pageSearch"
        ref="pagination"/>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import CommentItem from '../CommentItem/CommentItem'
  import Pagination from 'base/general/Pagination/Pagination'
  import { getCommentApi,getSearchListApi } from 'api/Comment/comment'
  export default {  
    data() {
      return {
        commentList: [],
        maxPageCode: 0,
        total: 0,
        currentPage: 1,
        pageSize: global.articlePageSize,
        isSerch: false,
        keyword: ''
      }
    },
    created() {
      this.pageComment(1)
    },
    methods: {
      pageComment(page) {
        if(page) {
           this.currentPage = page
        }
        getCommentApi(this.currentPage,this.pageSize,(res)=>{
          if (res.data.code == 200) {
             this.commentList = res.data.data
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
        getSearchListApi(this.currentPage,this.pageSize,this.keyword,(res)=>{
            if (res.data.code == 200) {
              this.commentList = res.data.data
              this.maxPageCode = res.data.pageModel.maxPageCode
              this.total = res.data.pageModel.total
              this.$refs.pagination.currentClass(this.currentPage)
            }
        })
      },
      searchByKeyWord(keyword) {
         this.keyword = keyword.trim()
         if(this.keyword==''){
            this.isSerch = false
            this.pageComment(1)
         } else {
            this.isSerch = true
            this.pageSearch(1)
         }
      }
    },
    components: {
        CommentItem,
        Pagination
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./CommentList.scss";
</style>
