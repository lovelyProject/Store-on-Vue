<template>
  <div id="app">Hello world</div>
  <vMainWrapper />
</template>

<script>
import vMainWrapper from "@/components/v-main-wrapper.vue";

export default {
  name: "app",
  components: {
    vMainWrapper,
  },
};
</script>

<style lang="sass">
html
  font-size: 62.5%
*
  box-sizing: border-box
  font-size: 1.6rem
#app
  margin: 0 auto
  max-width: 90rem
  text-align: center
  display: flex
  flex-direction: column
</style>
