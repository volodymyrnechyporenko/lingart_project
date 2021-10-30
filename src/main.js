import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleUp, faBars, faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleUp, faFacebookSquare, faEnvelope, faBars, faTimes);

import './scss/style.scss'

const app = createApp(App)

app
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app');