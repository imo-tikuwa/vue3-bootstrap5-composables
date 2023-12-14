import ConfirmModalDialog from '../components/useConfirmModal/ConfirmModalDialog.vue'

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

// Vueテンプレート内の$confirmModalについて補完を効かせるための設定
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $confirmModal: ConfirmModalService
  }
}
