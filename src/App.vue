<template>
  <v-app >
    <v-toolbar app class="grey lighten-2">
      <v-toolbar-title class="headline">
        Software Development Projects -- by Robert Garza
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
        <a :href="footer.giturl">GitHub source</a>
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
        text: "&copy; 2024 Robert Garza | Page created using Vue and Vuetify — ",
        giturl: "https://github.com/robertgz/portfolio"
      }
    }
  }
}
</script>
