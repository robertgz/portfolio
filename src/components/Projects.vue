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
          <div>
            <span class="headline">{{item.title}}</span><br>
            <span v-html="item.text">{{item.text}}</span><br>
            <ul>
              <li v-for="bullet in item.bullets"
                v-bind:key="bullet.id"
                v-html="bullet.text">
                {{ bullet.text }}
              </li>
            </ul>            
          </div>

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
          imageURL: require('../assets/case-converter.png'),
          title: "Case Converter in React", 
          text: "Application that takes text as input and converts it into several different text cases such as upper and lower case.",
          bullets: [
            { id: 0, text: "Shows use of Javascript, React, and reactstrap"},
            { id: 1, text: "<a href='https://gitlab.com/robertgz/case-converter'>Source code on GitLab</a>"},
            { id: 2, text: "Created: December 2018"},
          ],
          locationURL: "case-converter/"
        },        
        {
          id: 1, 
          imageURL: require('../assets/qwert_thumb.png'),
          title: "3D Spinning Shapes - JavaScript",
          text: "Pressing any of the letters <strong>q, w, e, r, t</strong> on the keyboard causes a labeled cube to rotate in one direction. Pressing the letters <strong>a, s, d, f, g</strong> causes a cube to rotate in the opposite direction.",
          bullets: [
            { id: 0, text: "Shows use of Javascript and three.js"},
            { id: 1, text: "Shapes modeled in Blender"},
            { id: 2, text: "<a href='https://gitlab.com/robertgz/3d-spinning-shapes'>Source code on GitLab</a>"},
            { id: 3, text: "Created: November 2018"},
          ],
          locationURL: "3d-spinning-shapes/"
        },
        {
          id: 2, 
          imageURL: require('../assets/cad_at_swc.png'),
          title: "College Program Webpage", 
          text: "Webpage listing courses, certificates, degrees, and schedules for the Computer Aided Design and Drafting program at Southwestern College in Chula Vista, CA.",
          bullets: [
            { id: 0, text: "Shows use of Bootstrap, HTML, and CSS"},
            { id: 1, text: "Designed: Fall 2016"},
          ],
          locationURL: "https://dept.swccd.edu/cad/"
        },
        {
          id: 3, 
          imageURL: require('../assets/calculator.png'),
          title: "Calculator", 
          text: "Created as a project while working through the <a href='https://www.freecodecamp.org/robertgz'>freeCodeCamp</a> curriculum.",
          bullets: [
            { id: 0, text: "Shows use of Bootstrap, HTML, and CSS"},
            { id: 1, text: "Uses JavaScript, jQuery"},
            { id: 2, text: "<a href='https://codepen.io/rb842/pen/YGWdaQ'>Source code on CodePen</a>"},
            { id: 3, text: "Created: September 2016 & May 2018"},
          ],
          locationURL: "https://codepen.io/rb842/full/YGWdaQ"
        },

        // {
        //   id: 4, 
        //   imageURL: require('../assets/wikipedia_viewer.png'),
        //   title: "Twitch", 
        //   text: "Created as a project while working through the <a href='https://www.freecodecamp.org/robertgz'>freeCodeCamp</a> curriculum.",
        //   bullets: [
        //     { id: 0, text: "Shows use of Bootstrap, HTML, and CSS"},
        //     { id: 1, text: "Uses JavaScript, jQuery, and the Twitch API"},
        //     { id: 2, text: "<a href='https://codepen.io/rb842/pen/PGYREo'>Source code on CodePen</a>"},
        //     { id: 3, text: "Created: August & September 2016"},
        //   ],
        //   locationURL: "https://codepen.io/rb842/full/PGYREo"
        // },

        {
          id: 5, 
          imageURL: require('../assets/wikipedia_viewer.png'),
          title: "Wikipedia Viewer", 
          text: "Created as a project while working through the <a href='https://www.freecodecamp.org/robertgz'>freeCodeCamp</a> curriculum.",
          bullets: [
            { id: 0, text: "Shows use of Bootstrap, HTML, and CSS"},
            { id: 1, text: "Uses JavaScript, jQuery, and the wikipedia.org API"},
            { id: 2, text: "<a href='https://codepen.io/rb842/pen/QEZEmg'>Source code on CodePen</a>"},
            { id: 3, text: "Created: August 2016"},
          ],
          locationURL: "https://codepen.io/rb842/full/QEZEmg/"
        },
        {
          id: 6, 
          imageURL: require('../assets/local_weather.png'),
          title: "Local Weather", 
          text: "Uses an external API to lookup the browser's IP address and location then uses the response to send to another API to get the weather. Created as a project while working through the <a href='https://www.freecodecamp.org/robertgz'>freeCodeCamp</a> curriculum.",
          bullets: [
            { id: 0, text: "Shows use of Bootstrap and HTML"},
            { id: 1, text: "Uses JavaScript, jQuery, ipinfo.io and openweathermap.org API"},
            { id: 2, text: "<a href='https://codepen.io/rb842/pen/EyzqYx'>Source code on CodePen</a>"},
            { id: 3, text: "Created: August 2016"},
          ],
          locationURL: "https://codepen.io/rb842/full/EyzqYx"
        },

        {
          id: 7, 
          imageURL: require('../assets/random_quote_machine.png'),
          title: "Random Quote Machine", 
          text: "Created as a project while working through the <a href='https://www.freecodecamp.org/robertgz'>freeCodeCamp</a> curriculum.",
          bullets: [
            { id: 0, text: "Shows use of Bootstrap, HTML, and CSS"},
            { id: 1, text: "Uses JavaScript, jQuery, and the wikipedia.org API"},
            { id: 2, text: "<a href='https://codepen.io/rb842/pen/vKroWj'>Source code on CodePen</a>"},
            { id: 3, text: "Created: August 2016"},
          ],
          locationURL: "https://codepen.io/rb842/full/vKroWj/"
        },        
      ]
    }
  }
}
</script>
