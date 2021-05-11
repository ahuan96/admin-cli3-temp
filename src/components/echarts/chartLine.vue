<template>  
      <div class="echart" id="echart-line" :style="{float:'left',width: '100%', height: '360px'}"></div>   
</template>

<script>

import * as echarts from 'echarts'

export default {
     data(){
        return{
            xname:'示例',
            xData: ['2020-02', '2020-03', '2020-04', '2020-05','2020-06','2020-07','2020-08','2020-09','2020-10'],
            yData: [30, 132, 80, 134,202,144,55,66,100],
        }
    },
      methods:{

      initChart(name,xData,yData) {
       
          let getchart = echarts.init(document.getElementById('echart-line'));
          var  option = {
               
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: [name],
                    bottom:'0%'
                },
                grid: { //调整图表上下左右位置
                    top:'10%',
                    left: '3%',
                    right: '8%',
                    bottom: '11%',
                    containLabel: true
                },
               
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: xData
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: name,
                        type: 'line',
                        stack: '总量',
                        data: yData
                    },
                ]
            };

          getchart.setOption(option);
          //随着屏幕大小调节图表
          window.addEventListener("resize", () => {
            getchart.resize();
        });
      },

    },
    mounted() {
        const {name,xData,yData} = this
        let _this = this
        setTimeout(()=>{
            _this.initChart(name,xData,yData)
        },1000)
    },

}
</script>