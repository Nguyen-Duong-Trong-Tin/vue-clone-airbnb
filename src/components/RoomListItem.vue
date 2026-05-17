<template>
  <!-- Listing Item -->
  <div class="col-lg-12 col-md-12">
    <div class="listing-item-container list-layout" data-marker-id="1">
      <router-link :to="`/room-detail/${room.id}`" class="listing-item">
        <!-- Image -->
        <div class="listing-item-image">
          <img :src="room.image" :alt="room.name" />
          <span class="tag">Eat & Drink</span>
        </div>

        <!-- Content -->
        <div class="listing-item-content">
          <div class="listing-badge now-open">Now Open</div>

          <div class="listing-item-inner">
            <h3>{{ room.name }} <i class="verified-icon"></i></h3>
            <span
              >{{ room.location.province }}, {{ room.location.country }}</span
            >
            <div class="star-rating" data-rating="3.5">
              <div class="rating-counter">(12 reviews)</div>
            </div>
          </div>

          <span class="like-icon"></span>
        </div>
      </router-link>
    </div>
  </div>
  <!-- Listing Item / End -->
</template>

<script>
export default {
  props: {
    room: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
