<template>
  <v-app >
    <v-toolbar app >
      <v-toolbar-title class="headline">
        Samples -- by Robert Garza
      </v-toolbar-title>
    </v-toolbar>

    <v-content class="mb-3">
      <v-container  grid-list-lg>
          <Projects/>
      </v-container>
    </v-content>
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
    return {    }
  }
}
</script>
