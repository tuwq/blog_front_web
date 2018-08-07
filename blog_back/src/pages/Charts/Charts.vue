<template>
  <div id="Charts" class="Charts">
      <div class="header">
      	<h2><i class="fa fa-bar-chart-o"></i>数据统计</h2>
      </div>
      <div class="main" v-if="accessList">
      	 <DataCard :cardData="cardData"/>
         <div class="chart-list">
           <VisitCharts :accessList="accessList"/>
           <FlowCharts />
         </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import DataCard from 'base/general/DataCard/DataCard'
  import VisitCharts from './subpages/VisitCharts/VisitCharts'
  import FlowCharts from './subpages/FlowCharts/FlowCharts'
  import { statisicApi } from 'api/Statistic/statistic'
  export default {  
    components: {
      DataCard,
      VisitCharts,
      FlowCharts
    },
    data() {
      return {
        cardData: {},
        accessList: []
      }
    },
    created() {
        this.initData()
    },
    methods: {
        initData() {
            statisicApi((res)=>{
              if (res.data.code == 200) {
                 this.cardData = {
                   accessSum: res.data.result.accessSum,
                   totalArticleSum: res.data.result.totalArticleSum,
                   totalCommentSum: res.data.result.totalCommentSum,
                   totalUserSum: res.data.result.totalUserSum
                 }
                 this.accessList = res.data.result.accessList
              }
            })
        }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./Charts.scss";
  @import "./MCharts.scss";
</style>
