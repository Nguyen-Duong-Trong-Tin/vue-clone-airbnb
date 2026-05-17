<template>
  <div
    class="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready auth-background"
    tabindex="-1"
  >
    <div class="mfp-container mfp-inline-holder">
      <div class="mfp-content">
        <div id="sign-in-dialog" class="zoom-anim-dialog">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.auth-background {
  background: url("https://news.airbnb.com/wp-content/uploads/sites/4/2020/04/Airbnb_Bali_Bamboo_House.jpg")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  top: 0;
  left: 0;
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
}
</style>
