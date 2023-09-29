<script setup>
import { ref } from 'vue';
const travellist = ref([
  {
    "id": 4,
    "name":"WarmUp",
    "image":"https://d136usn7jnoe61.cloudfront.net/pictures/21526/s2n_0002_p1d06tc4oou8jlkvr0l1mag1grj6.jpg"},

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