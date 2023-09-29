<script setup>

import { ref } from 'vue';

const travallist = ref([
  {
    "id": 1,
    "name":"ท่าช้าง", 
    "image":"https://p-u.popcdn.net/event_details/posters/000/008/856/original/cfe1b94d03c5137faf1500f98117421e9f2ac9db.jpg?1590662796"
  },
])


</script>

<template>
  <div class="card" v-for="(n) in travallist" :key="n">
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
  padding: 20px 25px;
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
  color: white;
  background-color: #210440;
  border: 0;
}

.btn:hover {
  color: white;
  background-color: #fdb095;
  transition: 0.6s;
  border: 0;
}
.bordered-image{
  border-radius: 5px;
}
</style>