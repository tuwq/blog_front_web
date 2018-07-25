<template>
  <div id="Article" class="Article">
      <div class="wrap">
      	<div class="utils">
      		<button class="delBtn" @click.stop.prevent="delBatch">批量删除</button>
          <button class="updateBtn" @click.stop.prevent="updateBatch">批量修改状态</button>
      		<div class="search-wrap">
      			<input class="" placeholder="请输入搜索条件" v-model="keyword"/>
      		</div>
  			<button class="searchBtn" @click.stop.prevent="searchByKeyWord">查询</button>
      	</div>
      	<div class="data-list-wrapper">
      		<ul class="meta">
      			<li><span>文章标题</span></li>
            <li><span>分类</span></li>
      			<li><span>评论数量</span></li>
      			<li><span>创建时间</span></li>
      			<li><span>更新时间</span></li>
      			<li><span>状态</span></li>
      			<li><span>操作人</span></li>
      			<li><span>操作</span></li>
      		</ul>
      		<ArticleList ref="$ArticleList"/>
      	</div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ArticleList from './subpages/ArticleList/ArticleList'
import { delBatchApi,updateBatchApi } from 'api/Article/article'
  export default {  
    data() {
      return {
        keyword: ''
      }
    },
    components: {
    	ArticleList
    },
    methods: {
      delBatch() {
        if(confirm("确定要删除这些文章吗?")) {
           var items = $('.opearcheck[type="checkbox"]:checked')
           if(items.length > 0) {
              var ids = ''
              items.each((index,item)=>{
                ids += $(item).val() + ','
              })
              delBatchApi(ids,(res)=>{
                this.$refs.$ArticleList.pageArticle()
              })
           }
        }
      },
      updateBatch() {
        if(confirm("确定要更改这些文章状态吗?")) {
          var items = $('.opearcheck[type="checkbox"]:checked')
          if(items.length > 0) {
              var ids = ''
              items.each((index,item)=>{
                ids += $(item).val() + ','
              })
              updateBatchApi(ids,(res)=>{
                this.$refs.$ArticleList.pageArticle()
              })
          }
        }
      },
      searchByKeyWord() {
        this.$refs.$ArticleList.searchByKeyWord(this.keyword)
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./Article.scss";
  @import "./MArticle.scss";
</style>
