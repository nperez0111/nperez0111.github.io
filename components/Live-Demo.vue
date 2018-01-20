<template>
  <div class="embed-responsive">
    <iframe class="embed-responsive-item" :src="url"></iframe>
  </div>
</template>
<script>
export default {
  props: {
    url: String
  }
}
</script>
