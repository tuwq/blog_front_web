<template>
  <div id="UserManage" class="UserManage">
      <div class="wrap">
      	<div class="utils">
      		<button class="updateBtn" @click.stop="updateBatch">批量禁言状态</button>
      		<div class="search-wrap">
      			<input class="" placeholder="请输入搜索条件" v-model="keyword"/>
      		</div>
  			  <button class="searchBtn" @click.stop.prevent="searchByKeyWord">查询</button>
      	</div>
      	<div class="data-list-wrapper">
      		<ul class="meta">
      			<li><span>昵称</span></li>
            	<li><span>描述</span></li>
      			<li><span>评论数</span></li>
      			<li><span>注册时间</span></li>
      			<li><span>状态</span></li>
            	<li><span>操作</span></li>
      		</ul>
      		<UserList ref="$UserList"/>
      	</div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import UserList from './subpages/UserList/UserList'
  import { updateBatchApi } from 'api/UserManage/userManage'
  export default {  
  	components: {
    	UserList
    },
    data() {
      return {
        keyword: ''
      }
    },
    methods: {
    	searchByKeyWord() {
	        this.$refs.$UserList.searchByKeyWord(this.keyword)
	    },
	    updateBatch() {
	        if(confirm("确定要更改这些用户的状态吗?")) {
	           var items = $('.UserItem .opearcheck[type="checkbox"]:checked')
	           if(items.length > 0) {
	              var ids = ''
	              items.each((index,item)=>{
	                ids += $(item).val() + ','
	              })
	              updateBatchApi(ids,(res)=>{
	                if (res.data.code == 200) {
	                   this.$refs.$UserList.pageUser(1)
	                }
	              })
	          }
	        }
	    }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./UserManage.scss"
</style>
