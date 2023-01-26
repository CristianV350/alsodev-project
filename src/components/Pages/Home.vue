<template>
  <div class="container">
    <div class="row">
      <router-link
        class="col-sm-4"
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :to="{ name: 'products', params: {restaurant: restaurant.id } }">
        <RestaurantCard :restaurant="restaurant"></RestaurantCard>
      </router-link>
    </div>
  </div>
</template>

<script>
import RestaurantCard from '@/components/RestaurantCard.vue'

export default {
  name: "Home",
  components: {
    RestaurantCard
  },
  data() {
    return {
      restaurants: [
        {
          id: 1,
          name: 'Restaurant 1',
          location: 'New York',
          image: 'path/to/image.jpg'
        },
        {
          id: 2,
          name: 'Restaurant 2',
          location: 'Los Angeles',
          image: 'path/to/image.jpg'
        }
      ]
    }
  }
}
</script>