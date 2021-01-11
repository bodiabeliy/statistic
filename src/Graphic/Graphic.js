import Vue from 'vue'
import { Line } from 'vue-chartjs'

export default Vue.component('line-chart', {
 extends: Line,
 props: {
   Data: Object,
   options: Object
 },
 mounted () {
   this.renderChart(this.Data, this.options)
 }
})