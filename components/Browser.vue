<template>
  <div class="row">
    <div class="browser col-12 col-lg-8 mb-5">
      <div class="browser-header">
        <div class="browser-btns">
          <div class="browser-btn closer"></div>
          <div class="browser-btn retract"></div>
          <div class="browser-btn expand"></div>
        </div>
        <ul class="tabs">
          <li :class="{tab:true,activer:i==current}" @click="goto(i)" v-for="(page,i) in pages">
            <i :class="{fa:true, [`fa-${page.faIcon}`]:true}" v-if="page.faIcon"></i> {{page.title}}
            <span class="closer">x</span>
          </li>
        </ul>
      </div>
      <div class="browser-bar">
        <div class="button" on-click='goto(past)'><i class="fa fa-arrow-left"></i></div>
        <div class="button inactiver"><i class="fa fa-arrow-right"></i></div>
        <div class="button"><i class="fa fa-rotate-right"></i></div>
        <input class="address" :value="pages[current].link" />
        <div class="button" on-click="alert(`You thought this actually worked???\nThat's funny`)"><i class="fa fa-bars"></i></div>
      </div>
      <div class="page">
        <div v-html="pages[current].html">Main Page Content</div>
        <div class="alert alert-primary" role="alert" v-if="pages[current].liveDemo">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>This is a live version of {{pages[current].title}}!</div>
        <Live-Demo :url="pages[current].liveDemo.url" v-if="pages[current].liveDemo"></Live-Demo>
        <a class="carousel-control-prev" @click="goto(current - 1)" role="button">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="bg"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" @click="goto(current + 1)" role="button">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="bg"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="col-12 col-lg-4 px-4 card-holder">
      <Card :title="pages[current].title" :subtitle="pages[current].subtitle" :text="pages[current].text" :tags="pages[current].tags" :link="pages[current].projectURL"></Card>
    </div>
  </div>
</template>
<script>
import LiveDemo from './Live-Demo'
import Card from './Card'
export default {
  data() {
      return {
        current: 0,
        past: 0
      }
    },
    methods: {
      goto(index) {
        const pages = this.pages,
          num = (index + pages.length) % pages.length;
        this.past = this.current
        this.current = num
      }
    },
    props: ["pages"],
    components: {
      "Live-Demo": LiveDemo,
      Card
    }
}
</script>
