<template>
  <div>Redirecting...</div>
</template>

<script>
export default {
  mounted() {
    // 清除特定的 cookie
    document.cookie = "cookieName=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    // 或清除所有 cookie
    this.clearAllCookies();

    // 重定向操作
    window.location.href = this.$route.meta.url;
  },
  methods: {
    clearAllCookies() {
      const cookies = document.cookie.split(";");

      for (let cookie of cookies) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      }
    }
  }
}
</script>