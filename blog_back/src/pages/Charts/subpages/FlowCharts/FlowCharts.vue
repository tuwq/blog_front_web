<template>
  <div id="FlowCharts" class="FlowCharts">
     <div class="charts-content" id="flowChart">
		
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import echarts from 'echarts'
  export default {  
    data() {
  		return {
  			flowChart: '',
  			xData: ['2018-7-21','2018-7-22','2018-7-23','2018-7-24','2018-7-25','2018-7-26','2018-7-27'],
  			serverData: [20, 30, 66, 8, 7, 1, 20],
  		}
  	},
  	mounted() {
    	this.initChart()
    },
    methods: {
    	// 宽度被固定了,响应式时需要重新计算
    	initChart() {
    		this.flowChart = echarts.init(document.getElementById('flowChart'))
    		this.flowChart.setOption({
    			tooltip: {
			        trigger: 'axis'
			    },
    			title: {
			        left: 'center',
			        text: '本月流量统计',
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
			        data: this.xData
			    },
			    yAxis: {
			        type: 'value',
			        boundaryGap: [0, '100%'],
			        axisLabel : {
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
			    series: [
			        {
			            name:'模拟数据',
			            type:'line',
			            smooth:true,
			            symbol: 'none',
			            sampling: 'average',
			            itemStyle: {
			                normal: {
			                    color: 'rgb(255, 70, 131)',
			                    borderColor: "#fff",  // 点边线的颜色
			                	borderWidth: "1"
			                }
			            },
			            areaStyle: {
			                normal: {
			                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                        offset: 0,
			                        color: 'rgb(255, 158, 68)'
			                    }, {
			                        offset: 1,
			                        color: 'rgb(255, 70, 131)'
			                    }])
			                }
			            },
			            showSymbol: true,
				        symbol: 'circle',     //设定为实心点
				        symbolSize: 8,   //设定实心点的大小
				        hoverAnimation: false,
				        animation: false,
			            data: this.serverData
			        }
			    ]
    		})
    	}
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./FlowCharts.scss";
  @import "./MFlowCharts.scss";
</style>
