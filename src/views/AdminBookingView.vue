<template>
  <div id="titlebar">
    <div class="row">
      <div class="col-md-12">
        <h2>Bookings</h2>
        <!-- Breadcrumbs -->
        <nav id="breadcrumbs">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li>Bookings</li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <div class="row">
    <!-- Listings -->
    <div class="col-lg-12 col-md-12">
      <div class="dashboard-list-box margin-top-0">
        <!-- Booking Requests Filters  -->
        <div class="booking-requests-filter">
          <!-- Sort by -->
          <div class="sort-by">
            <div class="sort-by-select">
              <select
                data-placeholder="Default order"
                class="chosen-select-no-single"
              >
                <option>All Listings</option>
                <option>Burger House</option>
                <option>Tom's Restaurant</option>
                <option>Hotel Govendor</option>
              </select>
            </div>
          </div>

          <!-- Date Range -->
          <div id="booking-date-range">
            <span></span>
          </div>
        </div>

        <!-- Reply to review popup -->
        <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
          <div class="small-dialog-header">
            <h3>Send Message</h3>
          </div>
          <div class="message-reply margin-top-0">
            <textarea
              cols="40"
              rows="3"
              placeholder="Your Message to Kathy"
            ></textarea>
            <button class="button">Send</button>
          </div>
        </div>

        <h4>Booking Requests</h4>
        <ul v-if="adminTickets.length > 0">
          <li
            v-for="ticket in adminTickets"
            :key="ticket.id"
            class="pending-booking"
          >
            <div class="list-box-listing bookings">
              <div class="list-box-listing-img">
                <img
                  :src="ticket.room?.image || defaultRoomImage"
                  :alt="ticket.room?.name || 'Room image'"
                />
              </div>
              <div class="list-box-listing-content">
                <div class="inner">
                  <h3>
                    {{ ticket.room?.name || "Unknown room" }}
                    <span class="booking-status pending">Pending</span>
                    <span class="booking-status unpaid">Unpaid</span>
                  </h3>

                  <div class="inner-booking-list">
                    <h5>Booking Date:</h5>
                    <ul class="booking-list">
                      <li class="highlighted">
                        {{ formatDate(ticket.checkIn) }} -
                        {{ formatDate(ticket.checkOut) }}
                      </li>
                    </ul>
                  </div>

                  <div class="inner-booking-list">
                    <h5>Room Details:</h5>
                    <ul class="booking-list">
                      <li class="highlighted">
                        {{ ticket.room?.guests || 0 }} Guests,
                        {{ ticket.room?.bedRooms || 0 }} Bedroom(s),
                        {{ ticket.room?.bathRooms || 0 }} Bathroom(s)
                      </li>
                    </ul>
                  </div>

                  <div class="inner-booking-list">
                    <h5>Price:</h5>
                    <ul class="booking-list">
                      <li class="highlighted">
                        {{ formatCurrency(ticket.room?.price) }}
                      </li>
                    </ul>
                  </div>

                  <div class="inner-booking-list">
                    <h5>Client:</h5>
                    <ul class="booking-list">
                      <li>{{ ticket.user?.name || "Unknown user" }}</li>
                      <li>{{ ticket.user?.email || "-" }}</li>
                      <li>{{ ticket.user?.phone || "-" }}</li>
                    </ul>
                  </div>

                  <a
                    href="#small-dialog"
                    class="rate-review popup-with-zoom-anim"
                    ><i class="sl sl-icon-envelope-open"></i> Send Message</a
                  >
                </div>
              </div>
            </div>
            <div class="buttons-to-right">
              <a href="#" class="button gray reject"
                ><i class="sl sl-icon-close"></i> Reject</a
              >
              <a href="#" class="button gray approve"
                ><i class="sl sl-icon-check"></i> Approve</a
              >
            </div>
          </li>
        </ul>

        <div v-else class="notification notice margin-top-20">
          No bookings found.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const adminTickets = computed(() => store.state.ticket.adminTickets);
    const defaultRoomImage =
      "http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=120";

    const formatDate = (value) => {
      if (!value) {
        return "-";
      }

      const date = new Date(value);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();

      return `${day}.${month}.${year}`;
    };

    const formatCurrency = (value) => {
      if (value === null || value === undefined) {
        return "-";
      }

      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    };

    onMounted(() => {
      store.dispatch("ticket/findAdminTicketsAction", {});
    });

    return {
      adminTickets,
      defaultRoomImage,
      formatCurrency,
      formatDate,
    };
  },
};
</script>

<style></style>
