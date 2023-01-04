<template>
  <div class="v-catalog-item">
    <img :src="product_data.image" alt="img" />
    <p>{{ product_data.name }}</p>
    <p>Price {{ product_data.price }}P</p>
    <button @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "vCatalogItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("getToCart", {
        product: this.product_data,
      });
    },
  },
};
</script>
<style lang="sass">
.v-catalog-item
    flex-basis: 25%
    box-shadow: 0 0 .8rem 0 #e0e0e0
    padding: 1.6rem
    margin-bottom: .8rem
    margin-right: .8rem
    &  img
        width: 100%
</style>
