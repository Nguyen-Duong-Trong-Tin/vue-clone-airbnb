<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <the-banner></the-banner>

    <the-categories></the-categories>

    <the-places></the-places>

    <the-reviews></the-reviews>

    <the-plan></the-plan>

    <the-blog></the-blog>
  </div>
  <!-- Wrapper / End -->
</template>

<script>
import TheBanner from "@/components/TheBanner.vue";
import TheCategories from "@/components/TheCategories.vue";
import ThePlaces from "@/components/ThePlaces.vue";
import ThePlan from "@/components/ThePlan.vue";
import TheReviews from "@/components/TheReviews.vue";
import TheBlog from "@/components/TheBlog.vue";

export default {
  components: {
    TheBanner,
    TheCategories,
    ThePlaces,
    TheReviews,
    ThePlan,
    TheBlog,
  },
};
</script>
