<template>
  <div id="VisitCharts" class="VisitCharts">
      <div class="charts-content" id="visitChart">

      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import echarts from 'echarts'
  import { debounce } from 'lodash'
  export default {
  	props: {
      accessList: {
        type: Array,
        default: []
      }
    },  
  	data() {
  		return {
  			visitChart: '',
  			xData: [],
  			serverData: [],
  			chartWidth: 0
  		}
  	},
  	created() {
  		this.xData = this.accessList.map((item,index)=>{
  			return item.timeDay
  		})
  		this.serverData = this.accessList.map((item,index)=>{
  			return item.accessCount
  		})
  	},	
    mounted() {
    	this.initChart()
    },
    methods: {
    	initChart() {
    		this.visitChart = echarts.init(document.getElementById('visitChart'))
    		this.visitChart.setOption({
    			tooltip: {
			        trigger: 'axis'
			    },
    			title: {
			        left: 'center',
			        text: '本月访问量',
			        textStyle: {
			        	color: '#fff'
			        }
			    },
			    toolbox: {
			        feature: {
			            dataZoom: {
			                yAxisIndex: 'none'
			            },
			            restore: {},
			            saveAsImage: {}
			        }
			    },
    			xAxis: {
			        type: 'category',
			        boundaryGap: false,
			        axisLabel : {
			            textStyle: {
			                color: '#fff'
			            }
			        },
			        data: this.xData,
			    },
			    yAxis: {
			        type: 'value',
			        boundaryGap: [0, '100%'],
			        axisLabel: {
			            show: true,
			            textStyle: {
			                color: '#fff'
			            }
			        }
			    },
			    dataZoom: [{
			        type: 'inside',
			        start: 0,
			        end: 10
			    }, {
			        start: 0,
			        end: 10,
			        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
			        handleSize: '80%',
			        handleStyle: {
			            color: '#fff',
			            shadowBlur: 3,
			            shadowColor: 'rgba(0, 0, 0, 0.6)',
			            shadowOffsetX: 2,
			            shadowOffsetY: 2
			        }
			    }],
			    series: [{
			        data: this.serverData,
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#000",  // 会设置点和线的颜色，所以需要下面定制 line
			                borderColor: "#fff",  // 点边线的颜色
			                borderWidth: "3"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#fff"   // 线条颜色
			            }
			        },
			        showSymbol: true,
			        symbol: 'circle',     //设定为实心点
			        symbolSize: 15,   //设定实心点的大小
			        hoverAnimation: false,
			        animation: false,
			    }]
    		})
    	}
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./VisitCharts.scss";
  @import "./MVisitCharts.scss";
</style>
