<template>
  <the-header />
  <main>
    <slot />
  </main>
  <the-footer />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: { TheHeader, TheFooter },
};
</script>

<style scoped>
main {
  min-height: 100vh;
}
</style>
