<template>
  <div class="card" style="width: 18rem;">
    <img :src="restaurant.image" class="card-img-top" alt="restaurant image">
    <div class="card-body">
      <h2 class="card-title">{{ restaurant.name }}</h2>
      <p class="card-text">{{ restaurant.location }}</p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    restaurant: {
      type: Object,
      required: true
    }
  }
}
</script>