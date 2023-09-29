<script>
export default {
  props: ['id', 'name', 'img','readmore']
}
</script>

<template>
  <div class="card">
    <img :src="img" :alt="name" style="width:100%" class="bordered-image">
    <div class="container">
      <router-link :to="'/travelListDetail/'+id">
        {{ name }}
      </router-link>

    </div>
    <RouterView/>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.6s;
  margin: 30px;
  border-radius: 10px;
  background-color: white;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  padding: 20px;
}
.container {
  padding: 10px 25px;
  justify-content: center;
  align-items: center;
}
.bordered-image{
  border-radius: 5px;
}
</style>