<template>
  <div class="card">
    <div class="card-block">
      <img class="card-img-top" :src="image" alt="Image of code." v-if="image && image !== 'false'">
      <h4 class="card-title" v-if="title && title !== 'false'" v-html="title">Title </h4>
      <h6 class="card-subtitle mb-2 text-muted" v-if="subtitle && subtitle !== 'false'" v-html="subtitle">Sub Title</h6>
      <p class="card-text" v-html="text">Main Text</p>
      <a :href="link" class="btn btn-primary float-right" v-if="link && link !== 'false'"> 
          See this Project <span class="fa fa-arrow-right" aria-hidden="true"></span>
              </a>
    </div>
    <div class="card-footer" v-if="tags && tags !== 'false'">
      <small class="text-muted">Tags :</small>
      <span class='btn btn-outline-primary btn-sm m-1' v-for="tag in tags" v-text="tag"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {}
    },
    props: ["title", "subtitle", "text", "link", "image", "tags"]
}
</script>
