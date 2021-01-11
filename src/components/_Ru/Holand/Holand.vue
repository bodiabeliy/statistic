<template>
<div class="v-wrapper pa-4">
<section>
  <h1>Церкви в Нидерландах </h1>
  <InfoCard></InfoCard>
</section>
<section>
  <h1>Инфографика</h1>
 <div class="graphic chart">
  <LineChart class="col-12 col-sm-6 col-md-8 col-lg-10" v-for="visual in visuals" :key="visual.key" :Data="visual.Data" :options="visual.option"></LineChart>
 </div>
</section>
</div>
</template>
<script>
import InfoCard from '@/components/_Ru/Holand/InfoCard'
import LineChart from '@/Graphic/Graphic'
 export default {
  name: 'ru_hol',
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
         label: 'Библий подарено (тис.)',
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
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
     datasets: [
       {
         label: 'Рост церквей',
         backgroundColor: '#4a8f38',
         data: [257, 269, 257, 263, 266, 270, 268, 274, 291, 314, 320, 345],
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
         label: 'Христиан (млн.)',
         backgroundColor: '#a348a3',
         data: [0.3, 0.4, 0.5, 0.5, 0.5, 0.6, 0.7, 0.7, 0.8, 0.9, 1, 0.9, 0.8,],
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