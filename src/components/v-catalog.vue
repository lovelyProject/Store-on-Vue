<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <vCatalogItem
        v-for="product in GET_PRODUCTS"
        :key="product.article"
        :product_data="product"
        @getToCart="showChild"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "@/components/v-catalog-items.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "vCatalog",
  components: {
    vCatalogItem,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    showChild(data) {
      console.log(data);
    },
  },
  computed: {
    ...mapGetters(["GET_PRODUCTS"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="sass">
.v-catalog__list
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    align-items: center
</style>
