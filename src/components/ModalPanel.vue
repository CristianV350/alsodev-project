<template>
  <div class="modal" :class="{ 'd-block': showModal }">
    <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedProduct.name }}</h5>
            <button type="button" class="close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="selectedProduct.image" class="img-fluid" alt="product image">
            <p>{{ selectedProduct.description }}</p>
            <p>Price: {{ selectedProduct.price }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedProduct: {
      type: Object,
      required: true,
    },
    showModal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit("close-modal")
    }
  }
}
</script>