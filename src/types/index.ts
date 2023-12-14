import ConfirmModalDialog from '../components/useConfirmModal/ConfirmModalDialog.vue'
import ToastDialog from '../components/useToast/ToastDialog.vue'

export type ConfirmModalShowOptions = Partial<{
  title: Required<string>
  content: Required<string>
  okText: string
  okClass: string
  cancelText: string
  cancelClass: string
  ok: () => Promise<void>
}>

export type ConfirmModalService = {
  show(options: ConfirmModalShowOptions): void
  hide(): void
  setModalInstance(instance: ConfirmModalDialogType): void
}

export type ConfirmModalDialogType = InstanceType<typeof ConfirmModalDialog>

export type Bootstrap5Themes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

export type ToastMode = 'basic' | 'simple'

export type ComposableToastShowOptions = Partial<{
  title: Partial<string>
  content: Required<string>
  delay: Partial<number>
  animation: Partial<boolean>
  theme: Partial<Bootstrap5Themes>
  mode: Partial<ToastMode>
  group: Partial<string>
}>

export type ComposableToastService = {
  show(options: ComposableToastShowOptions): void
  setToastContainerInstance(instance: ToastDialogType, group?: string): void
}

export type ToastDialogType = InstanceType<typeof ToastDialog>

// Vueテンプレート内の$confirmModalについて補完を効かせるための設定
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $confirmModal: ConfirmModalService
  }
}
