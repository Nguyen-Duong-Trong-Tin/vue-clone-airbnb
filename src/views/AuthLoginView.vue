<template>
  <div class="small-dialog-header">
    <h3>Login</h3>
  </div>

  <!--Tabs -->
  <div class="sign-in-form style-1">
    <div class="tabs-container alt">
      <!-- Login -->
      <div class="tab-content" id="tab1" style="">
        <form method="post" class="login" @submit.prevent="handleSubmit">
          <p class="form-row form-row-wide">
            <label for="email"
              >Email:
              <i class="im im-icon-Male"></i>
              <input
                type="text"
                class="input-text"
                name="email"
                id="email"
                value=""
                fdprocessedid="66fzn"
                v-model="userLoginData.email"
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
                v-model="userLoginData.password"
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
import { reactive } from "vue";
import { useStore } from "vuex";
import { setCookie } from "@/utils/cookies";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const userLoginData = reactive({
      email: "",
      password: "",
    });

    const handleSubmit = async () => {
      if (!userLoginData.email || !userLoginData.password) {
        alert("Please fill in all fields.");
        return;
      }

      try {
        const response = await store.dispatch(
          "auth/loginAction",
          userLoginData
        );
        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
        if (accessToken) setCookie("accessToken", accessToken, 60 * 60); // 1 hour
        if (refreshToken)
          setCookie("refreshToken", refreshToken, 7 * 24 * 60 * 60); // 7 days

        router.push("/");
      } catch (error) {
        alert("Login failed. Please check your credentials and try again.");
      }
    };

    return {
      userLoginData,
      handleSubmit,
    };
  },
};
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
