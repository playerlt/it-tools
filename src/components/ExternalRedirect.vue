<template>
  <div>Redirecting...</div>
</template>

<script>
export default {
  mounted() {
    window.location.href = this.$route.meta.url;
  }
}
</script>
