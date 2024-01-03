"use client"

import { Button } from "@/components/ui/button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface MobileFilterProps {
    sizes: Size[];
    colors: Color[];
}

export default function MobileFilter({ sizes, colors }: MobileFilterProps) {
    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)

    return (
        <>
            <Button onClick={onOpen} className="gap-x-2 rounded-full lg:hidden">
                Filters
                <Plus />
            </Button>
            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
                {/* Background */}
                <div className="fixed inset-0 bg-black opacity-25" />
                {/* Dialog position */}
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                        {/* close button */}
                        <div className="flex item-center justify-end px-4">
                            <Button onClick={onClose} variant="icon">
                                <X size={15} />
                            </Button>
                        </div>

                        <div className="p-4 ">
                            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                            <Filter valueKey="colorId" name="Colors" data={colors} />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}
