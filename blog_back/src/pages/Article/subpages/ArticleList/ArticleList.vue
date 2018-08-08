<template>
  <div id="ArticleList" class="ArticleList"> 
      <div class="articleList-inner" v-if="articleList">
        <ArticleItem 
        v-for="(item,index) in articleList"
        :item="item"
        :index="index"
        :key="item.id"/>
        <span class="total">共有{{total}}条数据</span>
        <Pagination 
        :maxPageCode="maxPageCode"
        :total="total"
        :currentPage="currentPage"
        :pageSize="pageSize"
        :isSerch="isSerch"
        @load="pageArticle"
        @loadSearch="pageSearch"
        ref="pagination"/>
      </div>
  </div>
</template>

<script type="text/ecmascript-6"> 
  import ArticleItem from '../ArticleItem/ArticleItem'
  import Pagination from 'base/general/Pagination/Pagination'
  import { getArticleListApi,getSearchListApi } from 'api/Article/article'
  export default {  
    data(){
      return {
        articleList: [],
        maxPageCode: 0,
        total: 0,
        currentPage: 1,
        pageSize: global.articlePageSize,
        isSerch: false,
        keyword: ''
      }
    },
    created() {
       this.pageArticle(1)
    },
    methods:{
      pageArticle(page) {
        if(page) {
           this.currentPage = page
        }
        getArticleListApi(this.page,this.pageSize,(res)=>{
          if(res.data.code == 200) {
            this.articleList = res.data.data
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
              this.articleList = res.data.data
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
            this.pageArticle(1)
         } else {
            this.isSerch = true
            this.pageSearch(1)
         }
      }
    },
    components: {
    	ArticleItem,
      	Pagination
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./ArticleList.scss";
  @import "./MArticleList.scss";
</style>
