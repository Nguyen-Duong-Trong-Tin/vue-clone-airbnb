<template>
  <div class="small-dialog-header">
    <h3>Login</h3>
  </div>

  <!--Tabs -->
  <div class="sign-in-form style-1">
    <div class="tabs-container alt">
      <!-- Login -->
      <div class="tab-content" id="tab1" style="">
        <form method="post" class="login">
          <p class="form-row form-row-wide">
            <label for="username"
              >Username:
              <i class="im im-icon-Male"></i>
              <input
                type="text"
                class="input-text"
                name="username"
                id="username"
                value=""
                fdprocessedid="66fzn"
              />
            </label>
          </p>

          <p class="form-row form-row-wide">
            <label for="password"
              >Password:
              <i class="im im-icon-Lock-2"></i>
              <input
                class="input-text"
                type="password"
                name="password"
                id="password"
                fdprocessedid="3l8e7"
              />
            </label>
          </p>

          <div class="auth-form-footer">
            <div class="auth-form-footer__top">
              <div class="checkboxes">
                <input id="remember-me" type="checkbox" name="check" />
                <label for="remember-me">Remember Me</label>
              </div>

              <span class="auth-form-footer__link">
                <a href="#">Lost Your Password?</a>
              </span>
            </div>

            <div class="auth-form-footer__bottom">
              <router-link
                to="/auth/register"
                class="auth-form-footer__text-link"
              >
                New here? Create an account
              </router-link>

              <input
                type="submit"
                class="button border margin-top-5"
                name="login"
                value="Login"
                fdprocessedid="6g0tlg"
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
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(10px);
}

.auth-form-footer__top,
.auth-form-footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.auth-form-footer__top {
  padding-bottom: 14px;
  margin-bottom: 14px;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.auth-form-footer__bottom {
  flex-wrap: wrap;
}

.auth-form-footer__link a,
.auth-form-footer__text-link {
  color: #0f172a;
  font-weight: 600;
  text-decoration: none;
}

.auth-form-footer__link a:hover,
.auth-form-footer__text-link:hover {
  color: #f91942;
}

.form-row--hidden {
  display: none;
}

@media (max-width: 480px) {
  .auth-form-footer__top,
  .auth-form-footer__bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .auth-form-footer {
    padding: 16px;
  }
}
</style>
