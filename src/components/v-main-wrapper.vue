<template>
  <div class="v-main-wrapper">MAIN WRAPPER</div>
  <vCatalog />
  <vCart />
</template>

<script>
import vCatalog from "@/components/v-catalog.vue";
import vCart from "@/components/v-cart.vue";
export default {
  name: "v-main-wrapper",
  components: {
    vCatalog,
    vCart,
  },
};
</script>

<style lang="sass">
.v-main-wrapper
    display: flex
    justify-content: center
    align-items: center
    max-width: 90rem
    margin: 0 auto
</style>
