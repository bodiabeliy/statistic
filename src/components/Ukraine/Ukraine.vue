<template>
<div class="v-wrapper pa-4" >
<section>
  <h1>Church in Ukraine </h1>
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
        I can do all things through Christ which strengtheneth me. (Philippians 4:13)
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Ukraine</strong>
      </v-card-text>
    </v-card>
</section>
</div>
</template>
<script>
import InfoCard from '@/components/Ukraine/InfoCard'
import LineChart from '@/Graphic/Graphic'
 export default {
  name: 'ru_br',
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
         data: [120, 143, 134, 139, 148, 133, 139, 150, 155, 152, 149, 144, 150, 160, 163, 158, 169, 171, 175, 184, 179, 181, 183, 196, 200, 203, 201, 210, 210, 223, 222],
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
         data: [57, 59, 72, 78, 80, 89, 89, 89, 91, 94, 106, 110],
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
         data: [29.5, 30.3, 32.9, 33.4, 32.3, 35.7, 34.8, 35.4, 33.8, 35.5, 38.6, 40.1],
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

  .chart {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width:600px) {
    .chart {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
 
  }
</style>