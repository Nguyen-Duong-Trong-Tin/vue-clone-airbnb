import store from "@/store";

export const requireAdmin = async (to, from, next) => {
  if (!store.state.auth.userLoginedIn) {
    await store.dispatch("auth/initAction");
  }

  const userLoginedIn = store.state.auth.userLoginedIn;
  if (userLoginedIn?.type === "ADMIN") {
    next();
    return;
  }

  next("/auth/login");
};
