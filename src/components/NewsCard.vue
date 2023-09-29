<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

const travellist = ref ([
  {name:'ท่าช้าง', 
  Facebook : 'ท่าช้าง คาเฟ่',
  GPS : "https://goo.gl/maps/EHzCFdXHZNamELdM6",
  img:"https://p-u.popcdn.net/event_details/posters/000/008/856/original/cfe1b94d03c5137faf1500f98117421e9f2ac9db.jpg?1590662796"
},

  {name:'GoodView',
  Facebook : 'The Good View',
  GPS : "https://goo.gl/maps/geqUhH2oyRDcMPcV8",
  img:"https://img.wongnai.com/p/1920x0/2019/07/06/c9743723492c4049869c55f2b003d5ef.jpg"},

  {name:'RiverSide' , 
  Facebook: 'Riverside Pub And Restaurant',
  GPS: "https://www.google.com/maps/dir/18.8851557,99.0239452/18.789977,99.0040767/@18.8377284,98.979582,13z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu",
  img:"https://th.bing.com/th/id/R.ab9802205edc889cdc62f84af245316c?rik=EUFmNFFfO91eJA&riu=http%3a%2f%2fwww.dooasia.com%2fwp-content%2fuploads%2f2018%2f05%2fThe-RiverSide-%e0%b9%80%e0%b8%8a%e0%b8%b5%e0%b8%a2%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-7-696x464.jpg&ehk=IfTrEAF8BEuE9hJhtMKHQNYZmV%2boSJEesY%2fzQmFNYoo%3d&risl=&pid=ImgRaw&r=0"},

  {name:'WarmUp',
  Facebook : 'Warmupcafe Chiangmai', 
  GPS : "https://www.google.com/maps/dir/?api=1&destination=18.795283506421%2C98.965189063036&fbclid=IwAR1wsy9EXL_nORL1isC097tCqMyUEDLs44ZQ3N7Z1Fhf14zoWmK1b61BbqU",  
  img:"https://d136usn7jnoe61.cloudfront.net/pictures/21526/s2n_0002_p1d06tc4oou8jlkvr0l1mag1grj6.jpg"},

  {name:'ตะวันแดง', 
  Facebook: 'TaWanDang ChiangMai',
  GPS: "https://www.google.com/maps/dir/18.8851557,99.0239452/18.7971454,98.9640057/@18.8425048,98.9454176,12.88z/data=!4m4!4m3!1m1!4e1!1m0?entry=ttu",
  img:"https://th.bing.com/th/id/R.6fd3de7109e6a325c0d72efb53de2050?rik=Aa1zQxZXAWtxSg&riu=http%3a%2f%2ftawandang.com%2fwp-content%2fuploads%2f2017%2f08%2fTWDjang-Chaeng-Wattana.jpg&ehk=WHcn32JlAx8ZTvDdAHwMb81EWoU%2fiVLDtNNd6K%2bP6Ao%3d&risl=&pid=ImgRaw&r=0"
  },

  {name: 'Porjai Bar',
  Facebook : 'Porjai Bar Chiangmai',
  GPS : "https://goo.gl/maps/xQKV6ZTHFS6tMHJ99",
  img:"https://www.tripgether.com/wp-content/uploads/2022/10/PorJaiBar45.jpg"},

  {name: 'Myst MAYA',
  Facebook : 'Myst MAYA Chiang Mai',
  GPS : "https://g.page/MystMaya ",
  img:"https://www.northspace.life/wp-content/uploads/2022/12/Myst-MAYA-01.jpeg"},

  {name: '86’s Room',
  Facebook : '86’s Room',
  GPS : "https://goo.gl/maps/6qJdv3c78HGPHfkc7",
  img:"https://www.northspace.life/wp-content/uploads/2022/12/86s-Room-02.jpeg"},

  {name: 'Too Night Nimman',
  Facebook : 'Too Nice Nimman',
  GPS : "https://goo.gl/maps/HdqaZjBZ8JgQfKbg9",
  img:"https://www.northspace.life/wp-content/uploads/2022/12/Too-Nice-Nimman-01.jpeg"},

  {name: 'camellia & co',
  Facebook : 'The camellia cafe & music bar',
  GPS : "https://g.co/kgs/17EouC",
  img:"https://www.northspace.life/wp-content/uploads/2022/12/The-camellia-02.jpeg"},

  {name: 'LVMC, Living Machine Bar & Break',
  Facebook : 'LVMC ,Living Machine Bar & Break',
  GPS : "https://goo.gl/maps/gkcbEVrpc5Fbnahg9",
  img:"https://www.northspace.life/wp-content/uploads/2022/12/LVMC01.jpeg"},

  {name: 'Ground',
  Facebook : 'Ground',
  GPS : "https://goo.gl/maps/shoiLbPhFycUwzrAA",
  img:"https://www.northspace.life/wp-content/uploads/2022/12/Ground02.jpeg"},

  {name: 'Wander Night',
  Facebook : 'Wander Night',
  GPS : "https://goo.gl/maps/4fKfm8NAuvEzchDU6",
  img:"https://www.northspace.life/wp-content/uploads/2022/12/Wander-Night03.jpeg"},

  {name: 'Zoe In Yellow Chiang Mai',
  Facebook : 'Zoe In Yellow',
  GPS : "https://goo.gl/maps/uJYJ97ZxupLSJzEM8",
  img:"https://www.northspace.life/wp-content/uploads/2022/12/Zoe-In-Yellow-01.jpeg"},

  {name: 'Lism cafe Chiang Mai',
  Facebook : 'Lism cafe Chiangmai',
  GPS : "https://goo.gl/maps/BVB8PSJEp8cVsyCn8",
  img:"https://www.northspace.life/wp-content/uploads/2022/12/Lism-cafe-01.jpeg"},

  {name: 'บางขวาง Cafe’ Chiangmai',
  Facebook : 'บางขวาง Cafe’ Chiangmai',
  GPS : "https://goo.gl/maps/GnVpBKhXBj6iSxsg7",
  img:"https://www.northspace.life/wp-content/uploads/2022/12/%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B8%A7%E0%B8%B2%E0%B8%87-03.jpeg"},

  {name: 'SOPA Cafe',
  Facebook : 'SOPA Cafe’',
  GPS : "https://goo.gl/maps/JmxHSYknfXJDdR3h6",
  img:"https://www.northspace.life/wp-content/uploads/2022/12/SOPA-Cafe02.jpeg"},

  {name: 'Lonely Heart ',
  Facebook : 'Lonely Hearts Cafe’ Chiangmai',
  GPS : "https://goo.gl/maps/K58wnHtHpvBDVfx97",
  img:"https://www.northspace.life/wp-content/uploads/2022/12/Lonely-Heart-Cafe-01.jpeg"},

  {name: 'Nabe Bar & Restaurant',
  Facebook : 'Nabe Bar & Restaurant',
  GPS : "https://goo.gl/maps/PbJZvP68a2y8ow7SA",
  img:"https://www.northspace.life/wp-content/uploads/2022/12/Nabe-Bar-Restaurant-02.jpeg"},

  {name: 'CHALUI CAFE',
  Facebook : 'ฉลุย Cafe',
  GPS : "https://goo.gl/maps/W3yi1Guh3CNw19YFA",
  img:"https://www.northspace.life/wp-content/uploads/2022/12/%E0%B8%89%E0%B8%A5%E0%B8%B8%E0%B8%A2-02.jpeg"},

  {name: 'Hom Bar Chiang Mai',
  Facebook : 'Hom Bar Chiangmai',
  GPS : "https://goo.gl/maps/irVioJsM6FB6E1u38",
  img:"https://www.northspace.life/wp-content/uploads/2022/12/Hom-Bar-02.jpeg"},
]); 
</script>

<template>
    <div class="p-3 m-0 border-0 bd-example m-0 border-0">
      <div class="text-center">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="(item, index) in travellist" :key="index">
            <div class="card text-bg-light h-100" style="width: 18rem">
              <img v-if="item.img" :src="item.img" class="card-img-top" alt="Place Image" />
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <RouterLink :to="{ name: 'ANewsCard', params: { name: item.name }}" class="icon-link gap-1 icon-link-hover stretched-link">
                  {{ item.name }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  