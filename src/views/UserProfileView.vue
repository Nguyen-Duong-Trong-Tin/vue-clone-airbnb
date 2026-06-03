<template>
  <div id="wrapper">
    <div v-if="!userProfile" class="container">
      <div class="user-profile-loading">Loading profile...</div>
    </div>

    <div v-else class="user-profile-content">
      <!-- Titlebar
================================================== -->
      <div id="titlebar" class="gradient">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="user-profile-titlebar">
                <div class="user-profile-avatar">
                  <img
                    :src="
                      userProfile.avatar || 'images/user-profile-avatar.jpg'
                    "
                    :alt="userProfile.name"
                  />
                </div>
                <div class="user-profile-name">
                  <h2>{{ userProfile.name }}</h2>
                  <div class="profile-meta">
                    <span>{{ userProfile.type }}</span>
                    <span>{{ userProfile.gender ? "Male" : "Female" }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content
================================================== -->
      <div class="container">
        <div class="row sticky-wrapper">
          <!-- Sidebar
		================================================== -->
          <div class="col-lg-4 col-md-4 margin-top-0">
            <!-- Verified Badge -->
            <div
              class="verified-badge with-tip"
              data-tip-content="Account has been verified and belongs to the person or organization represented."
            >
              <i class="sl sl-icon-user-following"></i> {{ userProfile.type }}
            </div>

            <!-- Contact -->
            <div class="boxed-widget margin-top-30 margin-bottom-50">
              <h3>Contact</h3>
              <ul class="listing-details-sidebar">
                <li>
                  <i class="sl sl-icon-phone"></i> {{ userProfile.phone }}
                </li>
                <li>
                  <i class="fa fa-envelope-o"></i>
                  <a :href="`mailto:${userProfile.email}`">{{
                    userProfile.email
                  }}</a>
                </li>
                <li>
                  <i class="sl sl-icon-badge"></i> ID #{{ userProfile.id }}
                </li>
                <li>
                  <i class="sl sl-icon-calendar"></i>
                  {{ userProfile.birthdate }}
                </li>
              </ul>

              <ul class="listing-details-sidebar social-profiles">
                <li>
                  <a href="#" class="facebook-profile"
                    ><i class="fa fa-facebook-square"></i> Facebook</a
                  >
                </li>
                <li>
                  <a href="#" class="twitter-profile"
                    ><i class="fa fa-twitter"></i> Twitter</a
                  >
                </li>
                <!-- <li><a href="#" class="gplus-profile"><i class="fa fa-google-plus"></i> Google Plus</a></li> -->
              </ul>

              <!-- Reply to review popup -->
              <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
                <div class="small-dialog-header">
                  <h3>Send Message</h3>
                </div>
                <div class="message-reply margin-top-0">
                  <textarea
                    cols="40"
                    rows="3"
                    :placeholder="`Your message to ${userProfile.name}`"
                  ></textarea>
                  <button class="button">Send Message</button>
                </div>
              </div>

              <a
                href="#small-dialog"
                class="send-message-to-owner button popup-with-zoom-anim"
                ><i class="sl sl-icon-envelope-open"></i> Send Message</a
              >
            </div>
            <!-- Contact / End-->
          </div>
          <!-- Sidebar / End -->

          <!-- Content
		================================================== -->
          <div class="col-lg-8 col-md-8 padding-left-30">
            <h3 class="margin-top-0 margin-bottom-40">
              {{ userProfile.name }}'s Profile
            </h3>

            <div class="boxed-widget margin-bottom-30">
              <h3>About</h3>
              <ul class="listing-details-sidebar">
                <li><strong>Name:</strong> {{ userProfile.name }}</li>
                <li><strong>Email:</strong> {{ userProfile.email }}</li>
                <li><strong>Phone:</strong> {{ userProfile.phone }}</li>
                <li><strong>Birthdate:</strong> {{ userProfile.birthdate }}</li>
                <li>
                  <strong>Gender:</strong>
                  {{ userProfile.gender ? "Male" : "Female" }}
                </li>
                <li><strong>Type:</strong> {{ userProfile.type }}</li>
                <li><strong>Address:</strong> {{ userProfile.address }}</li>
              </ul>
            </div>

            <!-- Listings Container -->
            <div class="row">
              <template v-if="userProfileTickets && userProfileTickets.length">
                <div
                  class="col-lg-12 col-md-12"
                  v-for="ticket in userProfileTickets"
                  :key="ticket.id"
                >
                  <div class="listing-item-container list-layout">
                    <a :href="`/rooms/${ticket.room.id}`" class="listing-item">
                      <!-- Image -->
                      <div class="listing-item-image">
                        <img :src="ticket.room.image" :alt="ticket.room.name" />
                        <span class="tag">{{
                          ticket.room.location?.name || "Room"
                        }}</span>
                      </div>

                      <!-- Content -->
                      <div class="listing-item-content">
                        <div class="listing-badge now-open">Booked</div>

                        <div class="listing-item-inner">
                          <h3>{{ ticket.room.name }}</h3>
                          <span>{{
                            ticket.room.location?.province ||
                            ticket.room.location?.name
                          }}</span>
                          <div class="star-rating" data-rating="4.5">
                            <div class="rating-counter">
                              Booked ID #{{ ticket.id }}
                            </div>
                          </div>
                        </div>

                        <span class="like-icon"></span>

                        <div class="listing-item-details">
                          From
                          {{ new Date(ticket.checkIn).toLocaleDateString() }} -
                          {{ new Date(ticket.checkOut).toLocaleDateString() }} •
                          {{ formatCurrency(ticket.room.price) }}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </template>
              <div class="col-md-12 browse-all-user-listings" v-else>
                <a href="#">No booked rooms to show</a>
              </div>
            </div>
            <!-- Listings Container / End -->

            <!-- Reviews -->
            <div id="listing-reviews" class="listing-section">
              <h3 class="margin-top-60 margin-bottom-20">Reviews</h3>

              <div class="clearfix"></div>

              <!-- Reviews -->
              <section class="comments listing-reviews">
                <ul>
                  <li>
                    <div class="avatar">
                      <img
                        src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                        alt=""
                      />
                    </div>
                    <div class="comment-content">
                      <div class="arrow-comment"></div>
                      <div class="comment-by">
                        Kathy Brown
                        <div class="comment-by-listing">
                          on <a href="#">Burger House</a>
                        </div>
                        <span class="date">June 2019</span>
                        <div class="star-rating" data-rating="5"></div>
                      </div>
                      <p>
                        Morbi velit eros, sagittis in facilisis non, rhoncus et
                        erat. Nam posuere tristique sem, eu ultricies tortor
                        imperdiet vitae. Curabitur lacinia neque non metus
                      </p>

                      <div class="review-images mfp-gallery-container">
                        <a href="images/review-image-01.jpg" class="mfp-gallery"
                          ><img src="images/review-image-01.jpg" alt=""
                        /></a>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="avatar">
                      <img
                        src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                        alt=""
                      />
                    </div>
                    <div class="comment-content">
                      <div class="arrow-comment"></div>
                      <div class="comment-by">
                        John Doe
                        <div class="comment-by-listing">
                          on <a href="#">Tom's Restaurant</a>
                        </div>
                        <span class="date">May 2019</span>
                        <div class="star-rating" data-rating="4"></div>
                      </div>
                      <p>
                        Commodo est luctus eget. Proin in nunc laoreet justo
                        volutpat blandit enim. Sem felis, ullamcorper vel
                        aliquam non, varius eget justo. Duis quis nunc tellus
                        sollicitudin mauris.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div class="avatar">
                      <img
                        src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                        alt=""
                      />
                    </div>
                    <div class="comment-content">
                      <div class="arrow-comment"></div>
                      <div class="comment-by">
                        Kathy Brown
                        <div class="comment-by-listing">
                          on <a href="#">Burger House</a>
                        </div>
                        <span class="date">June 2019</span>
                        <div class="star-rating" data-rating="5"></div>
                      </div>
                      <p>
                        Morbi velit eros, sagittis in facilisis non, rhoncus et
                        erat. Nam posuere tristique sem, eu ultricies tortor
                        imperdiet vitae. Curabitur lacinia neque non metus
                      </p>

                      <div class="review-images mfp-gallery-container">
                        <a href="images/review-image-02.jpg" class="mfp-gallery"
                          ><img src="images/review-image-02.jpg" alt=""
                        /></a>
                        <a href="images/review-image-03.jpg" class="mfp-gallery"
                          ><img src="images/review-image-03.jpg" alt=""
                        /></a>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="avatar">
                      <img
                        src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                        alt=""
                      />
                    </div>
                    <div class="comment-content">
                      <div class="arrow-comment"></div>
                      <div class="comment-by">
                        John Doe
                        <div class="comment-by-listing">
                          on <a href="#">Hotel Govendor</a>
                        </div>
                        <span class="date">May 2019</span>
                        <div class="star-rating" data-rating="5"></div>
                      </div>
                      <p>
                        Commodo est luctus eget. Proin in nunc laoreet justo
                        volutpat blandit enim. Sem felis, ullamcorper vel
                        aliquam non, varius eget justo. Duis quis nunc tellus
                        sollicitudin mauris.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              <!-- Pagination -->
              <div class="clearfix"></div>
              <div class="row">
                <div class="col-md-12">
                  <!-- Pagination -->
                  <div class="pagination-container margin-top-30">
                    <nav class="pagination">
                      <ul>
                        <li><a href="#" class="current-page">1</a></li>
                        <li><a href="#">2</a></li>
                        <li>
                          <a href="#"><i class="sl sl-icon-arrow-right"></i></a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
              <!-- Pagination / End -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const userId = route.params.userId;

    const userProfile = computed(() => store.state.user.userProfile);
    const userProfileTickets = computed(
      () => store.state.ticket.userProfileTickets
    );

    store.dispatch("user/findUserByIdAction", userId);
    store.dispatch("ticket/findUserProfileTicketsAction", { userId });

    console.log(userProfileTickets.value);

    function formatCurrency(amount) {
      try {
        return new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(amount);
      } catch (e) {
        return amount;
      }
    }

    return {
      userProfile,
      userProfileTickets,
      formatCurrency,
    };
  },
};
</script>

<style scoped>
.user-profile-loading {
  padding: 48px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
}

.profile-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
}

.profile-meta span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
}

.user-ticket-item {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  align-items: center;
}
.user-ticket-item .ticket-thumb img {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}
.user-ticket-item .ticket-info h4 {
  margin: 0 0 6px 0;
}

/* simple currency filter fallback styling handled in template */
</style>
