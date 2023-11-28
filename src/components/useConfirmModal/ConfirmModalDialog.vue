<template>
  <div
    ref="confirmModalDialogRef"
    data-bs-backdrop="static"
    class="modal fade"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          {{ state.title }}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {{ state.content }}
        </div>
        <div class="modal-footer">
          <button :class="['btn', state.okClass]" @click="wrappedOk">
            {{ state.okText }}
          </button>
          <button :class="['btn', state.cancelClass]" @click="hide">
            {{ state.cancelText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { Modal } from 'bootstrap'
import type { ConfirmModalShowOptions } from '../../types'

const confirmModalDialogRef = ref()
let modalObject: Modal

const initState: ConfirmModalShowOptions = {
  title: '',
  content: '',
  okText: 'OK',
  okClass: 'btn-primary',
  cancelText: 'Cancel',
  cancelClass: 'btn-secondary',
  ok: async () => {}
}
const state = reactive({ ...initState })

onMounted(() => {
  modalObject = new Modal(confirmModalDialogRef.value)
})

const wrappedOk = async () => {
  if (state.ok !== undefined) {
    await state.ok()
  }
  await hide()
}

const show = async (options: ConfirmModalShowOptions) => {
  state.title = options.title || initState.title
  state.content = options.content || initState.content
  state.okText = options.okText || initState.okText
  state.okClass = options.okClass || initState.okClass
  state.cancelText = options.cancelText || initState.cancelText
  state.cancelClass = options.cancelClass || initState.cancelClass
  state.ok = options.ok || initState.ok
  modalObject.show()
}
const hide = async () => {
  modalObject.hide()
}

defineExpose({
  show,
  hide
})
</script>
