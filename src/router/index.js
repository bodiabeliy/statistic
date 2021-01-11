import Vue from 'vue'
import VueRouter from 'vue-router'
import Ukraine from '@/components/Ukraine/Ukraine.vue'
import UnitedKindom from '@/components/UK/UnitedKindom.vue'
import Brasilia from '@/components/Brasilia/Brasilia.vue'
import Holand from '@/components/Holand/Holand.vue'
import Germany from '@/components/Germany/Germany.vue'

import RuMain from '@/components/_Ru/Main.vue'
import RuBra from '@/components/_Ru/Brasilia/Brasilia.vue'
import RuUkr from '@/components/_Ru/Ukraine/Ukraine.vue'
import RuUK from '@/components/_Ru/UK/UnitedKindom.vue'
import RuHoland from '@/components/_Ru/Holand/Holand.vue'
import RuGermany from '@/components/_Ru/Germany/Germany.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/ukraine',
    name: 'Ukraine',
    component: Ukraine
  },
  {
    path: '/UnitedKindom',
    name: 'UnitedKindom',
    component: UnitedKindom
  },
  {
    path: '/brasilia',
    name: 'Brasilia',
    component: Brasilia
  },
  {
    path: '/holand',
    name: 'Holand',
    component: Holand
  },
  {
    path: '/germany',
    name: 'Germany',
    component: Germany
  },


  {
    path: '/ru_main',
    name: 'main',
    component: RuMain
  },
  {
    path: '/ru_br',
    name: 'ru_br',
    component: RuBra
  },
  {
    path: '/ru_ukr',
    name: 'ru_ukr',
    component: RuUkr
  },
  {
    path: '/ru_UK',
    name: 'ru_UK',
    component: RuUK
  },
  {
    path: '/ru_hol',
    name: 'ru_hol',
    component: RuHoland
  },
  {
    path: '/ru_ger',
    name: 'ru_ger',
    component: RuGermany
  }
]

const router = new VueRouter({
  routes
})

export default router
