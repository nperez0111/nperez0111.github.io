<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-items>
        <v-btn flat to="/" exact>Nick the Sick's Portfolio</v-btn>
        <v-btn flat to="/projects" exact>Projects</v-btn>
        <v-btn flat to="/about">About</v-btn>
        <v-btn flat to="/contactMe">Contact Me</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
        <nuxt />
      </v-content>
    </main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
