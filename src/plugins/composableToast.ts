import { type App, type Plugin, ref, Ref } from 'vue'
import type { ComposableToastService, ToastDialogType } from '../types'
import ToastDialog from '../components/useToast/ToastDialog.vue'
import ToastContainer from '../components/useToast/ToastContainer.vue'

/**
 * provide/injectで使用する固有のシンボル
 */
export const ComposableToastSymbol = Symbol()

/**
 * コンポーザブルトーストのプラグイン本体
 */
export const ComposableToastPlugin: Plugin = {
  install(app: App) {
    // トーストは複数個所の定義を可能とするため、マップとして定義
    const toastInstances: Record<string, Ref<ToastDialogType | undefined>> = {}

    // プラグインが依存するVueコンポーネントをインポートせずにグローバルに呼び出せるよう登録
    app.component('ToastDialog', ToastDialog)
    app.component('ToastContainer', ToastContainer)

    const service: ComposableToastService = {
      show: (options) => {
        const group = options.group || 'default'
        if (toastInstances[group]) {
          toastInstances[group].value?.show(options)
        } else {
          console.error(`ToastContainer with group "${group}" not found.`)
        }
      },
      setToastContainerInstance: (instance: ToastDialogType, group?: string) => {
        group = group || 'default'
        if (!toastInstances[group]) {
          toastInstances[group] = ref()
        }
        toastInstances[group].value = instance
      }
    }

    app.provide(ComposableToastSymbol, service)
  }
}
