<template>
  <v-app >
    <v-toolbar app class="grey lighten-2">
      <v-toolbar-title class="headline">
        Samples -- by Robert Garza
      </v-toolbar-title>
    </v-toolbar>

    <v-content class="mb-3">
      <v-container grid-list-lg>
          <Projects/>
      </v-container>
    </v-content>

    <v-footer class="pa-3 grey lighten-2 justify-center">
      <div>        
        <span v-html="footer.text">{{ footer.text }}</span>
        <a :href="footer.giturl">GitLab source</a>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Projects from './components/Projects'

export default {
  name: 'App',
  components: {
    Projects
  },
  data () {
    return {
      footer: {
        text: "&copy; 2018  —  Page created using Vue and Vuetify — ",
        giturl: "https://gitlab.com/robertgz/portfolio"
      }
    }
  }
}
</script>
