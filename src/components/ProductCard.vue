<template>
  <div>
    <img :src="product.image" alt="product image">
    <h2>{{ product.name }}</h2>
    <p>{{ product.price }}</p>
     <button v-on:click="showModal(product)" class="btn btn-primary">View Details</button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    showModal(product) {
      this.$emit('show-modal', product)
    }
  }
}
</script>