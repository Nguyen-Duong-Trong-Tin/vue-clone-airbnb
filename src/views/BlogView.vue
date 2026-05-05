<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <the-title-bar></the-title-bar>

    <the-content></the-content>
  </div>
  <!-- Wrapper / End -->
</template>
<script>
import TheTitleBar from "@/components/TheTitleBar.vue";
import TheContent from "@/components/TheContent.vue";

export default {
  components: {
    TheTitleBar,
    TheContent,
  },
};
</script>
<style></style>
