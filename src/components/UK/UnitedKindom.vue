<template>
 <div class="v-wrapper">
  <h1>Christians in UnitedKindom</h1>
 <InfoCard></InfoCard>
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
import InfoCard from '@/components/_Ru/UK/InfoCard'
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
         label: 'Bibles was gifted (thos.)',
         backgroundColor: '#568aaa',
         data: [53, 32, 41, 53, 36, 43, 58, 41, 53, 44, 58, 51, 53, 42, 42, 44, 40, 44, 37, 35, 32, 36, 32, 40, 33, 35, 39, 34, 31, 46],
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
         data: [64, 59, 48, 55, 53, 54, 60, 72, 79, 91, 120, 159],
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
         data: [15.3, 15.8, 16.2, 16.7, 17.3, 18.1, 17.2, 17.7, 18.5, 18.6, 18.6, 18.2],
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
  .graphic{
  }
  @media (max-width:600px) {
    .chart {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
 
  }
</style>
