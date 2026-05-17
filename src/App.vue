<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

export default {
  setup() {
    const route = useRoute();
    const layoutComponent = computed(() => {
      return route.meta?.layout === "auth" ? AuthLayout : DefaultLayout;
    });
    return { layoutComponent };
  },
};
</script>

<style lang="scss"></style>
