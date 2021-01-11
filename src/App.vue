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
          <v-list-item  @click="visible =!visible">
            <v-list-item-title style="color: white;" link to="/">
              <i class="fas fa-globe" style="font-size: 16px;"></i><span class="country">World</span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item  link to="/">
            <v-list-item-title style="color: white;">
              <i class="fas fa-newspaper" style="font-size: 16px;"></i><span class="country">Information</span>
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
      <v-toolbar-title><i class="fa fa-church" style="margin-right: 17px"></i><span class="header">Churches & 2020</span></v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="ru" style="font-size: 14px;">"Blessed generation - successful nation" </span>
      <v-text-field class="hidden" style="margin-top: 20px;"
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
    <div class="bg">
      <video class="bg_video_en" autoplay muted loop style="width: 100%;" src="https://player.vimeo.com/external/155246338.sd.mp4?s=b91d493eb63166703486d56541dad818d21b8f57&profile_id=112"></video>
      <h1>Полезный контент:</h1>
  <div class="flex col-sm-6 col-md-4 col-lg-3 col-xl-3 chart">
    <v-card
      class="my-12 "
      v-for="video in videos"
      :key="video.id"
    >
    <v-card-title>{{video.title}}</v-card-title>
      <v-img
        height="250"
        :src="video.contenting"
      ></v-img>
     <p><b>{{video.descriptions}}</b> <sub><a>{{video.link}}</a></sub></p>
    </v-card>
      </div>
    </div>
     </v-content>
  </v-app>
</template>
<script>
  export default {
    data: () =>({
      visible: false,
      countries: [
        {name: 'Ukraine', id:1, link: '/ukraine'},
        {name: 'United Kindom', id:2, link: '/UnitedKindom'},
        {name: 'Brasilia', id:3, link: '/brasilia'},
        {name: 'Holand', id:4, link: '/holand'},
        {name: 'Germamy', id:5, link: '/germany'},
      ],
      languages: [
        {value:'English', id: 1, link:'/'},
        {value:'Русский', id: 2, link:'/ru_main'},
      ],
      videos: [
        {contenting: 'https://i.ytimg.com/an_webp/B8XKYprpe1c/mqdefault_6s.webp?du=3000&sqp=CKODvf8F&rs=AOn4CLCO2yzdvejrDkm_jHiZcNCEj1qqnw', 
        id:1, title: 'Пиратский контент и христиане. Как на это смотрит Бог?',
        descriptions: 'Поговорим на чистоту о наших с вами слабых местах, христиане. Ведь мы учим быть максимально честными во всем, но в контексте не лицензионных цифровых продуктов слились с общей массой. Оправданий у нас достаточно. Но точно ли нам стоит с этим мириться?', 
         link: 'https://www.youtube.com/watch?v=B8XKYprpe1c&ab_channel=%D0%9E%D0%BB%D0%B5%D0%B3%D0%91%D0%BE%D0%BA%D0%BE%D0%B2'
        },
        {contenting: 'https://i.ytimg.com/an_webp/Wenwlss3M00/mqdefault_6s.webp?du=3000&sqp=CI_XvP8F&rs=AOn4CLA5h6RLo5zywG3U14CHkDzQ053pVQ',
         id:2, title: 'Что больший грех – сигареты или кола? Лицемерят ли христиане?',
         descriptions: 'Почему христиане негативно относятся к курению, но при этом в избытке употребляют сахар и не считают это грехом? Чипсы, кола – разве это не грех? Давайте разбираться...', 
         link: 'https://www.youtube.com/watch?v=Wenwlss3M00&ab_channel=%D0%9E%D0%BB%D0%B5%D0%B3%D0%91%D0%BE%D0%BA%D0%BE%D0%B2'
      },
      {contenting: 'https://i.ytimg.com/an_webp/0-1zpNqwzmg/mqdefault_6s.webp?du=3000&sqp=CLD9vP8F&rs=AOn4CLBfDjVOfcEkdUKGCJTvLFKe0AnnGw',
         id:3, title: 'Топ 10 христианских песен с клипами!',
         descriptions: 'Топ 10 христианских песен с клипами, по моему конечно же мнению :) При выборе обращал внимание на слова песни, исполнение и сам видеоклип..', 
         link: 'https://www.youtube.com/watch?v=0-1zpNqwzmg&ab_channel=%D0%9E%D0%BB%D0%B5%D0%B3%D0%91%D0%BE%D0%BA%D0%BE%D0%B2'
      },
      ]
    }),
    name: 'App',
    methods: {
      Up () {
         window.scrollTo(0,0)
      }
    }
  }
</script>
<style>
  .header {
    margin-right: 20px;
    font-family: 'Andika New Basic', sans-serif;
  }
  .country {
    font-size: 17px;
    margin-left: 15px;
  }
  .bg {
    z-index: 1;
    opacity: 1;
    width: 100%;
    background-size: cover;
    background-clip: content-box;
  }
  .flex {
    margin-left: 15px;
    margin-right: 15px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }


</style>
