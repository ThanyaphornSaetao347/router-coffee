<script setup>

import { ref } from 'vue';

const travellist = ref([
  {
    "id": 5,
    "name":'ตะวันแดง', 
    "image":"https://th.bing.com/th/id/R.6fd3de7109e6a325c0d72efb53de2050?rik=Aa1zQxZXAWtxSg&riu=http%3a%2f%2ftawandang.com%2fwp-content%2fuploads%2f2017%2f08%2fTWDjang-Chaeng-Wattana.jpg&ehk=WHcn32JlAx8ZTvDdAHwMb81EWoU%2fiVLDtNNd6K%2bP6Ao%3d&risl=&pid=ImgRaw&r=0"
  },
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