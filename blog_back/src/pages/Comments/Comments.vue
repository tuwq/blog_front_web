<template>
  <div id="Comments" class="Comments">
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
      			<li><span>评论的文章</span></li>
            <li><span>评论人</span></li>
      			<li><span>评论内容</span></li>
      			<li><span>评论时间</span></li>
            <li><span>操作</span></li>
      		</ul>
          <CommentList ref="$CommentList"/>
      	</div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import CommentList from './subpages/CommentList/CommentList'
  import { delBatchApi } from 'api/Comment/comment'
  export default {  
    components: {
    	CommentList
    },
    data() {
      return {
        keyword: ''
      }
    },
    methods: {
      searchByKeyWord() {
        this.$refs.$CommentList.searchByKeyWord(this.keyword)
      },
      delBatch() {
        if(confirm("确定要删除这些评论吗?")) {
           var items = $('.CommentItem .opearcheck[type="checkbox"]:checked')
           if(items.length > 0) {
              var ids = ''
              items.each((index,item)=>{
                ids += $(item).val() + ','
              })
              delBatchApi(ids,(res)=>{
                if (res.data.code == 200) {
                  this.$refs.$CommentList.pageComment(1)
                }
              })
           }
        }
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./Comments.scss";
  @import "./MComments.scss";
</style>
