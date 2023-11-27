<template>
  <h2>Demo2 (Use `$confirmModal`)</h2>
  <div class="row justify-content-center">
    <div class="col-3">
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
    </div>
    <div class="col-3">
      <button
        type="button"
        class="btn btn-danger"
        @click="
          $confirmModal.show({
            title: 'Confirm4',
            content: 'Danger Color Button Clicked.',
            okClass: 'btn-danger',
            cancelClass: 'btn-warning',
            ok: handleOk
          })
        "
      >
        show
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleOk = async () => {
  console.log('OK Clicked.')
}
</script>
