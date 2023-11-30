# @imo-tikuwa/vue3-bootstrap5-composables

provide composable plugins for environments using vue3 and boostrap5.

## Installation
```
npm install -D @imo-tikuwa/vue3-bootstrap5-composables
```

## Usage
### ConfirmModalPlugin
1. import plugin.
```diff:main.js
import { createApp } from 'vue'
import App from './App.vue'

import { ConfirmModalPlugin } from '@imo-tikuwa/vue3-bootstrap5-composables'

createApp(App).use(ConfirmModalPlugin).mount('#app')
```

2. append ConfirmModalInjection component in root Vue file(App.vue).
```diff:App.vue
  <div class="container">
    <router-view />

    <ConfirmModalInjection />
  </div>
```

3. wrote codes on the page where you want to display the confirmation modal.
import useConfirmModal composable and call show method.
```vue
<script setup lang="ts">
import { useConfirmModal } from '@imo-tikuwa/vue3-bootstrap5-composables'

const confirmModal = useConfirmModal()

const handleClick1 = () => {
  confirmModal.show({
    title: 'Confirm1',
    content: 'Primary Color Button Clicked.',
    ok: async () => {
      console.log('OK Clicked.')
    }
  })
}
</script>
```

alternatively, you can call it directly from $confirmModal.show inside the `<template>` section
```vue
<template>
  <button
    type="button"
    class="btn btn-warning"
    @click="
      $confirmModal.show({
        title: 'Confirm3',
        content: 'Warning Color Button Clicked.',
        okText: '〇',
        okClass: 'btn-success w-25',
        cancelText: '×',
        cancelClass: 'btn-warning w-25',
        ok: handleOk
      })
    "
  >
    show
  </button>
</template>
```
