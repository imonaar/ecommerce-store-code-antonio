import Image from "next/image"
import { Tab } from "@headlessui/react"
import { Image as ImageType } from '@/types'
import { cn } from "@/lib/utils"

interface GalleryTabProps {
    image: ImageType
}

export default function GalleryTab({ image }: GalleryTabProps) {
    return (
        <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
            {
                ({ selected }) => (
                    <div>
                        <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                            <Image
                                fill
                                src={image.url}
                                alt=""
                                className="object-center"
                            />
                        </span>
                        <span className={cn("absolute inset-0 ring-2 rounded-md ring-offset-2", selected ? "ring-black" : "ring-transparent")} />
                    </div>
                )
            }
        </Tab>
    )
}
