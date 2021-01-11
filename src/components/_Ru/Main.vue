<template>
  <v-app id="app">
    <v-navigation-drawer app style="z-index: 3; height: 100%;"
      v-model="visible"
      color="deep-purple accent-4"
      absolute
      bottom
    >
      <v-list 
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item  link to="/ru_main">
            <v-list-item-title style="color: white;" link to="/">
              <i class="fas fa-globe" style="font-size: 16px;"></i><span class="country">Мир сегодня</span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item  @click="visible =!visible">
            <v-list-item-title style="color: white;">
              <i class="fas fa-newspaper" style="font-size: 16px;"></i><span class="country">Дополнительная информация</span>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
     <v-content>
      <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
      app
      
    >
      <v-app-bar-nav-icon @click="visible =!visible">
        <i class="fa fa-bars" aria-hidden="true" style="margin-left: 0;"></i>
      </v-app-bar-nav-icon>
      <v-toolbar-title><i class="fa fa-church" style="margin-right: 17px"></i><span class="header">Церкви & 2020</span></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
            <span class="ru">"Благословенное поколение - успешная страна" </span>
      <v-text-field class="hidden" style="margin-top: 20px"
      placeholder="Enter counrty..."
    ></v-text-field>
      <v-btn icon>
        <i class="fas fa-search"></i>
      </v-btn>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs}">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
          <i class="far fa-flag"></i>
          </v-btn>
        </template>

        <v-list>
          <v-list-item 
            v-for="countries in countries"
            :key="countries.id"
            @click="Up"
            link :to="countries.link"
          >
            <v-list-item-title>{{ countries.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, lang}">
          <v-btn
            icon
            v-bind="lang"
            v-on="on"
          >
          <i class="fa fa-globe"></i> 
       </v-btn>
        </template>

        <v-list>
          <v-list-item 
            v-for="languages in languages"
            :key="languages.id"
            @click="() => {}"
            link :to="languages.link"
          >
            <v-list-item-title>{{ languages.value }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <router-view></router-view>
     </v-content>
  </v-app>
</template>
<script>
  export default {
    data: () =>({
      visible: false,
      countries: [
        {name: 'Украина', id:1, link: '/ru_ukr'},
        {name: 'Великобритания', id:2, link: '/ru_UK'},
        {name: 'Бразилия', id:3, link: '/ru_br'},
        {name: 'Нидерланлы', id:4, link: '/ru_hol'},
        {name: 'Германия', id:5, link: '/ru_ger'},
      ],
      languages: [
        {value:'English', id: 1, link:'/'},
        {value:'Русский', id: 2, link:'/ru_main'},
      ]
    }),
    name: 'main',
    methods: {
      Up () {
         window.scrollTo(0,0)
      }
    }
  }
</script>
<style>
  .ru {
    margin-right: 20px;
font-family: 'Lobster', cursive;
  }
  .country {
    font-size: 17px;
    margin-left: 15px;
  }
      .ru {
      font-size: 13px;
  }
 @media (max-width:600px) {
    .ru {
      width: 100%;
      margin-right: 0px;
      font-size: 11px;
  }
  .hidden {
    opacity: 0;
  } 
 } 

</style>
