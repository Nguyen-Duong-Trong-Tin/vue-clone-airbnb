<template>
  <div class="main-search-input">
    <div class="main-search-input-item">
      <input type="text" placeholder="What are you looking for?" value="" />
    </div>

    <div class="main-search-input-item location">
      <div id="autocomplete-container">
        <input
          id="autocomplete-input"
          type="text"
          placeholder="Location"
          v-model="keyword"
        />
      </div>
      <a href="#"><i class="fa fa-map-marker"></i></a>
      <ul v-if="keyword.length" class="list-location">
        <li
          v-for="location in locations"
          :key="location.id"
          @click="handleNavigateToRoomsPage(location.id)"
        >
          <span class="im im-icon-Location-2"></span>
          <span class="location-item-title">{{ location.name }}</span>
        </li>
      </ul>
    </div>

    <div class="main-search-input-item">
      <select data-placeholder="All Categories" class="chosen-select">
        <option>All Categories</option>
        <option>Shops</option>
        <option>Hotels</option>
        <option>Restaurants</option>
        <option>Fitness</option>
        <option>Events</option>
      </select>
    </div>

    <button
      class="button"
      onclick="window.location.href='listings-half-screen-map-list.html'"
    >
      Search
    </button>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const keyword = ref("");

    const locations = computed(() => store.state.location.locations);

    watch(keyword, (newKeyword) => {
      if (newKeyword) {
        store.dispatch("location/findLocationsAction", { name: newKeyword });
      }
    });

    const handleNavigateToRoomsPage = (locationId) => {
      router.push(`/rooms?locationId=${locationId}`);
    };

    store.dispatch("location/findLocationsAction");

    return {
      keyword,
      locations,
      handleNavigateToRoomsPage,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-search-input-item.location {
  position: relative;

  .list-location {
    position: absolute;
    top: 150%;
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 0 0 12px 12px;
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
    z-index: 10;
    overflow: hidden;

    li {
      display: flex;
      align-items: center;
      padding: 10px;

      &:hover {
        background-color: #f5f5f5;
      }

      .location-item-title {
        margin-left: 10px;
      }
    }
  }
}
</style>
