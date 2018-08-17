<template>
  <div id="FirendList" class="FirendList">
      <div class="inner">
        <FirendItem 
        v-for="(item,index) in data"
        :item="item"
        :index="index"
        :key="item.id"/>
        <Pagination 
        :maxPageCode="maxPageCode"
        :total="total"
        :currentPage="currentPage"
        :pageSize="pageSize"
        @load="pageData"
        ref="pagination"/>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import FirendItem from '../FirendItem/FirendItem'
  import Pagination from 'base/general/Pagination/Pagination'
  import { pageFirendApi } from 'api/Firend/firend'
  export default {  
    props: {
      
    },
    data() {
      return {
        data: [],
        maxPageCode: 0,
        total: 0,
        currentPage: 1,
        pageSize: global.firendPageSize,
      }
    },
    created() {
     this.pageData(1)
    },
    methods: {
      pageData(page) {
        if(page) {
           this.currentPage = page
        }
        pageFirendApi(this.currentPage,this.pageSize,(res)=>{
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
       FirendItem,
       Pagination
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./FirendList.scss";
</style>
