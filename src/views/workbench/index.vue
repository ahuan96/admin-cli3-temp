<template>
  <div class='workbench'>
      <ul class="card-list">
          <li>
              <p>订单数量</p>
              <p class="num">356</p>
              <p>较昨日对比：+8单</p>
          </li>
          <li>
              <p>订单数量</p>
              <p class="num">356</p>
              <p>较昨日对比：+8单</p>
          </li>
          <li>
              <p>订单数量</p>
              <p class="num">356</p>
              <p>较昨日对比：+8单</p>
          </li>
          <li>
              <p>订单数量</p>
              <p class="num">356</p>
              <p>较昨日对比：+8单</p>
          </li>
      </ul>
      <div class="chart-box">
          <ChartLine/>
      </div>
      <div>
          <ChartPie/>
      </div>
  </div>
</template>

<script>
import ChartLine from 'components/echarts/chartLine.vue'
import ChartPie from 'components/echarts/chartPie.vue'

export default {
  name: '',
  components:{
      ChartLine,
      ChartPie
  },
  data(){
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods:{

  }

}
</script>

<style lang='less' scoped>
.workbench{
    .card-list{
        display: flex;
        justify-content: space-between;
        
        li{
            width: 23%;
            padding: 10px 20px;
            border-radius: 5px;
            line-height: 30px;
            p{
                color: #efefef;
            }
            .num{
                font-size: 20px;
                color: #fff;
                font-weight: bold;

            }
        }

        li:nth-of-type(1){
            background: #3d9cff;
        }
        li:nth-of-type(2){
            background: #ffad00;
        }
        li:nth-of-type(3){
            background: #6b94ff;
        }
        li:nth-of-type(4){
            background: #63c600;
        }



    }
    .chart-box{
        margin: 30px 0;
    }
}
</style>