<template>
  <Teleport to="body">
    <div class="toast-container position-fixed p-3" :class="positionClass">
      <ToastDialog ref="composableToastRef" />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref } from 'vue'
import { ComposableToastSymbol } from '../../plugins/composableToast'
import type { ComposableToastService, ToastDialogType } from '../../types'
import ToastDialog from './ToastDialog.vue'

interface Props {
  group?: string
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'middle-left'
    | 'middle-center'
    | 'middle-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top-right'
})

const composableToastRef = ref<ToastDialogType | null>(null)

// ToastDialogのrefを渡すためのinject
const toastService = inject<ComposableToastService>(ComposableToastSymbol)

// トーストを表示する領域内の配置のためのクラスを算出
const positionClass = computed(() => {
  switch (props.position) {
    case 'top-left':
      return 'top-0 start-0'
    case 'top-center':
      return 'top-0 start-50 translate-middle-x'
    case 'top-right':
      return 'top-0 end-0'
    case 'middle-left':
      return 'top-50 start-0 translate-middle-y'
    case 'middle-center':
      return 'top-50 start-50 translate-middle'
    case 'middle-right':
      return 'top-50 end-0 translate-middle-y'
    case 'bottom-left':
      return 'bottom-0 start-0'
    case 'bottom-center':
      return 'bottom-0 start-50 translate-middle-x'
    case 'bottom-right':
      return 'bottom-0 end-0'
    default:
      return ''
  }
})

onMounted(() => {
  if (toastService === undefined) {
    throw Error('composableToastPlugin is not ready.')
  }

  toastService.setToastContainerInstance(composableToastRef.value!, props.group)
})
</script>
