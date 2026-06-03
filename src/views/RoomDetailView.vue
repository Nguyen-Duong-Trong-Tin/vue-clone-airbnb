<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Gradient-->
    <div class="single-listing-page-titlebar"></div>

    <!-- Content
================================================== -->
    <div class="container">
      <div class="row sticky-wrapper">
        <div class="col-lg-8 col-md-8 padding-right-30">
          <!-- Titlebar -->
          <div id="titlebar" class="listing-titlebar" v-if="roomDetail">
            <div class="listing-titlebar-title">
              <h2>
                {{ roomDetail.name }}<span class="listing-tag">Apartments</span>
              </h2>
              <span>
                <a href="#listing-location" class="listing-address">
                  <i class="fa fa-map-marker"></i>
                  {{ roomDetail.location.province }},
                  {{ roomDetail.location.country }}
                </a>
              </span>
              <div class="star-rating" data-rating="5">
                <div class="rating-counter">
                  <a href="#listing-reviews"
                    >({{ roomDetail.reviews.length }} reviews)</a
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Listing Nav -->
          <div id="listing-nav" class="listing-nav-container">
            <ul class="listing-nav">
              <li><a href="#listing-overview" class="active">Overview</a></li>
              <li><a href="#listing-gallery">Gallery</a></li>
              <li><a href="#listing-location">Location</a></li>
              <li><a href="#listing-reviews">Reviews</a></li>
              <li><a href="#add-review">Add Review</a></li>
            </ul>
          </div>

          <!-- Overview -->
          <div id="listing-overview" class="listing-section" v-if="roomDetail">
            <!-- Apartment Description -->
            <ul class="apartment-details">
              <li>{{ roomDetail.guests }} guests</li>
              <li>{{ roomDetail.bedRooms }} bed rooms</li>
              <li>{{ roomDetail.badRooms }} bath rooms</li>
            </ul>

            <!-- Description -->
            <p>
              {{ roomDetail.description }}
            </p>

            <!-- Listing Contacts -->
            <div class="listing-links-container">
              <ul class="listing-links contact-links">
                <li>
                  <a href="tel:12-345-678" class="listing-links"
                    ><i class="fa fa-phone"></i> +12 345 6578</a
                  >
                </li>
                <li>
                  <a href="mailto:mail@example.com" class="listing-links"
                    ><i class="fa fa-envelope-o"></i> mail@example.com</a
                  >
                </li>
                <li>
                  <a href="#" target="_blank" class="listing-links"
                    ><i class="fa fa-link"></i> www.example.com</a
                  >
                </li>
              </ul>
              <div class="clearfix"></div>

              <ul class="listing-links">
                <li>
                  <a href="#" target="_blank" class="listing-links-fb"
                    ><i class="fa fa-facebook-square"></i> Facebook</a
                  >
                </li>
                <li>
                  <a href="#" target="_blank" class="listing-links-yt"
                    ><i class="fa fa-youtube-play"></i> YouTube</a
                  >
                </li>
                <li>
                  <a href="#" target="_blank" class="listing-links-ig"
                    ><i class="fa fa-instagram"></i> Instagram</a
                  >
                </li>
                <li>
                  <a href="#" target="_blank" class="listing-links-tt"
                    ><i class="fa fa-twitter"></i> Twitter</a
                  >
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>

            <!-- Amenities -->
            <h3 class="listing-desc-headline">Amenities</h3>
            <ul class="listing-features checkboxes">
              <li v-if="roomDetail.elevator">Elevator</li>
              <li v-if="roomDetail.hotTub">Hot tub</li>
              <li v-if="roomDetail.pool">Pool</li>
              <li v-if="roomDetail.indoorFireplace">Indoor fireplace</li>
              <li v-if="roomDetail.dryer">Dryer</li>
              <li v-if="roomDetail.gym">Gym</li>
              <li v-if="roomDetail.kitchen">Kitchen</li>
              <li v-if="roomDetail.wifi">Wifi</li>
              <li v-if="roomDetail.heating">Heating</li>
              <li v-if="roomDetail.cableTV">Cable TV</li>
            </ul>
          </div>

          <!-- Slider -->
          <div id="listing-gallery" class="listing-section" v-if="roomDetail">
            <h3 class="listing-desc-headline margin-top-70">Gallery</h3>
            <div
              class="listing-slider-small mfp-gallery-container margin-bottom-0"
            >
              <a
                :href="roomDetail.image"
                :data-background-image="roomDetail.image"
                class="item mfp-gallery"
                title="Title 2"
              ></a>
            </div>
          </div>

          <!-- Location -->
          <div id="listing-location" class="listing-section">
            <h3 class="listing-desc-headline margin-top-60 margin-bottom-30">
              Location
            </h3>

            <div id="singleListingMap-container">
              <div
                id="singleListingMap"
                data-latitude="40.70437865245596"
                data-longitude="-73.98674011230469"
                data-map-icon="im im-icon-Hamburger"
              ></div>
              <a href="#" id="streetView">Street View</a>
            </div>
          </div>

          <!-- Reviews -->
          <div
            id="listing-reviews"
            class="listing-section"
            v-if="roomDetail && roomDetail.reviews.length"
          >
            <h3 class="listing-desc-headline margin-top-75 margin-bottom-20">
              Reviews <span>({{ roomDetail.reviews.length }})</span>
            </h3>

            <!-- Rating Overview -->
            <div class="rating-overview">
              <div class="rating-overview-box">
                <span class="rating-overview-box-total">4.7</span>
                <span class="rating-overview-box-percent">out of 5.0</span>
                <div class="star-rating" data-rating="5"></div>
              </div>

              <div class="rating-bars">
                <div class="rating-bars-item">
                  <span class="rating-bars-name"
                    >Service
                    <i
                      class="tip"
                      data-tip-content="Quality of customer service and attitude to work with you"
                    ></i
                  ></span>
                  <span class="rating-bars-inner">
                    <span class="rating-bars-rating" data-rating="4.7">
                      <span class="rating-bars-rating-inner"></span>
                    </span>
                    <strong>4.7</strong>
                  </span>
                </div>
                <div class="rating-bars-item">
                  <span class="rating-bars-name"
                    >Value for Money
                    <i
                      class="tip"
                      data-tip-content="Overall experience received for the amount spent"
                    ></i
                  ></span>
                  <span class="rating-bars-inner">
                    <span class="rating-bars-rating" data-rating="3.8">
                      <span class="rating-bars-rating-inner"></span>
                    </span>
                    <strong>3.8</strong>
                  </span>
                </div>
                <div class="rating-bars-item">
                  <span class="rating-bars-name"
                    >Location
                    <i
                      class="tip"
                      data-tip-content="Visibility, commute or nearby parking spots"
                    ></i
                  ></span>
                  <span class="rating-bars-inner">
                    <span class="rating-bars-rating" data-rating="2.7">
                      <span class="rating-bars-rating-inner"></span>
                    </span>
                    <strong>2.7</strong>
                  </span>
                </div>
                <div class="rating-bars-item">
                  <span class="rating-bars-name"
                    >Cleanliness
                    <i
                      class="tip"
                      data-tip-content="The physical condition of the business"
                    ></i
                  ></span>
                  <span class="rating-bars-inner">
                    <span class="rating-bars-rating" data-rating="5.0">
                      <span class="rating-bars-rating-inner"></span>
                    </span>
                    <strong>5.0</strong>
                  </span>
                </div>
              </div>
            </div>
            <!-- Rating Overview / End -->

            <div class="clearfix"></div>

            <!-- Reviews -->
            <section
              class="comments listing-reviews"
              v-if="roomDetail && roomDetail.reviews.length"
            >
              <ul>
                <li v-for="review in roomDetail.reviews" :key="review.id">
                  <div class="avatar">
                    <img :src="review.user.avatar" :alt="review.user.name" />
                  </div>
                  <div class="comment-content">
                    <div class="arrow-comment"></div>
                    <div class="comment-by">
                      {{ review.user.name }}
                      <i
                        class="tip"
                        data-tip-content="Person who left this review actually was a customer"
                      ></i>
                      <span class="date">June 2019</span>
                      <div class="star-rating" data-rating="5"></div>
                    </div>
                    <p>
                      {{ review.content }}
                    </p>
                    <a href="#" class="rate-review"
                      ><i class="sl sl-icon-like"></i> Helpful Review
                      <span>12</span></a
                    >
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

          <!-- Add Review Box -->
          <div id="add-review" class="add-review-box">
            <!-- Add Review -->
            <h3 class="listing-desc-headline margin-bottom-10">Add Review</h3>
            <p class="comment-notes">
              Your email address will not be published.
            </p>

            <!-- Subratings Container -->
            <div class="sub-ratings-container">
              <!-- Subrating #1 -->
              <div class="add-sub-rating">
                <div class="sub-rating-title">
                  Service
                  <i
                    class="tip"
                    data-tip-content="Quality of customer service and attitude to work with you"
                  ></i>
                </div>
                <div class="sub-rating-stars">
                  <!-- Leave Rating -->
                  <div class="clearfix"></div>
                  <form class="leave-rating">
                    <input type="radio" name="rating" id="rating-1" value="1" />
                    <label for="rating-1" class="fa fa-star"></label>
                    <input type="radio" name="rating" id="rating-2" value="2" />
                    <label for="rating-2" class="fa fa-star"></label>
                    <input type="radio" name="rating" id="rating-3" value="3" />
                    <label for="rating-3" class="fa fa-star"></label>
                    <input type="radio" name="rating" id="rating-4" value="4" />
                    <label for="rating-4" class="fa fa-star"></label>
                    <input type="radio" name="rating" id="rating-5" value="5" />
                    <label for="rating-5" class="fa fa-star"></label>
                  </form>
                </div>
              </div>

              <!-- Subrating #2 -->
              <div class="add-sub-rating">
                <div class="sub-rating-title">
                  Value for Money
                  <i
                    class="tip"
                    data-tip-content="Overall experience received for the amount spent"
                  ></i>
                </div>
                <div class="sub-rating-stars">
                  <!-- Leave Rating -->
                  <div class="clearfix"></div>
                  <form class="leave-rating">
                    <input
                      type="radio"
                      name="rating"
                      id="rating-11"
                      value="1"
                    />
                    <label for="rating-11" class="fa fa-star"></label>
                    <input
                      type="radio"
                      name="rating"
                      id="rating-12"
                      value="2"
                    />
                    <label for="rating-12" class="fa fa-star"></label>
                    <input
                      type="radio"
                      name="rating"
                      id="rating-13"
                      value="3"
                    />
                    <label for="rating-13" class="fa fa-star"></label>
                    <input
                      type="radio"
                      name="rating"
                      id="rating-14"
                      value="4"
                    />
                    <label for="rating-14" class="fa fa-star"></label>
                    <input
                      type="radio"
                      name="rating"
                      id="rating-15"
                      value="5"
                    />
                    <label for="rating-15" class="fa fa-star"></label>
                  </form>
                </div>
              </div>

              <!-- Subrating #3 -->
              <div class="add-sub-rating">
                <div class="sub-rating-title">
                  Location
                  <i
                    class="tip"
                    data-tip-content="Visibility, commute or nearby parking spots"
                  ></i>
                </div>
                <div class="sub-rating-stars">
                  <!-- Leave Rating -->
                  <div class="clearfix"></div>
                  <form class="leave-rating">
                    <input
                      type="radio"
                      name="rating"
                      id="rating-21"
                      value="1"
                    />
                    <label for="rating-21" class="fa fa-star"></label>
                    <input
                      type="radio"
                      name="rating"
                      id="rating-22"
                      value="2"
                    />
                    <label for="rating-22" class="fa fa-star"></label>
                    <input
                      type="radio"
                      name="rating"
                      id="rating-23"
                      value="3"
                    />
                    <label for="rating-23" class="fa fa-star"></label>
                    <input
                      type="radio"
                      name="rating"
                      id="rating-24"
                      value="4"
                    />
                    <label for="rating-24" class="fa fa-star"></label>
                    <input
                      type="radio"
                      name="rating"
                      id="rating-25"
                      value="5"
                    />
                    <label for="rating-25" class="fa fa-star"></label>
                  </form>
                </div>
              </div>

              <!-- Subrating #4 -->
              <div class="add-sub-rating">
                <div class="sub-rating-title">
                  Cleanliness
                  <i
                    class="tip"
                    data-tip-content="The physical condition of the business"
                  ></i>
                </div>
                <div class="sub-rating-stars">
                  <!-- Leave Rating -->
                  <div class="clearfix"></div>
                  <form class="leave-rating">
                    <input
                      type="radio"
                      name="rating"
                      id="rating-31"
                      value="1"
                    />
                    <label for="rating-31" class="fa fa-star"></label>
                    <input
                      type="radio"
                      name="rating"
                      id="rating-32"
                      value="2"
                    />
                    <label for="rating-32" class="fa fa-star"></label>
                    <input
                      type="radio"
                      name="rating"
                      id="rating-33"
                      value="3"
                    />
                    <label for="rating-33" class="fa fa-star"></label>
                    <input
                      type="radio"
                      name="rating"
                      id="rating-34"
                      value="4"
                    />
                    <label for="rating-34" class="fa fa-star"></label>
                    <input
                      type="radio"
                      name="rating"
                      id="rating-35"
                      value="5"
                    />
                    <label for="rating-35" class="fa fa-star"></label>
                  </form>
                </div>
              </div>

              <!-- Uplaod Photos -->
              <div class="uploadButton margin-top-15">
                <input
                  class="uploadButton-input"
                  type="file"
                  name="attachments[]"
                  accept="image/*, application/pdf"
                  id="upload"
                  multiple
                />
                <label class="uploadButton-button ripple-effect" for="upload"
                  >Add Photos</label
                >
                <span class="uploadButton-file-name"></span>
              </div>
              <!-- Uplaod Photos / End -->
            </div>
            <!-- Subratings Container / End -->

            <!-- Review Comment -->
            <form id="add-comment" class="add-comment">
              <fieldset>
                <div class="row">
                  <div class="col-md-6">
                    <label>Name:</label>
                    <input type="text" value="" />
                  </div>

                  <div class="col-md-6">
                    <label>Email:</label>
                    <input type="text" value="" />
                  </div>
                </div>

                <div>
                  <label>Review:</label>
                  <textarea cols="40" rows="3"></textarea>
                </div>
              </fieldset>

              <button class="button">Submit Review</button>
              <div class="clearfix"></div>
            </form>
          </div>
          <!-- Add Review Box / End -->
        </div>

        <!-- Sidebar
		================================================== -->
        <div class="col-lg-4 col-md-4 margin-top-75 sticky">
          <!-- Verified Badge -->
          <div
            class="verified-badge with-tip"
            data-tip-content="Listing has been verified and belongs the business owner or manager."
          >
            <i class="sl sl-icon-check"></i> Verified Listing
          </div>

          <!-- Book Now -->
          <div
            id="booking-widget-anchor"
            class="boxed-widget booking-widget margin-top-35"
          >
            <h3><i class="fa fa-calendar-check-o"></i> Booking</h3>
            <div class="row with-forms margin-top-0">
              <!-- Date Range Picker - docs: http://www.daterangepicker.com/ -->
              <div class="col-lg-12">
                <input
                  type="text"
                  id="date-picker"
                  placeholder="Date"
                  readonly="readonly"
                />
              </div>

              <!-- Panel Dropdown -->
              <div class="col-lg-12">
                <div class="panel-dropdown">
                  <a href="#"
                    >Guests <span class="qtyTotal" name="qtyTotal">1</span></a
                  >
                  <div class="panel-dropdown-content">
                    <!-- Quantity Buttons -->
                    <div class="qtyButtons">
                      <div class="qtyTitle">Adults</div>
                      <input type="text" name="qtyInput" value="1" />
                    </div>

                    <div class="qtyButtons">
                      <div class="qtyTitle">Childrens</div>
                      <input type="text" name="qtyInput" value="0" />
                    </div>
                  </div>
                </div>
              </div>
              <!-- Panel Dropdown / End -->
            </div>

            <!-- Book Now -->
            <router-link
              v-if="roomDetail"
              :to="`/booking/${roomDetail.id}`"
              class="button book-now fullwidth margin-top-5"
              >Request To Book</router-link
            >

            <!-- Estimated Cost -->
            <!-- 				<div class="booking-estimated-cost">
					<strong>Total Cost</strong>
					<span>$49</span>
				</div> -->
          </div>
          <!-- Book Now / End -->

          <!-- Contact -->
          <div class="boxed-widget margin-top-35">
            <div class="hosted-by-title">
              <h4>
                <span>Hosted by</span>
                <a href="pages-user-profile.html">Tom Perrin</a>
              </h4>
              <a href="pages-user-profile.html" class="hosted-by-avatar"
                ><img src="images/dashboard-avatar.jpg" alt=""
              /></a>
            </div>
            <ul class="listing-details-sidebar">
              <li><i class="sl sl-icon-phone"></i> (123) 123-456</li>
              <!-- <li><i class="sl sl-icon-globe"></i> <a href="#">http://example.com</a></li> -->
              <li>
                <i class="fa fa-envelope-o"></i> <a href="#">tom@example.com</a>
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
                  placeholder="Your message to Tom"
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

          <!-- Share / Like -->
          <div class="listing-share margin-top-40 margin-bottom-40 no-border">
            <button class="like-button">
              <span class="like-icon"></span> Bookmark this listing
            </button>
            <span>159 people bookmarked this place</span>

            <!-- Share Buttons -->
            <ul class="share-buttons margin-top-40 margin-bottom-0">
              <li>
                <a class="fb-share" href="#"
                  ><i class="fa fa-facebook"></i> Share</a
                >
              </li>
              <li>
                <a class="twitter-share" href="#"
                  ><i class="fa fa-twitter"></i> Tweet</a
                >
              </li>
              <li>
                <a class="gplus-share" href="#"
                  ><i class="fa fa-google-plus"></i> Share</a
                >
              </li>
              <!-- <li><a class="pinterest-share" href="#"><i class="fa fa-pinterest-p"></i> Pin</a></li> -->
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
        <!-- Sidebar / End -->
      </div>
    </div>

    <!-- Booking Sticky Footer -->
    <div class="booking-sticky-footer">
      <div class="container">
        <div class="bsf-left">
          <h4>Starting from $29</h4>
          <div class="star-rating" data-rating="5">
            <div class="rating-counter"></div>
          </div>
        </div>
        <div class="bsf-right">
          <a href="#booking-widget-anchor" class="button">Book Now</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Wrapper / End -->
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const id = route.params.id;

    const roomDetail = computed(() => store.state.room.roomDetail);

    store.dispatch("room/findRoomByIdAction", id);

    return {
      roomDetail,
    };
  },
};
</script>

<style></style>
