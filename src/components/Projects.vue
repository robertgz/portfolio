<template>
  <v-layout row wrap>
    <v-flex xs12 sm10 offset-sm1 md6 offset-md0
      v-for="item in samples"
      v-bind:key="item.id" >
      <v-card href height="100%" >
        <a target="_blank" :href=item.locationURL>
          <v-img
            :src=item.imageURL
            class="my-3"
            height="200">
          </v-img>
        </a>
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
          <v-btn target="_blank" :href="item.locationURL" >View</v-btn>
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
          id: "clv", 
          imageURL: require('../assets/ca_local_agency_viewer.png'),
          title: "California Campaign Finance Viewer",
          text: 'Public data viewer for city and county agencies in the state of California.',
          bullets: [
            { id: 0, text: "TypeScript, React, Next.js, ECharts, MUI." },
            { id: 0, text: "Deployed on AWS using SST.dev." },
          ],
          locationURL: "https://www.localiviewer.com"
        },

        {
          id: "cdv", 
          imageURL: require('../assets/campaign_disclosure_viewer.png'),
          title: "Campaign Disclosure Viewer",
          text: 'Shows Campaign Disclosure data for city elections. Downloads public data from spreadsheets and stores it in MongoDB. Uses React and Next.js with server side rendering and data fetching.',
          bullets: [
            { id: 0, text: "Front-end: React, Next.js, ECharts, Tailwind." },
            { id: 1, text: "Database: MongoDB." },
          ],
          locationURL: "https://committee-viewer.vercel.app/csd"
        },
        {
          id: "tdb", 
          imageURL: require('../assets/transparency_dashboard.png'),
          title: "Transparency Dashboard",
          text: "Built front-end Angular components, graphical charts, site routing, data fetching from backend, and data flow between components. Designed database schema, queries, data fetching and processing from SD City website.  Developed 80% of the current front-end code and 100% of the back-end code.",
          bullets: [
            { id: 0, text: "Front-end: Angular, ECharts, Material-ui, GraphQL."},
            { id: 1, text: "<a href='https://github.com/opensandiego/sdvv-frontend'>Front-end source code on GitHub</a>"},
            { id: 2, text: "Back-end: NestJS, NodeJS, TypeORM, PostgreSQL."},
            { id: 3, text: "<a href='https://github.com/opensandiego/sdvv-backend'>Back-end source code on GitHub</a>"},
            { id: 4, text: "Worked on the project 20 to 30 hours/week."},
          ],
          locationURL: "https://followthemoneysandiego.org/"
        },        
        {
          id: 'dsm', 
          imageURL: require('../assets/dataset-metrics.png'),
          title: "Dataset Metrics Demo", 
          text: "React Demo for image grouping.",
          bullets: [
            { id: 0, text: "Shows use of React, Next.js, and ECharts."},
            { id: 1, text: "<a href='https://github.com/robertgz/ml-ops'>Source code on GitHub</a>"},
            { id: 2, text: "Worked on in September 2022."},
          ],
          locationURL: "https://robertgz.github.io/ml-ops/"
        },        
        {
          id: 2, 
          imageURL: require('../assets/3d-shape-viewer.png'),
          title: "3D Shape Builder", 
          text: "Create and transform basic 3D shapes.",
          bullets: [
            { id: 0, text: "Shows use of Javascript, Vue 2, and Three.js"},
            { id: 1, text: "<a href='https://github.com/robertgz/3d-shape-builder'>Source code on GitHub</a>"},
            { id: 2, text: "Started: December 2019"},
          ],
          locationURL: "https://robertgz.github.io/3d-shape-builder/"
        },        
        {
          id: 3, 
          imageURL: require('../assets/case-converter.png'),
          title: "Case Converter in React", 
          text: "Application that takes text as input and converts it into several different text cases such as upper and lower case.",
          bullets: [
            { id: 0, text: "Shows use of Javascript, React, and reactstrap"},
            { id: 1, text: "<a href='https://github.com/robertgz/case-converter'>Source code on GitHub</a>"},
            { id: 2, text: "Created: December 2018"},
          ],
          locationURL: "https://robertgz.github.io/case-converter/"
        },        
        {
          id: 4, 
          imageURL: require('../assets/qwert_thumb.png'),
          title: "3D Spinning Shapes - JavaScript",
          text: "Pressing any of the letters <strong>q, w, e, r, t</strong> on the keyboard causes a labeled cube to rotate in one direction. Pressing the letters <strong>a, s, d, f, g</strong> causes a cube to rotate in the opposite direction.",
          bullets: [
            { id: 0, text: "Shows use of Javascript and three.js"},
            { id: 1, text: "Shapes modeled in Blender"},
            { id: 2, text: "<a href='https://github.com/robertgz/3d-spinning-shapes'>Source code on GitHub</a>"},
            { id: 3, text: "Created: November 2018"},
          ],
          locationURL: "https://robertgz.github.io/3d-spinning-shapes/"
        },
        {
          id: 5, 
          imageURL: require('../assets/cad_at_swc.png'),
          title: "College Program Webpage", 
          text: "Webpage listing courses, certificates, degrees, and schedules for the Computer Aided Design and Drafting program at Southwestern College in Chula Vista, CA.",
          bullets: [
            { id: 0, text: "Shows use of Bootstrap, HTML, and CSS"},
            { id: 1, text: "<a href='https://github.com/robertgz/swc-cad-website'>Source code on GitHub</a>"},
            { id: 2, text: "Designed: Fall 2016"},
          ],
          locationURL: "https://robertgz.github.io/swc-cad-website/"
        },
        {
          id: 6, 
          imageURL: require('../assets/calculator.png'),
          title: "Calculator", 
          text: "Created as a project while working through the <a href='https://www.freecodecamp.org/robertgz'>freeCodeCamp</a> curriculum.",
          bullets: [
            { id: 0, text: "Shows use of Bootstrap, HTML, and CSS"},
            { id: 1, text: "Uses JavaScript, jQuery"},
            { id: 2, text: "<a href='https://github.com/robertgz/JavaScript-Calculator'>Source code on GitHub</a>"},
            { id: 3, text: "Created: September 2016 & May 2018"},
          ],
          locationURL: "https://robertgz.github.io/JavaScript-Calculator/"
        },

        // {
        //   id: 7, 
        //   imageURL: require('../assets/twitch_streamers.png'),
        //   title: "Twitch Streamers", 
        //   text: "Created as a project while working through the <a href='https://www.freecodecamp.org/robertgz'>freeCodeCamp</a> curriculum.",
        //   bullets: [
        //     { id: 0, text: "Shows use of Bootstrap and HTML"},
        //     { id: 1, text: "Uses JavaScript, jQuery, and the Twitch API"},
        //     { id: 2, text: "<a href='https://github.com/robertgz/Twitch-Streamers'>Source code on GitHub</a>"},
        //     { id: 3, text: "Created: August & September 2016 (updated January 2019)"},
        //   ],
        //   locationURL: "https://robertgz.github.io/Twitch-Streamers/"
        // },

        {
          id: 8, 
          imageURL: require('../assets/wikipedia_viewer.png'),
          title: "Wikipedia Viewer", 
          text: "Created as a project while working through the <a href='https://www.freecodecamp.org/robertgz'>freeCodeCamp</a> curriculum.",
          bullets: [
            { id: 0, text: "Shows use of Bootstrap, HTML, and CSS"},
            { id: 1, text: "Uses JavaScript, jQuery, and the wikipedia.org API"},
            { id: 2, text: "<a href='https://github.com/robertgz/Wikipedia-Viewer'>Source code on GitHub</a>"},
            { id: 3, text: "Created: August 2016"},
          ],
          locationURL: "https://robertgz.github.io/Wikipedia-Viewer/"
        },
        // {
        //   id: 9, 
        //   imageURL: require('../assets/local_weather.png'),
        //   title: "Local Weather", 
        //   text: "Uses an external API to lookup the browser's IP address and location then uses the response to send to another API to get the weather. Created as a project while working through the <a href='https://www.freecodecamp.org/robertgz'>freeCodeCamp</a> curriculum.",
        //   bullets: [
        //     { id: 0, text: "Shows use of Bootstrap and HTML"},
        //     { id: 1, text: "Uses JavaScript, jQuery, ipinfo.io and openweathermap.org API"},
        //     { id: 2, text: "<a href='https://github.com/robertgz/Local-Weather'>Source code on GitHub</a>"},
        //     { id: 3, text: "Created: August 2016"},
        //   ],
        //   locationURL: "https://robertgz.github.io/Local-Weather/"
        // },

        {
          id: 10, 
          imageURL: require('../assets/random_quote_machine.png'),
          title: "Random Quote Machine", 
          text: "Created as a project while working through the <a href='https://www.freecodecamp.org/robertgz'>freeCodeCamp</a> curriculum.",
          bullets: [
            { id: 0, text: "Shows use of Bootstrap, HTML, and CSS"},
            { id: 1, text: "Uses JavaScript, jQuery, and the wikipedia.org API"},
            { id: 2, text: "<a href='https://github.com/robertgz/Random-Quote-Machine'>Source code on GitHub</a>"},
            { id: 3, text: "Created: August 2016"},
          ],
          locationURL: "https://robertgz.github.io/Random-Quote-Machine/"
        },        
      ]
    }
  }
}
</script>
