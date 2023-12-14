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

### ComposableToastPlugin
1. import plugin.
```diff:main.js
import { createApp } from 'vue'
import App from './App.vue'

import { ComposableToastPlugin } from '@imo-tikuwa/vue3-bootstrap5-composables'

createApp(App).use(ComposableToastPlugin).mount('#app')
```

2. append ToastContainer component in root Vue file(App.vue).
```diff:App.vue
  <div class="container">
    <router-view />

    <ToastContainer />
  </div>
```

It is possible to install multiple containers. Note that you need to designate a unique group name using the group property for each ToastContainer.
```diff:App.vue
  <div class="container">
    <router-view />

    <ToastContainer />

    <!-- Second ToastContainer with group="group2" -->
    <ToastContainer :group="'group2'" />
  </div>
```

3. wrote codes on the page where you want to display the composable toast.
import useToast composable and call show method.
```vue
<script setup lang="ts">
import { useToast } from '@imo-tikuwa/vue3-bootstrap5-composables'

const toast = useToast()

const someFunction = () => {
  toast.show({
    title: 'Toast Title',
    content: 'Toast Content',
    delay: 5000,
    animation: true,
    theme: 'info',
    mode: 'basic',
  })
}
</script>
```

If you want to display in a group other than the default, specify the 'group' option explicitly.
```vue
const someFunction = () => {
  toast.show({
    ~~~
    group: 'group2',
  })
}
```

This setup allows for the installation of multiple ToastContainer components with unique group names, enabling separate management of toasts across different groups.

#### ToastContainer Props

| Prop       | Default Value | Required | Possible Values                                   | Description                                    |
|------------|---------------|----------|---------------------------------------------------|------------------------------------------------|
| group      | `undefined`   |        | Any string                                        | Defines the group for toast container           |
| position   | `'top-right'` |        | 'top-left' \| 'top-center' \| 'top-right' \| 'middle-left' \| 'middle-center' \| 'middle-right' \| 'bottom-left' \| 'bottom-center' \| 'bottom-right' | Specifies the position of the toast container. |

#### useToast show Method Options

| Option    | Default Value | Required | Possible Values                                | Description                                     |
|-----------|---------------|----------|------------------------------------------------|-------------------------------------------------|
| title     | `undefined`   |        | Any string                                     | Specifies the title of the toast title. <br /> `When the 'mode' is set to 'simple', the 'title' option value will not be displayed.`       |
| content   | `undefined`   | ✓      | Any string                                     | Sets the content of the toast message.|
| delay     | `5000`   |        | Any positive number                            | Sets the delay time (in milliseconds) before the toast disappears.|
| animation | `true`   |        | `true` / `false`                               | Determines whether the toast animation is enabled or not. |
| theme     | `primary`   |        | 'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'light' \| 'dark'  | Sets the theme/color of the toast.               |
| mode      | `basic`   |        | 'basic' \| 'simple'                              | Specifies the mode of the toast.                 |
| group     | `undefined`   |        | Any string                                     | Defines the group for the toast.                 |