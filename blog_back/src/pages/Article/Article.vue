<template>
  <div id="Article" class="Article">
      <div class="wrap">
      	<div class="utils">
      		<button class="delBtn">批量删除</button>
      		<div class="search-wrap">
      			<input class="" placeholder="请输入搜索条件"/>
      		</div>
  			<button class="searchBtn">查询</button>
      	</div>
      	<div class="data-list-wrapper">
      		<ul class="meta">
      			<li><span>文章标题</span></li>
      			<li><span>评论数量</span></li>
      			<li><span>创建时间</span></li>
      			<li><span>更新时间</span></li>
      			<li><span>状态</span></li>
      			<li><span>操作人</span></li>
      			<li><span>操作</span></li>
      		</ul>
      		<ArticleList />
      	</div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ArticleList from './subpages/ArticleList/ArticleList'
  export default {  
    components: {
    	ArticleList
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./Article.scss";
  @import "./MArticle.scss";
</style>
