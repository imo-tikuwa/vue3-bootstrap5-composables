import '@/scss/styles.scss'

import { createApp } from 'vue'
import App from '@/App.vue'

import { ConfirmModalPlugin } from '@/plugins/confirmModal'

createApp(App).use(ConfirmModalPlugin).mount('#app')
