<template>
  <div id="Pagination" class="Pagination">
    <div class="pages" v-show="total>1" ref="pagin">
      <div v-show="currentPage!=1" @click.stop.prevent="pageList(currentPage-1)" class="arrow current"><a><i class="fa fa-chevron-left"></i></a></div>
        <div class="page-control" v-if="maxPageCode<=4">
          <button 
          @click.stop.prevent="pageList(item)" 
          v-for="item in maxPageCode">{{item}}</button>
        </div>
        <div v-else class="page-control" >
          <div v-if="currentPage<4" class="page-control">
            <button  
            @click.stop.prevent="pageList(item)" 
            v-for="item in [1,2,3,4]">{{item}}
            </button>
            <button>...</button>
            <button  
            @click.stop.prevent="pageList(maxPageCode)"
            >{{maxPageCode}}</button>
          </div>

          <div v-else-if="currentPage>=4 && currentPage<=maxPageCode-3" class="page-control">
            <button 
            @click.stop.prevent="pageList(1)">1</button>
            <button>...</button>
            <button  
            @click.stop.prevent="pageList(item)" 
            v-for="item in [currentPage-1,currentPage,currentPage+1]">{{item}}
            </button>
            <button>...</button>
            <button  
            @click.stop.prevent="pageList(maxPageCode)">{{maxPageCode}}
            </button>
          </div>

          <div v-else class="page-control">
            <button 
            @click.stop.prevent="pageList(1)">1</button>
            <button>...</button>
            <button 
            @click.stop.prevent="pageList(item)" 
            v-for="item in [maxPageCode-3,maxPageCode-2,maxPageCode-1,maxPageCode]">{{item}}
            </button>
          </div>
        </div>
   		<div v-show="currentPage!=maxPageCode" @click.stop.prevent="pageList(currentPage+1)" class="arrow"><a><i class="fa fa-chevron-right"></i></a></div>
 	  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {  
    props: {
      maxPageCode:{
        type: Number,
        default: 0
      },
      total:{
        type: Number,
        default: 0
      },
      currentPage: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 5
      },
      isSerch: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.currentClass(1)
    },
    methods: {
      pageList(page) {
        if(this.isSerch) {
          this.$emit('loadSearch',page)
        } else {
          this.$emit('load',page)
        }
        
      },
      currentClass(page) {
        this.$nextTick().then(()=> {
          $(this.$refs.pagin).find('button').each((index,item)=> {
            if( page == $(item).text()) {
              $(item).addClass('current').siblings('button').removeClass('current')
            }
          })
        })  
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./Pagination.scss";
  @import "./MPagination.scss";
</style>
