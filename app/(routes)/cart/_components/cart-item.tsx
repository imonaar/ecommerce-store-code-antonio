"use client"

import Currency from '@/components/currency'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { Product } from '@/types'
import { X } from 'lucide-react'
import Image from 'next/image'

interface CartItemProps {
    data: Product
}

export default function CartItem({ data }: CartItemProps) {
    const cart = useCart()
    const onRemove = () => {
        cart.removeItem(data.id)
    }
    return (
        <li className='flex py-6 border-b'>
            <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
                <Image
                    fill
                    src={data.images[0].url}
                    alt=""
                    className="object-center object-cover"
                />
            </div>
            <div className='relative ml-4 flex flex-col flex-1 justify-between sm:ml-6'>
                <div className='absolute z-10 right-0 top-0 '>
                    <Button onClick={onRemove} variant="icon" className='border'>
                        <X size={15} />
                    </Button>
                </div>
                <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                    <div className='flex justify-between '>
                        <p className='text-lg font-semibold text-black'>
                            {data.name}
                        </p>
                    </div>
                    <div className='mt-1 text-sm flex'>
                        <p className='text-gray-500'> {data.color.name}</p>
                        <p className='text-gray-500 ml-4 border-l border-gray-200 pl-4 '> {data.size.name}</p>
                    </div>
                    <Currency value={data.price} />
                </div>
            </div>
        </li>
    )
}
