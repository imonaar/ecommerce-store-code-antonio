"use client"

import { Product } from "@/types"
import Image from "next/image"
import { Button } from "./ui/button"
import { Expand, ShoppingCart } from "lucide-react"
import Currency from "./currency"
import { useRouter } from "next/navigation"
import { usePreviewModel } from "@/hooks/use-preview-model"

export interface ProductCardProps {
    data: Product
}

export default function ProductCard({ data }: ProductCardProps) {
    const router = useRouter()
    const previewModal = usePreviewModel()
    const onOpen = previewModal.onOpen

    const handleClick = () => router.push(`/product/${data.id}`)
    return (
        <div
            onClick={handleClick}
            className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
        >
            {/* images and actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    alt="image"
                    src={data?.images?.[0].url}
                    fill
                    className="aspect-square rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6  bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <Button onClick={(e) => {
                            e.stopPropagation()
                            onOpen(data)
                        }} className="rounded-full" variant='icon' >
                            <Expand size={20} className="text-gray-600" />
                        </Button>
                        <Button className="rounded-full" variant='icon' onClick={() => { }}>
                            <ShoppingCart size={20} className="text-gray-600" />
                        </Button>
                    </div>
                </div>
            </div>
            {/* description */}
            <div>
                <p className="font-semibold text-lg">
                    {data.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data.category?.name}
                </p>
            </div>
            {/* price */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>
    )
}
