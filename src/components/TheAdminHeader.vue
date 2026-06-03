<template>
  <header id="header-container" class="fixed fullwidth dashboard">
    <!-- Header -->
    <div id="header" class="not-sticky">
      <div class="container">
        <!-- Left Side Content -->
        <div class="left-side">
          <!-- Logo -->
          <div id="logo">
            <a href="index.html"><img src="images/logo.png" alt="" /></a>
            <a href="index.html" class="dashboard-logo"
              ><img src="images/logo2.png" alt=""
            /></a>
          </div>

          <!-- Mobile Navigation -->
          <div class="mmenu-trigger">
            <button class="hamburger hamburger--collapse" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>

          <!-- Main Navigation -->
          <nav id="navigation" class="style-1">
            <ul id="responsive">
              <li>
                <a class="current" href="#">User Panel</a>
                <ul>
                  <li><a href="/admin/dashboard">Dashboard</a></li>
                  <li><a href="#">Messages</a></li>
                  <li><a href="#">Bookings</a></li>
                  <li><a href="#">Wallet</a></li>
                  <li><a href="#">My Listings</a></li>
                  <li><a href="#">Reviews</a></li>
                  <li><a href="#">Bookmarks</a></li>
                  <li><a href="#">Add Listing</a></li>
                  <li><a href="#">My Profile</a></li>
                  <li><a href="#">Invoice</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          <div class="clearfix"></div>
          <!-- Main Navigation / End -->
        </div>
        <!-- Left Side Content / End -->

        <!-- Right Side Content / End -->
        <div class="right-side">
          <!-- Header Widget -->
          <div class="header-widget">
            <!-- User Menu -->
            <div class="user-menu">
              <div class="user-name">
                <span><img src="images/dashboard-avatar.jpg" alt="" /></span>My
                Account
              </div>
              <ul>
                <li>
                  <a href="/admin/dashboard"
                    ><i class="sl sl-icon-settings"></i> Dashboard</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="sl sl-icon-envelope-open"></i> Messages</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-calendar-check-o"></i> Bookings</a
                  >
                </li>
                <li>
                  <a href="#"><i class="sl sl-icon-power"></i> Logout</a>
                </li>
              </ul>
            </div>

            <a href="#" class="button border with-icon"
              >Add Listing <i class="sl sl-icon-plus"></i
            ></a>
          </div>
          <!-- Header Widget / End -->
        </div>
        <!-- Right Side Content / End -->
      </div>
    </div>
    <!-- Header / End -->
  </header>
  <div class="clearfix"></div>
</template>
<script>
export default {};
</script>
<style></style>
