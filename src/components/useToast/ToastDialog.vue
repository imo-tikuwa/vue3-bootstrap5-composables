<template>
  <div
    v-for="(toast, index) in toasts"
    :id="toast.elementId"
    :key="index"
    class="toast"
    :class="[toast.mode === 'simple' ? `text-bg-${toast.theme ?? 'primary'}` : '']"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <!-- 標準のトースト(タイトルとコンテンツを表示) -->
    <template v-if="toast.mode === 'basic'">
      <div class="toast-header">
        <svg
          class="bd-placeholder-img rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" :fill="toast.colorCode"></rect>
        </svg>
        <strong class="me-auto">{{ toast.title }}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">{{ toast.content }}</div>
    </template>
    <!-- シンプルなトースト(コンテンツのみ表示) -->
    <template v-else-if="toast.mode === 'simple'">
      <div class="d-flex">
        <div class="toast-body">{{ toast.content }}</div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ToastDialog'
}
</script>
<script setup lang="ts">
import { onBeforeUnmount, onMounted, onUpdated, ref } from 'vue'
import { Toast } from 'bootstrap'
import type { ComposableToastShowOptions } from '../../types'

type EnhancedComposableToastShowOptions = ComposableToastShowOptions & {
  elementId: string
  colorCode: string
}

const toasts = ref<EnhancedComposableToastShowOptions[]>([])

// Bootstrap5のToastについてインスタンス作成時に渡す、toastクラスを持つ要素を渡す必要があるため
// toastsのRefを変更した際のレンダリングの更新(onUpdated)のフック内で表示のための処理を行う
onUpdated(() => {
  const elements = document.getElementsByClassName('toast')
  Array.from(elements).forEach((element) => {
    // 表示中のものについて再度インスタンス生成はさせない
    if (element.classList.contains('show')) {
      return
    }

    // トーストを表示
    const option: EnhancedComposableToastShowOptions | undefined = toasts.value.find(
      (toast) => toast.elementId === element.id
    )
    Toast.getOrCreateInstance(element, {
      animation: option?.animation ?? true,
      delay: option?.delay ?? 5000
    }).show()

    // トーストが消えるときにレンダリングしたHTMLを削除
    element.addEventListener('hidden.bs.toast', (event: Event) => {
      const toastElement = event.target as HTMLElement
      toastElement.remove()
    })
  })
})

// 10秒起きに全てのトーストが非表示かをチェックし非表示のときにtoastsのRefをクリアする
// ※hidden.bs.toastイベントの中でtoastsのRefを操作すると動作が安定しないための暫定的な措置。より良い案が浮かんだら修正する
const intervalId = ref<number>()
onMounted(() => {
  intervalId.value = window.setInterval(() => {
    if (toasts.value.length > 0) {
      const isAnyToastDisplay = toasts.value.some((toast) => {
        const element = document.getElementById(toast.elementId)
        return element !== null
      })

      if (!isAnyToastDisplay) {
        toasts.value = []
      }
    }
  }, 10000)
})
onBeforeUnmount(() => {
  if (intervalId.value) {
    window.clearInterval(intervalId.value)
  }
})

const show = async (options: ComposableToastShowOptions) => {
  if (options.mode && !['basic', 'simple'].includes(options.mode)) {
    throw new Error('mode is invalid. Allowed modes are: "basic" or "simple"')
  }
  options.mode = options.mode ?? 'basic'

  const toastOptions: EnhancedComposableToastShowOptions = {
    ...options,
    elementId: `toast-${Math.random().toString(36).slice(-8)}`,
    colorCode: getComputedStyle(document.documentElement).getPropertyValue(
      `--bs-${options.theme ?? 'primary'}`
    )
  }
  toasts.value.push(toastOptions)
}

defineExpose({
  show
})
</script>
