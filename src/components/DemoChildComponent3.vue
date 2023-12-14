<template>
  <h2>Demo3 (Use `useToast()`)</h2>
  <div class="d-flex flex-column flex-xxl-row align-items-center justify-content-center">
    <div class="d-flex flex-xxl-fill justify-content-center justify-content-lg-end mb-2 mb-xxl-0">
      <button type="button" class="btn btn-primary me-2" @click="showToast('primary')">show</button>
      <button type="button" class="btn btn-secondary me-2" @click="showToast('secondary')">
        show
      </button>
      <button type="button" class="btn btn-success me-2" @click="showToast('success')">show</button>
      <button type="button" class="btn btn-danger me-2" @click="showToast('danger')">show</button>
    </div>
    <div class="d-flex flex-xxl-fill justify-content-center justify-content-lg-start">
      <button
        type="button"
        class="btn btn-warning me-2"
        @click="showToast('warning', 'another-toast-container')"
      >
        show
      </button>
      <button
        type="button"
        class="btn btn-info me-2"
        @click="showToast('info', 'another-toast-container')"
      >
        show
      </button>
      <button
        type="button"
        class="btn btn-light me-2"
        @click="showToast('light', 'another-toast-container')"
      >
        show
      </button>
      <button
        type="button"
        class="btn btn-dark me-2"
        @click="showToast('dark', 'another-toast-container')"
      >
        show
      </button>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-md-6 col-lg-2">
      <label>Title</label>
      <input v-model="state.toastTitle" type="text" class="form-control" />
    </div>
    <div class="col-md-6 col-lg-2">
      <label>Content</label>
      <input v-model="state.toastContent" type="text" class="form-control" />
    </div>
    <div class="col-md-6 col-lg-2">
      <label>Delay(ms)</label>
      <input
        v-model="state.toastDelay"
        type="number"
        class="form-control"
        :step="1"
        @input="validateToastDelayInput"
      />
    </div>
    <div class="col-md-6 col-lg-2">
      <label>Animation</label>
      <div class="d-flex justify-content-center">
        <div class="form-check form-switch">
          <input
            v-model="state.toastAnimation"
            type="checkbox"
            role="switch"
            class="form-check-input"
          />
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-2">
      <label>Mode</label>
      <div class="d-flex justify-content-center">
        <div class="form-check form-switch">
          <input v-model="state.toastMode" type="checkbox" role="switch" class="form-check-input" />
          <label>{{ state.toastMode ? 'Basic' : 'Simple' }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useToast } from '../composables/toast'
import { Bootstrap5Themes } from '../types'

const toast = useToast()

interface State {
  toastTitle: string
  toastContent: string
  toastDelay: number
  toastAnimation: boolean
  toastMode: boolean
}

const state = reactive<State>({
  toastTitle: 'Toast Title',
  toastContent: 'Toast Content',
  toastDelay: 5000,
  toastAnimation: true,
  toastMode: true
})

const showToast = (theme: Bootstrap5Themes, group?: string) => {
  toast.show({
    title: state.toastTitle,
    content: state.toastContent,
    delay: state.toastDelay,
    animation: state.toastAnimation,
    theme: theme,
    mode: state.toastMode ? 'basic' : 'simple',
    group: group
  })
}

// Delay(ms)の1つ前の入力値
const toastDelayPrevInput = ref<number>(state.toastDelay)

// Delay(ms)に数値以外の入力を許容しないためのチェック処理
const validateToastDelayInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).valueAsNumber

  if (isNaN(Number(inputValue))) {
    state.toastDelay = toastDelayPrevInput.value
  }
  toastDelayPrevInput.value = state.toastDelay
}
</script>
