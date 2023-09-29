<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import blogHeader from './views/BlogHeader.vue'
</script>

<template>

  <header>
    <blogHeader />
  </header>

  <div class="container">
    <RouterView />
  </div>

</template>

<style scoped>


@media (min-width: 576px) {
  .container { grid-template-columns: repeat(1, 1fr);
  margin-left: 75px;
  margin-right: 75px;
  }
}

@media (min-width: 768px) {
  .container { grid-template-columns: repeat(2, 1fr);
  margin-left: 75px;
  margin-right: 75px;
  }
}

@media (min-width: 992px) {
  .container { grid-template-columns: repeat(2, 1fr);
  margin-left: 75px;
  margin-right: 75px;
  }
}

@media (min-width: 1200px) {
  .container { grid-template-columns: repeat(3, 1fr);
  margin-left: 100px;
  margin-right: 100px;
  }
}

@media (min-width: 1400px) {
  .container { grid-template-columns: repeat(3, 1fr);
  margin-left: 150px;
  margin-right: 150px;
  }
}
</style>
