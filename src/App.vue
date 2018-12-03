<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline ">
        <span>Samples -- </span>
        <span>by Robert Garza</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <v-layout row wrap>
        <v-flex xs12 sm10 md8 lg6 offset-sm1 offset-md2 offset-lg4>
 
          <v-card href>
            <v-img
              :src="require('./assets/qwert_thumb.png')"
              class="my-3"
              contain
              height="200"
            ></v-img>
            <v-card-title primary-title>
              <span class="headline">three.js spining cubes/letters</span>
              <div>Interactive 3D demo. Pressing each of the letters <strong>qwert</strong> on the keyboard causes the respective cubes to rotate in one direction. Pressing the letters <strong>asdfg</strong> causes the cubes to spin in the opposite direction.</div>
              
              <ul>
                <li>Uses three.js library and Javascript</li>
                <li>Cubes with letters were modeled in Blender</li>
                <li>Created in November of 2018</li>
              </ul>
            </v-card-title>
          </v-card>

          <v-card href = "https://dept.swccd.edu/cad/demo/">
            <v-img
              :src="require('./assets/cad_at_swc.png')"
              class="my-3"
              contain
              height="200"
            ></v-img>
            <v-card-title primary-title>
              <span class="headline">CAD Program at SWC</span>
              <div>Webpage listing courses, certificates, degrees, and schedules for Computer Aided Design and Drafting at Southwestern College in Chula Vista, CA. Designed in Fall of 2016 using Bootstrap and Javascript snippets found online.</div>
            </v-card-title>
          </v-card>

        </v-flex>
      </v-layout>

    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  data () {
    return {
      //
    }
  }
}
</script>
