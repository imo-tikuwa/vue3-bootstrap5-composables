import { inject } from 'vue'
import { ConfirmModalSymbol } from '@/plugins/confirmModal'
import type { ConfirmModalService } from '@/types'

/**
 * 確認モーダルを扱うためのコンポーザブル関数
 */
export function useConfirmModal() {
  const service = inject<ConfirmModalService>(ConfirmModalSymbol)
  if (service === undefined) {
    throw new Error('useConfirmModal inject failed.')
  }

  return service
}
