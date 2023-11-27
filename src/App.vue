<template>
  <div class="container">
    <header class="mt-4 mb-4 text-center">
      <h1>Vue3&Bootstrap5 Confirm Modal Example.</h1>
    </header>

    <main class="text-center">
      <div>
        <DemoChildComponent1 />
      </div>
      <div class="mt-4">
        <DemoChildComponent2 />
      </div>
    </main>

    <ConfirmModalInjection />
  </div>
</template>

<script setup lang="ts">
import DemoChildComponent1 from '@/components/DemoChildComponent1.vue'
import DemoChildComponent2 from '@/components/DemoChildComponent2.vue'
</script>
