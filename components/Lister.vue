<template>
  <div class="card-columns" id="npm">
    <Card v-for="item in items" :title="item.title" :subtitle="item.subtitle" :text="item.text" :link="item.link" :tags="item.tags" :image="item.image" :key="item.title"></Card>
  </div>
</template>
<script>
import Card from './Card'
export default {
  name: 'lister',
  props: ["items"],
  components: {
    Card
  }
}
</script>
