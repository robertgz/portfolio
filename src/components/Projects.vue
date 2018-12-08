<template>
  <v-layout row wrap>
    <v-flex xs12 sm10 offset-sm1 md6 offset-md0
      v-for="item in samples"
      v-bind:key="item.id" >
      <v-card href height="100%" >
        <v-img
          :src=item.imageURL
          class="my-3"
          height="200">
        </v-img>
        <v-card-title primary-title>
          <span class="headline">{{item.title}}</span>
          <div v-html="item.text">{{item.text}}</div>
          <ul>
            <li v-for="bullet in item.bullets"
              v-bind:key="bullet.id"
              v-html="bullet.text">
              {{ bullet.text }}
            </li>
          </ul>
        </v-card-title>
        <v-card-actions>
          <v-btn :href="item.locationURL" >View</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>

export default {
  data () {
    return {
      samples: [
        {
          id: 0, 
          imageURL: require('../assets/qwert_thumb.png'),
          title: "3D Spinning Shapes - Programming Example",
          text: "Pressing any of the letters <strong>q, w, e, r, t</strong> on the keyboard causes a labeled cube to rotate in one direction. Pressing the letters <strong>a, s, d, f, g</strong> causes a cube to rotate in the opposite direction.",
          bullets: [
            { id: 0, text: "Uses Javascript and the three.js library"},
            { id: 1, text: "Shapes modeled in Blender"},
            { id: 2, text: "<a href='https://gitlab.com/robertgz/3d-spinning-shapes'>Git source on GitLab</a>"},
            { id: 3, text: "Created: November 2018"},
          ],
          locationURL: "3d-spinning-shapes/"
        },
        {
          id: 1, 
          imageURL: require('../assets/cad_at_swc.png'),
          title: "College Program Webpage", 
          text: "Webpage listing courses, certificates, degrees, and schedules for the Computer Aided Design and Drafting program at Southwestern College in Chula Vista, CA.",
          bullets: [
            { id: 0, text: "Uses Bootstrap, HTML, CSS"},
            { id: 2, text: "Designed: Fall 2016"},
          ],
          locationURL: "https://dept.swccd.edu/cad/"
        }
      ]
    }
  }
}
</script>
