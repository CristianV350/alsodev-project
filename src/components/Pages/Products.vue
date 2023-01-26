<template>
  <div class="container">
    <div class="card-deck">
      <ProductCard v-for="product in products" :key="product.id" :product="product" class="card" @show-modal="showModal"></ProductCard>
      <Modal v-if="modalState" :selectedProduct="selectedProduct" :showModal="modalState" @close-modal="closeModal"></Modal>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import Modal from '../ModalPanel.vue'


export default {
  components: {
    ProductCard,
    Modal
  },
  data() {
    return {
      modalState: false,
      selectedProduct: {},
      products: [
        {
          id: 1,
          name: 'Product 1',
          price: '$10.99',
          image: 'path/to/image.jpg'
        },
        {
          id: 2,
          name: 'Product 2',
          price: '$15.99',
          image: 'path/to/image.jpg'
        }
      ]
    }
  },
  methods: {
    showModal(product) {
      this.modalState = true
      this.selectedProduct = product
    },
    closeModal() {
      this.modalState = false
    }
  }
}
</script>

<style>
.card {
  width: 20rem;
  margin-bottom: 1rem;
}
</style>