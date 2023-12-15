<template>
  <div class="container">
    <header class="mt-4 mb-4 text-center">
      <h1>Vue3&Bootstrap5 Composable Examples.</h1>
    </header>

    <main class="text-center">
      <div>
        <DemoChildComponent1 />
      </div>
      <div class="mt-4">
        <DemoChildComponent2 />
      </div>
      <div class="mt-4">
        <DemoChildComponent3 />
      </div>
      <div class="mt-4">
        <DemoChildComponent4 />
      </div>
    </main>

    <ConfirmModalInjection />
    <ToastContainer />
    <ToastContainer position="bottom-left" group="another-toast-container" />
  </div>
</template>

<script setup lang="ts">
import DemoChildComponent1 from './components/DemoChildComponent1.vue'
import DemoChildComponent2 from './components/DemoChildComponent2.vue'
import DemoChildComponent3 from './components/DemoChildComponent3.vue'
import DemoChildComponent4 from './components/DemoChildComponent4.vue'
import ConfirmModalInjection from './components/useConfirmModal/ConfirmModalInjection.vue'
import ToastContainer from './components/useToast/ToastContainer.vue'
</script>
