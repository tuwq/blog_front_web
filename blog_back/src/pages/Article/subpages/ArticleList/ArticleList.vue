<template>
  <div id="ArticleList" class="ArticleList">
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <Pagination />
  </div>
</template>

<script type="text/ecmascript-6"> 
  import ArticleItem from '../ArticleItem/ArticleItem'
  import Pagination from 'base/general/Pagination/Pagination'
  export default {  
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
