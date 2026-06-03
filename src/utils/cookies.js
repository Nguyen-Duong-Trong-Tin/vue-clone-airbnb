export function setCookie(name, value, maxAgeSeconds) {
  try {
    const secureFlag = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; max-age=${maxAgeSeconds}; path=/; SameSite=Lax${secureFlag}`;
    return true;
  } catch (e) {
    // Ignore cookie errors (e.g., in restricted environments)
    // Return false so callers can react if needed
    // eslint-disable-next-line no-console
    console.warn("Failed to set cookie", name, e);
    return false;
  }
}

export function getCookie(name) {
  try {
    const cookiePrefix = `${name}=`;
    const cookies = document.cookie ? document.cookie.split("; ") : [];

    const cookie = cookies.find((item) => item.startsWith(cookiePrefix));
    if (!cookie) {
      return null;
    }

    return decodeURIComponent(cookie.slice(cookiePrefix.length));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn("Failed to read cookie", name, e);
    return null;
  }
}
