<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="200" class="mb-6">
        <v-img
          height="100px"
          src="https://img.freepik.com/free-photo/3d-abstract-background-with-futuristic-particles_1048-12370.jpg?size=626&ext=jpg&ga=GA1.2.864382187.1598805425"
        >
          <v-card-title class="white--text mt-0" style="text-align: center;">
            <p class="ml-6" style="font-size: 33px; color: rgb(2, 170, 11)">
            {{count }}+
            </p>
            <p style="font-size: 24px; color: rgb(253, 253, 253);">Библию прочитали</p>
          </v-card-title>
        </v-img>
        <v-card-text>
          <div class="font-weight-bold">
            Сегодня
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
      <v-card width="200" class="mb-6">
       <v-img
         height="100px"
         src="https://img.freepik.com/free-photo/landscape-with-milky-way-galaxy_29505-17.jpg?size=626&ext=jpg&ga=GA1.2.864382187.1598805425" 
       >
       <v-card-title class="white--text mt-0" style="text-align: center;">
        <p class="ml-12"  style="font-size: 39px;">
        {{church }}+
        </p>
        <p class="ml-3"  style="font-size:27px; color: black; font-style: bold;">Церкви</p>
      </v-card-title>
       </v-img>

       <v-card-text>
         <div class="font-weight-bold">
           Сегодня
         </div>

         <v-timeline
           align-top
           dense
         >
           <v-timeline-item
             v-for="message in messages"
             :key="message.time"
             :color="message.color"
             small
           >
             <div>
               <div class="font-weight-normal">
                 <strong>{{ message.from }}</strong> @{{ message.time }}
               </div>
               <div>{{ message.message }}</div>
             </div>
           </v-timeline-item>
         </v-timeline>
       </v-card-text>
     </v-card>
     <v-card width="200" class="mb-6">
      <v-img
        height="100px"
        src="https://cdn.pixabay.com/photo/2016/03/09/16/28/frame-1246811__340.jpg" 
      >
      <v-card-title class="white--text mt-0" style="text-align: center;">
       <p class="ml-8 mt-2"  style="font-size: 25px; color: rgb(230, 207, 0);">
       {{peoples }}
       </p>
       <p class="ml-6 "  style="font-size:27px; color: rgb(255, 167, 4); ">Христиан</p>
     </v-card-title>
      </v-img>

      <v-card-text>
        <div class="font-weight-bold">
          Сегодня
        </div>

        <v-timeline
          align-top
          dense
        >
          <v-timeline-item
            v-for="message in messages"
            :key="message.time"
            :color="message.color"
            small
          >
            <div>
              <div class="font-weight-normal">
                <strong>{{ message.from }}</strong> @{{ message.time }}
              </div>
              <div>{{ message.message }}</div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      messages: [
        {
          from: 'Андрей Белоков:',
          message: `Библия - компас, карта и свет`,
          color: '#568aaa',
        },
        {
          from: 'Анжела Мирнова:',
          message: `Дрругой такой в мире нет.`,
          color: '#4a8f38',
        },
        {
          from: 'Игорь Савицкий:',
          message: `Утешит накормит и защитит.`,
          color: '#a348a3',
        }
      ],
      count: 3.5 +'M',
      church: 150,
      peoples: 18.2 +' M',
    }),
  }
</script>
<style>

</style>