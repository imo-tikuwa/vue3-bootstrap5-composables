import { inject } from 'vue'
import { ComposableToastSymbol } from '../plugins/composableToast'
import type { ComposableToastService } from '../types'

/**
 * トーストを扱うためのコンポーザブル関数
 */
export function useToast() {
  const service = inject<ComposableToastService>(ComposableToastSymbol)
  if (service === undefined) {
    throw new Error('useToast inject failed.')
  }

  return service
}
