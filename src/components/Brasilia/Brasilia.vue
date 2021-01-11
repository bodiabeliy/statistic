<template>
<div class="v-wrapper pa-4 pt-12">
<section>
  <h1>Christians in Brasilia </h1>
  <InfoCard></InfoCard>
</section>
<section>
  <h1>Total Graphic</h1>
 <div class="graphic chart">
  <LineChart class="col-12 col-sm-6 col-md-8 col-lg-10" v-for="visual in visuals" :key="visual.key" :Data="visual.Data" :options="visual.option"></LineChart>
 </div>
</section>
<section class="pt-3">
    <v-card
      tile
      class="indigo white--text text-center"
    >
      <v-card-text class="white--text pt-12" style="font-size: 27px;">
        And we know that all things work together for good to them that love God, to them who are the called according to his purpose. (Romans 8:28)
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Brasilia</strong>
      </v-card-text>
    </v-card>
</section>
</div>
</template>
<script>
import InfoCard from '../Brasilia/InfoCard'
import LineChart from '@/Graphic/Graphic'
 export default {
  name: 'Brasilia',
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
         label: 'Bibles was gifted (thos.)',
         backgroundColor: '#568aaa',
         data: [14, 15, 20, 14, 18, 17, 15, 19, 14, 15, 23, 12, 19, 15, 24, 25, 25, 19, 14, 15, 20, 24, 24, 23, 13, 25, 19, 15, 21, 21],
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
         data: [379, 359, 348, 355, 403, 421, 398, 419, 476, 505, 600, 562],
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
         backgroundColor: '#a348a3',
         data: [1.2, 1.7, 2.2, 2, 3.2, 3.6, 3.7, 5.7, 5.4, 5.9],
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