To achieve that clean, elegant look from the image, we need to hide the default
browser radio buttons and recreate them using custom CSS. This gives you
complete control over the size, spacing, borders, and colors to match that
minimalist design. I've updated the template with a custom HTML structure for
the radios, added `gender` to your Vue `reactive` state so it saves correctly,
and added the custom CSS at the bottom to style the circles and typography
exactly like your reference image. Here is the complete, updated code: ```vue
<template>
  <div class="small-dialog-header">
    <h3>Register</h3>
  </div>

  <div class="sign-in-form style-1">
    <div class="tabs-container alt">
      <div class="tab-content" id="tab2">
        <form method="post" class="register" @submit.prevent="handleSubmit">
          <p class="form-row form-row-wide">
            <label for="name"
              >Name:
              <i class="im im-icon-Male"></i>
              <input
                type="text"
                class="input-text"
                name="name"
                id="name"
                v-model="authRegisterData.name"
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
                v-model="authRegisterData.email"
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
                v-model="authRegisterData.password"
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
                v-model="authRegisterData.repeatPassword"
              />
            </label>
          </p>

          <p class="form-row form-row-wide">
            <label for="phone"
              >Phone:
              <i class="im im-icon-Phone-2"></i>
              <input
                type="text"
                class="input-text"
                name="phone"
                id="phone"
                v-model="authRegisterData.phone"
              />
            </label>
          </p>

          <div class="form-row form-row-wide birthday-row">
            <label for="birthday">Birthday:</label>

            <div class="birthday-selects">
              <select
                v-model="authRegisterData.selectedYear"
                name="birth_year"
                class="input-text birthday-select"
              >
                <option value="" disabled hidden>Year</option>
                <option v-for="y in years" :key="y" :value="y">
                  {{ y }}
                </option>
              </select>

              <select
                v-model="authRegisterData.selectedMonth"
                name="birth_month"
                class="input-text birthday-select"
              >
                <option value="" disabled hidden>Month</option>
                <option v-for="m in months" :key="m" :value="m">
                  {{ m }}
                </option>
              </select>

              <select
                v-model="authRegisterData.selectedDay"
                name="birth_day"
                class="input-text birthday-select"
              >
                <option value="" disabled hidden>Day</option>
                <option v-for="d in days" :key="d" :value="d">{{ d }}</option>
              </select>
            </div>
          </div>

          <div class="form-row form-row-wide gender-row">
            <label class="gender-label">Gender:</label>

            <div class="radio-group">
              <label class="custom-radio">
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  v-model="authRegisterData.gender"
                />
                <span class="radio-mark"></span>
                <span class="radio-text">Male</span>
              </label>

              <label class="custom-radio">
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  v-model="authRegisterData.gender"
                />
                <span class="radio-mark"></span>
                <span class="radio-text">Female</span>
              </label>
            </div>
          </div>

          <div class="form-row form-row-wide">
            <label for="address">
              Address:
              <i class="im im-icon-Map2"></i>
              <input
                type="text"
                class="input-text"
                name="address"
                id="address"
                v-model="authRegisterData.address"
              />
            </label>
          </div>

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
import { reactive } from "vue";
import { useStore } from "vuex";

import { generateNumbersRange } from "@/utils/generateNumbersRange";

export default {
  setup() {
    const years = [...generateNumbersRange(1970, new Date().getFullYear())];
    const months = generateNumbersRange(1, 12);
    const days = generateNumbersRange(1, 31);

    const store = useStore();
    const authRegisterData = reactive({
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      phone: "",
      selectedYear: 1970,
      selectedMonth: 5,
      selectedDay: 25,
      gender: "male",
      address: "",
    });

    const handleSubmit = async () => {
      if (
        !authRegisterData.name ||
        !authRegisterData.email ||
        !authRegisterData.password ||
        !authRegisterData.repeatPassword ||
        !authRegisterData.phone ||
        !authRegisterData.gender
      ) {
        alert("Please fill in all fields!");
        return;
      }

      if (authRegisterData.password !== authRegisterData.repeatPassword) {
        alert("Passwords do not match!");
        return;
      }

      try {
        await store.dispatch("auth/registerAction", {
          name: authRegisterData.name,
          email: authRegisterData.email,
          password: authRegisterData.password,
          phone: authRegisterData.phone,
          gender: authRegisterData.gender === "male",
          birthdate: `${authRegisterData.selectedYear}-${String(
            authRegisterData.selectedMonth
          ).padStart(2, "0")}-${String(authRegisterData.selectedDay).padStart(
            2,
            "0"
          )}`,
          address: authRegisterData.address,
        });

        authRegisterData.name = "";
        authRegisterData.email = "";
        authRegisterData.password = "";
        authRegisterData.repeatPassword = "";
        authRegisterData.phone = "";
        authRegisterData.selectedYear = 1970;
        authRegisterData.selectedMonth = 1;
        authRegisterData.selectedDay = 1;
        authRegisterData.gender = "male";
        authRegisterData.address = "";
      } catch (error) {
        alert(error.message || "Registration failed.");
        return;
      }
    };

    return {
      years,
      months,
      days,
      authRegisterData,
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

.birthday-row {
  margin-top: 12px;
}

.birthday-selects {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}

.birthday-select {
  flex: 1;
  min-height: 44px;
  padding: 1px 12px;
  border-radius: 8px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 15px;
  color: #374151;
}

.birthday-select:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(249, 25, 66, 0.06);
  border-color: rgba(249, 25, 66, 0.6);
}

.birthday-selects .birthday-select:first-child {
  max-width: 45%;
}

.birthday-selects .birthday-select:nth-child(2) {
  max-width: 27.5%;
}

.birthday-selects .birthday-select:nth-child(3) {
  max-width: 27.5%;
}

.gender-row {
  margin-top: 24px;
  margin-bottom: 24px;
}

.gender-label {
  display: block;
  color: #4a657a;
  margin-bottom: 24px;
}

.radio-group {
  display: flex;
  gap: 40px;
  margin-left: 20px;
}

.custom-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.custom-radio input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.radio-mark {
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 1.5px solid #8e9ba9;
  border-radius: 50%;
  display: inline-block;
  margin-right: 12px;
  position: relative;
  transition: all 0.2s ease-in-out;
}

.radio-mark::after {
  content: "";
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #4a657a;
}

.custom-radio input[type="radio"]:checked ~ .radio-mark::after {
  display: block;
}

.custom-radio input[type="radio"]:checked ~ .radio-mark {
  border-color: #4a657a;
}

.radio-text {
  font-weight: 300;
  color: #4a657a;
}

@media (max-width: 480px) {
  .auth-form-footer__top {
    flex-direction: column;
    align-items: flex-start;
  }

  .auth-form-footer {
    padding: 16px;
  }

  .birthday-selects {
    flex-direction: column;
  }

  .birthday-selects .birthday-select:first-child,
  .birthday-selects .birthday-select:nth-child(2),
  .birthday-selects .birthday-select:nth-child(3) {
    max-width: 100%;
    width: 100%;
  }

  .radio-group {
    gap: 20px;
    /* Tighter gap on mobile */
    margin-left: 0;
  }
}
</style>
