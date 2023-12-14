import './scss/styles.scss'

import { createApp } from 'vue'
import App from './App.vue'

import { ConfirmModalPlugin } from './plugins/confirmModal'
import { ComposableToastPlugin } from './plugins/composableToast'

createApp(App).use(ConfirmModalPlugin).use(ComposableToastPlugin).mount('#app')
