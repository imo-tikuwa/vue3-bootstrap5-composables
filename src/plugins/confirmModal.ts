import { type App, type Plugin, ref } from 'vue'
import type { ConfirmModalService } from '@/types'
import ConfirmModalDialog from '@/components/useConfirmModal/ConfirmModalDialog.vue'
import ConfirmModalInjection from '@/components/useConfirmModal/ConfirmModalInjection.vue'

/**
 * provide/injectで使用する固有のシンボル
 */
export const ConfirmModalSymbol = Symbol()

/**
 * 確認モーダルのプラグイン本体
 */
export const ConfirmModalPlugin: Plugin = {
  install(app: App) {
    const modalInstance = ref()

    // プラグインが依存するVueコンポーネントをインポートせずにグローバルに呼び出せるよう登録
    app.component('ConfirmModalDialog', ConfirmModalDialog)
    app.component('ConfirmModalInjection', ConfirmModalInjection)

    const service: ConfirmModalService = {
      show: (options) => {
        modalInstance.value.show(options)
      },
      hide: () => {
        modalInstance.value.hide()
      },
      setModalInstance: (instance: HTMLElement) => {
        modalInstance.value = instance
      }
    }

    // コンポーザブル関数の宣言無しにvueテンプレートで使用可能とする設定
    app.config.globalProperties.$confirmModal = service

    app.provide(ConfirmModalSymbol, service)
  }
}
