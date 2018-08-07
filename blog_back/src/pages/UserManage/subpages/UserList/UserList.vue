<template>
  <div id="UserList" class="UserList">
      <div class="inner" v-if="userList">
        <UserItem 
        v-for="(item,index) in userList"
        :item="item"
        :index="index"
        :key="item.id"/>
        <Pagination 
        :maxPageCode="maxPageCode"
        :total="total"
        :currentPage="currentPage"
        :pageSize="pageSize"
        :isSerch="isSerch"
        @load="pageUser"
        @loadSearch="pageSearch"
        ref="pagination"/>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import UserItem from '../UserItem/UserItem'
  import Pagination from 'base/general/Pagination/Pagination'
  import { getUserApi,getSearchListApi } from 'api/UserManage/userManage'
  export default {  
    data() {
      return {
        userList: [],
        maxPageCode: 0,
        total: 0,
        currentPage: 1,
        pageSize: global.userManagePageSize,
        isSerch: false,
        keyword: ''
      }
    },
    created() {
      this.pageUser(1)
    },
    methods: {
      pageUser(page) {
        if(page) {
           this.currentPage = page
        }
        getUserApi(this.currentPage,this.pageSize,(res)=>{
          if (res.data.code == 200) {
             this.userList = res.data.data
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
              this.userList = res.data.data
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
            this.pageUser(1)
         } else {
            this.isSerch = true
            this.pageSearch(1)
         }
      }
    },
    components: {
        UserItem,
        Pagination
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./UserList.scss";
</style>
