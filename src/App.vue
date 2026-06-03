<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";

export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const layoutComponent = computed(() => {
      if (route.meta?.layout === "auth") {
        return AuthLayout;
      }

      if (route.meta?.layout === "admin") {
        return AdminLayout;
      }

      return DefaultLayout;
    });

    onMounted(() => {
      if (!store.state.auth.userLoginedIn) {
        store.dispatch("auth/initAction");
      }
    });

    return { layoutComponent };
  },
};
</script>

<style lang="scss"></style>
