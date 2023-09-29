<script setup>

import { ref } from 'vue';

const travellist = ref([
  {
    "id": 3,
    "name":"RiverSide" , 
    "image":"https://th.bing.com/th/id/R.ab9802205edc889cdc62f84af245316c?rik=EUFmNFFfO91eJA&riu=http%3a%2f%2fwww.dooasia.com%2fwp-content%2fuploads%2f2018%2f05%2fThe-RiverSide-%e0%b9%80%e0%b8%8a%e0%b8%b5%e0%b8%a2%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-7-696x464.jpg&ehk=IfTrEAF8BEuE9hJhtMKHQNYZmV%2boSJEesY%2fzQmFNYoo%3d&risl=&pid=ImgRaw&r=0"},

])


</script>


<template>
  <div class="card" v-for="(n) in travellist" :key="n">
    <img :src="n.image" :alt="name" style="width:100%" class="bordered-image">
    <div class="container-all">
      <h2>{{ n.name }}</h2>
      <div class="container">
        <button type="button" class="btn">จองโต๊ะ</button>
      </div>
    </div>
  </div>

</template>


<style scoped>

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.6s;
  border-radius: 10px;
  background-color: white;
  margin-left: 200px;
  margin-right: 200px;
}
.container-all {
  padding: 10px 25px;
}

.container {
  text-align: center;
}
.btn {
  text-align: center;
  width: 80px;
  height: 40px;
  font-size: 16px;
  border-radius: 10px;
  background-color: lightblue;
  border: 0;
}

.btn:hover {
  color: white;
  background-color: lightcoral;
  transition: 0.6s;
  border: 0;
}
.bordered-image{
  border-radius: 5px;
}
</style>