<template>
  <h2>Demo1 (Use `useConfirmModal()`)</h2>
  <div class="row justify-content-center">
    <div class="col-3">
      <button type="button" class="btn btn-primary" @click="handleClick1">show</button>
    </div>
    <div class="col-3">
      <button type="button" class="btn btn-secondary" @click="handleClick2">show</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConfirmModal } from '../composables/confirmModal'

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
const handleClick2 = () => {
  confirmModal.show({
    title: 'Confirm2',
    content: 'Secondary Color Button Clicked.',
    ok: async () => {
      console.log('OK Clicked.')
    }
  })
}
</script>
