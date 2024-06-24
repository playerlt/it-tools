<template>
  <div>Redirecting...</div>
</template>

<script>
export default {
  mounted() {
    const baseRedirectUrl = this.$route.meta.url;
    const fullPath = baseRedirectUrl + this.$route.fullPath.substring(5);  // 移除 '/blog' 部分
    window.location.href = fullPath;
  }
}
</script>
