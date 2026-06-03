<template>
  <a href="#" class="dashboard-responsive-nav-trigger"
    ><i class="fa fa-reorder"></i> Dashboard Navigation</a
  >

  <div class="dashboard-nav">
    <div class="dashboard-nav-inner">
      <ul data-submenu-title="Main">
        <li class="active">
          <a href="/admin/dashboard"
            ><i class="sl sl-icon-settings"></i> Dashboard</a
          >
        </li>
        <li>
          <a href="#"
            ><i class="sl sl-icon-envelope-open"></i> Messages
            <span class="nav-tag messages">2</span></a
          >
        </li>
        <li>
          <router-link to="/admin/bookings">
            <i class="fa fa-calendar-check-o"></i> Bookings
          </router-link>
        </li>
        <li>
          <a href="#"><i class="sl sl-icon-wallet"></i> Wallet</a>
        </li>
      </ul>

      <ul data-submenu-title="Listings">
        <li>
          <a><i class="sl sl-icon-layers"></i> My Listings</a>
          <ul>
            <li>
              <a href="#">Active <span class="nav-tag green">6</span></a>
            </li>
            <li>
              <a href="#">Pending <span class="nav-tag yellow">1</span></a>
            </li>
            <li>
              <a href="#">Expired <span class="nav-tag red">2</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#"><i class="sl sl-icon-star"></i> Reviews</a>
        </li>
        <li>
          <a href="#"><i class="sl sl-icon-heart"></i> Bookmarks</a>
        </li>
        <li>
          <a href="#"><i class="sl sl-icon-plus"></i> Add Listing</a>
        </li>
      </ul>

      <ul data-submenu-title="Account">
        <li>
          <a href="#"><i class="sl sl-icon-user"></i> My Profile</a>
        </li>
        <li>
          <a href="#"><i class="sl sl-icon-power"></i> Logout</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
