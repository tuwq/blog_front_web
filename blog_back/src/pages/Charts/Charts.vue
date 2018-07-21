<template>
  <div id="Charts" class="Charts">
      <div class="header">
      	<h2><i class="fa fa-bar-chart-o"></i>数据统计</h2>
      </div>
      <div class="main">
      	 <DataCard />
         <div class="chart-list">
           <VisitCharts />
           <FlowCharts />
         </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import DataCard from 'base/general/DataCard/DataCard'
  import VisitCharts from './subpages/VisitCharts/VisitCharts'
  import FlowCharts from './subpages/FlowCharts/FlowCharts'
  export default {  
    components: {
    	DataCard,
      VisitCharts,
      FlowCharts
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./Charts.scss";
  @import "./MCharts.scss";
</style>
