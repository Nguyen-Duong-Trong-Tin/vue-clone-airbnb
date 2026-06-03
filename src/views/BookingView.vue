<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Content
================================================== -->

    <!-- Container -->
    <div class="container">
      <div class="row">
        <!-- Content
		================================================== -->
        <div class="col-lg-8 col-md-8 padding-right-30">
          <h3 class="margin-top-0 margin-bottom-30">Personal Details</h3>

          <div class="row">
            <div class="col-md-6">
              <div class="input-with-icon medium-icons">
                <label>Check-in</label>
                <input v-model="bookingPayload.checkIn" type="date" />
                <i class="im im-icon-Calendar-4"></i>
              </div>
            </div>

            <div class="col-md-6">
              <div class="input-with-icon medium-icons">
                <label>Check-out</label>
                <input v-model="bookingPayload.checkOut" type="date" />
                <i class="im im-icon-Calendar-4"></i>
              </div>
            </div>
          </div>

          <h3 class="margin-top-55 margin-bottom-30">Payment Method</h3>

          <!-- Payment Methods Accordion -->
          <div class="payment">
            <div class="payment-tab payment-tab-active">
              <div class="payment-tab-trigger">
                <input
                  checked
                  id="paypal"
                  name="cardType"
                  type="radio"
                  value="paypal"
                />
                <label for="paypal">PayPal</label>
                <img
                  class="payment-logo paypal"
                  src="https://i.imgur.com/ApBxkXU.png"
                  alt=""
                />
              </div>

              <div class="payment-tab-content">
                <p>You will be redirected to PayPal to complete payment.</p>
              </div>
            </div>

            <div class="payment-tab">
              <div class="payment-tab-trigger">
                <input
                  type="radio"
                  name="cardType"
                  id="creditCart"
                  value="creditCard"
                />
                <label for="creditCart">Credit / Debit Card</label>
                <img
                  class="payment-logo"
                  src="https://i.imgur.com/IHEKLgm.png"
                  alt=""
                />
              </div>

              <div class="payment-tab-content">
                <div class="row">
                  <div class="col-md-6">
                    <div class="card-label">
                      <label for="nameOnCard">Name on Card</label>
                      <input
                        id="nameOnCard"
                        name="nameOnCard"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="card-label">
                      <label for="cardNumber">Card Number</label>
                      <input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234  5678  9876  5432"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card-label">
                      <label for="expirynDate">Expiry Month</label>
                      <input
                        id="expiryDate"
                        placeholder="MM"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card-label">
                      <label for="expiryDate">Expiry Year</label>
                      <input
                        id="expirynDate"
                        placeholder="YY"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="card-label">
                      <label for="cvv">CVV</label>
                      <input id="cvv" required type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Payment Methods Accordion / End -->

          <button
            class="button booking-confirmation-btn margin-top-40 margin-bottom-65"
            @click="handleConfirmAndPay"
          >
            Confirm and Pay
          </button>
        </div>

        <!-- Sidebar
		================================================== -->
        <div class="col-lg-4 col-md-4 margin-top-0 margin-bottom-60">
          <!-- Booking Summary -->
          <div class="listing-item-container compact order-summary-widget">
            <div class="listing-item">
              <img src="images/listing-item-04.jpg" alt="" />

              <div class="listing-item-content">
                <div class="numerical-rating" data-rating="5.0"></div>
                <h3>Burger House</h3>
                <span>2726 Shinn Street, New York</span>
              </div>
            </div>
          </div>
          <div class="boxed-widget opening-hours summary margin-top-0">
            <h3><i class="fa fa-calendar-check-o"></i> Booking Summary</h3>
            <ul>
              <li>Date <span>10/20/2019</span></li>
              <li>Hour <span>5:30 PM</span></li>
              <li>
                Guests <span>{{ roomDetail?.guests || "-" }}</span>
              </li>
              <li>
                Bed Rooms <span>{{ roomDetail?.bedRooms || "-" }}</span>
              </li>
              <li>
                Bath Rooms
                <span>{{
                  roomDetail?.bathRooms || roomDetail?.badRooms || "-"
                }}</span>
              </li>
              <li class="total-costs">
                Total Cost <span>{{ totalPrice }}</span>
              </li>
            </ul>
          </div>
          <!-- Booking Summary / End -->
        </div>
      </div>
    </div>
    <!-- Container / End -->
  </div>
  <!-- Wrapper / End -->
</template>

<script>
import { computed, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const roomId = route.params.roomId;

    const bookingPayload = reactive({
      roomId,
      checkIn: null,
      checkOut: null,
    });

    const roomDetail = computed(() => store.state.room.roomDetail);
    const userLoginedIn = computed(() => store.state.auth.userLoginedIn);
    const totalPrice = computed(() => {
      const price = Number(roomDetail.value?.price);
      const checkIn = bookingPayload.checkIn;
      const checkOut = bookingPayload.checkOut;

      if (!price || !checkIn || !checkOut) {
        return "-";
      }

      const millisecondsPerDay = 24 * 60 * 60 * 1000;
      const [checkInYear, checkInMonth, checkInDay] = checkIn
        .split("-")
        .map(Number);
      const [checkOutYear, checkOutMonth, checkOutDay] = checkOut
        .split("-")
        .map(Number);
      const checkInTime = Date.UTC(checkInYear, checkInMonth - 1, checkInDay);
      const checkOutTime = Date.UTC(
        checkOutYear,
        checkOutMonth - 1,
        checkOutDay
      );
      const totalDays = Math.max(
        0,
        (checkOutTime - checkInTime) / millisecondsPerDay
      );

      if (!totalDays) {
        return "-";
      }

      return `$${(price * totalDays).toLocaleString()}`;
    });

    const handleConfirmAndPay = async () => {
      if (!bookingPayload.checkIn || !bookingPayload.checkOut) {
        alert("Please select check-in and check-out dates.");
        return;
      }

      if (!userLoginedIn.value) {
        alert("Please log in to complete your booking.");

        router.push("/auth/login");

        return;
      }

      try {
        await store.dispatch("ticket/createTicketAction", {
          roomId: bookingPayload.roomId,
          userId: userLoginedIn.value.id,
          checkIn: bookingPayload.checkIn,
          checkOut: bookingPayload.checkOut,
        });
        alert("Booking successful!");

        router.push(`/user-profile/${userLoginedIn.value.id}`);
      } catch (error) {
        console.log(error);
        alert("Booking failed. Please try again.");
      }
    };

    return {
      bookingPayload,
      roomDetail,
      totalPrice,
      handleConfirmAndPay,
    };
  },
};
</script>

<style></style>
