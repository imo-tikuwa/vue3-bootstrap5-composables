<template>
  <ConfirmModalDialog ref="confirmModalRef" />
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import { ConfirmModalSymbol } from '../../plugins/confirmModal'
import type { ConfirmModalDialogType, ConfirmModalService } from '../../types'

const confirmModalRef = ref<ConfirmModalDialogType | null>(null)

// ConfirmModalDialogのrefを渡すためのinject
const confirmationService = inject<ConfirmModalService>(ConfirmModalSymbol)

onMounted(() => {
  if (confirmationService === undefined) {
    throw Error('confirmModalPlugin is not ready.')
  }

  confirmationService.setModalInstance(confirmModalRef.value!)
})
</script>
