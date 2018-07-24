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
        @load="pageArticle"
        ref="pagination"/>
      </div>
  </div>
</template>

<script type="text/ecmascript-6"> 
  import ArticleItem from '../ArticleItem/ArticleItem'
  import Pagination from 'base/general/Pagination/Pagination'
  import { getArticleList } from 'api/Article/article'
  export default {  
    data(){
      return {
        articleList: [],
        maxPageCode: 0,
        total: 0,
        currentPage: 1,
        pageSize: 5,
      }
    },
    created() {
       this.pageArticle(1)
    },
    methods:{
      pageArticle(page) {
        this.currentPage = page
        getArticleList({page},(res)=>{
            this.articleList = res.data.data
            this.maxPageCode = res.data.pageModel.maxPageCode
            this.total = res.data.pageModel.total
            this.$refs.pagination.currentClass(page)
        })
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
