<template>
  <div id="wrapper">
    <the-admin-header></the-admin-header>

    <div id="dashboard">
      <the-admin-menu></the-admin-menu>

      <div class="dashboard-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import TheAdminHeader from "@/components/TheAdminHeader.vue";
import TheAdminMenu from "@/components/TheAdminMenu.vue";

export default {
  components: {
    TheAdminHeader,
    TheAdminMenu,
  },
};
</script>
