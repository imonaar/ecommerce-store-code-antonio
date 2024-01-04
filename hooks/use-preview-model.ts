import { create } from 'zustand'
import { Product } from '@/types'

interface PreviewModelStore {
    isOpen: boolean;
    data?: Product;
    onOpen: (data: Product) => void;
    onClose: () => void
}

const usePreviewModel = create<PreviewModelStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({ data: data, isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export { usePreviewModel }