<template>
 <div class="v-wrapper pa-4">
<section>
  <h1>Christians in Germany </h1>
  <InfoCard></InfoCard>
</section>
<section>
  <h1>Total Graphic</h1>
 <div class="graphic chart">
  <LineChart  class="col-12 col-sm-6 col-md-8 col-lg-10" v-for="visual in visuals" :key="visual.key" :Data="visual.Data" :options="visual.option"></LineChart>
 </div>
</section>
</div>
</template>
<script>
 import InfoCard from '../Germany/InfoCard'
import LineChart from '@/Graphic/Graphic'
 export default {
  name: 'Germany',
  components: {
   InfoCard,
   LineChart
  },
  data: () =>({
    visuals: [{
      Data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25',  '26', '27', '28', '29', '30'],
     datasets: [
       {
         label: 'Bible was gifted (thous.)',
         backgroundColor: '#568aaa',
         data: [180, 173, 174, 169, 158, 178, 167, 150, 165, 152, 149, 134, 150, 155, 153, 158, 159, 169, 165, 184, 179, 181, 183, 196, 200, 203, 201, 210, 210, 223, 222],
         key: 1
       }
     ]
    },
    options: {responsive: true, maintainAspectRatio: false},
    
  },
  {
      Data: {
        labels: ['January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '],
     datasets: [
       {
         label: 'Grow of church',
         backgroundColor: '#4a8f38',
         data: [170, 178, 201, 186, 202, 210, 244, 265, 258, 288, 325, 320],
         key: 1
       }
     ]
    },
    options: {responsive: true, maintainAspectRatio: false},
    
  },
  {
      Data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
     datasets: [
       {
         label: 'Christains (millions)',
         backgroundColor: 'violet',
         data: [17.5, 17.8, 20.1, 19.6, 20.2, 20, 24.4, 23.1, 23.8, 23.8, 21.6, 22.5],
         key: 1
       }
     ]
    },
    options: {responsive: true, maintainAspectRatio: false},
    
  }
],

  })
} 

</script>
<style>
  .graphic {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    max-width: 500px;
    color: #a104a1;
  }
</style>