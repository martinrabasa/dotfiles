export type Toast = {
    title: string,
    duration: number,
    isOpen: boolean,
    closeToast: () => void
}