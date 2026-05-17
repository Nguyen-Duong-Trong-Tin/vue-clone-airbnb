<template>
  <div class="small-dialog-header">
    <h3>Register</h3>
  </div>

  <!--Tabs -->
  <div class="sign-in-form style-1">
    <div class="tabs-container alt">
      <!-- Register -->
      <div class="tab-content" id="tab2">
        <form method="post" class="register">
          <p class="form-row form-row-wide">
            <label for="username2"
              >Username:
              <i class="im im-icon-Male"></i>
              <input
                type="text"
                class="input-text"
                name="username"
                id="username2"
                value=""
              />
            </label>
          </p>

          <p class="form-row form-row-wide">
            <label for="email2"
              >Email Address:
              <i class="im im-icon-Mail"></i>
              <input
                type="text"
                class="input-text"
                name="email"
                id="email2"
                value=""
              />
            </label>
          </p>

          <p class="form-row form-row-wide">
            <label for="password1"
              >Password:
              <i class="im im-icon-Lock-2"></i>
              <input
                class="input-text"
                type="password"
                name="password1"
                id="password1"
              />
            </label>
          </p>

          <p class="form-row form-row-wide">
            <label for="password2"
              >Repeat Password:
              <i class="im im-icon-Lock-2"></i>
              <input
                class="input-text"
                type="password"
                name="password2"
                id="password2"
              />
            </label>
          </p>

          <div class="auth-form-footer">
            <div class="auth-form-footer__top">
              <span class="auth-form-footer__hint"
                >Already have an account?</span
              >
              <router-link to="/auth/login" class="auth-form-footer__text-link">
                Sign in instead
              </router-link>
            </div>

            <div class="auth-form-footer__bottom">
              <p class="auth-form-footer__copy">
                By creating an account, you agree to our terms and privacy
                policy.
              </p>

              <input
                type="submit"
                class="button border fw margin-top-10"
                name="register"
                value="Register"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <button
    title="Close (Esc)"
    type="button"
    class="mfp-close"
    fdprocessedid="1yd2rq"
  ></button>
</template>

<script>
export default {};
</script>

<style scoped>
.auth-form-footer {
  margin-top: 24px;
  padding: 18px 20px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.96),
    rgba(248, 250, 252, 0.96)
  );
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
}

.auth-form-footer__top,
.auth-form-footer__bottom {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.auth-form-footer__top {
  align-items: center;
  padding-bottom: 14px;
  margin-bottom: 14px;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.auth-form-footer__bottom {
  align-items: flex-start;
  flex-direction: column;
}

.auth-form-footer__hint,
.auth-form-footer__copy {
  margin: 0;
  color: #475569;
  font-size: 14px;
  line-height: 1.5;
}

.auth-form-footer__text-link {
  color: #0f172a;
  font-weight: 600;
  text-decoration: none;
}

.auth-form-footer__text-link:hover {
  color: #f91942;
}

.auth-form-footer__copy {
  max-width: 28rem;
}

@media (max-width: 480px) {
  .auth-form-footer__top {
    flex-direction: column;
    align-items: flex-start;
  }

  .auth-form-footer {
    padding: 16px;
  }
}
</style>
