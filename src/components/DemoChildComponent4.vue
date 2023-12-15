<template>
  <h2>Demo4 (Use `$composableToast`)</h2>
  <div class="d-flex flex-column flex-xxl-row align-items-center justify-content-center">
    <div class="d-flex flex-xxl-fill justify-content-center justify-content-lg-end mb-2 mb-xxl-0">
      <button
        type="button"
        class="btn btn-primary me-2"
        @click="
          $composableToast.show({
            title: 'Basic Toast',
            content: 'This is Primary Toast.'
          })
        "
      >
        show
      </button>
      <button
        type="button"
        class="btn btn-secondary me-2"
        @click="
          $composableToast.show({
            title: 'Basic Toast',
            content: 'This is Secondary Toast.',
            theme: 'secondary'
          })
        "
      >
        show
      </button>
      <button
        type="button"
        class="btn btn-success me-2"
        @click="
          $composableToast.show({
            title: 'Basic Toast',
            content: 'This is Success Toast.',
            theme: 'success'
          })
        "
      >
        show
      </button>
      <button
        type="button"
        class="btn btn-danger me-2"
        @click="
          $composableToast.show({
            title: 'Basic Toast',
            content: 'This is Danger Toast.',
            theme: 'danger'
          })
        "
      >
        show
      </button>
    </div>
    <div class="d-flex flex-xxl-fill justify-content-center justify-content-lg-start">
      <button
        type="button"
        class="btn btn-warning me-2"
        @click="
          $composableToast.show({
            title: 'Simple Toast',
            content: 'This is Warning Toast.',
            theme: 'warning',
            mode: 'simple',
            group: 'another-toast-container'
          })
        "
      >
        show
      </button>
      <button
        type="button"
        class="btn btn-info me-2"
        @click="
          $composableToast.show({
            title: 'Simple Toast',
            content: 'This is Info Toast.',
            theme: 'info',
            mode: 'simple',
            group: 'another-toast-container'
          })
        "
      >
        show
      </button>
      <button
        type="button"
        class="btn btn-light me-2"
        @click="
          $composableToast.show({
            title: 'Simple Toast',
            content: 'This is Light Toast.',
            theme: 'light',
            mode: 'simple',
            group: 'another-toast-container'
          })
        "
      >
        show
      </button>
      <button
        type="button"
        class="btn btn-dark me-2"
        @click="
          $composableToast.show({
            title: 'Simple Toast',
            content: 'This is Dark Toast.',
            theme: 'dark',
            mode: 'simple',
            group: 'another-toast-container'
          })
        "
      >
        show
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
