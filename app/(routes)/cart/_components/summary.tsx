"use client"
import Currency from '@/components/currency'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'

import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function Summary() {
    const searchParams = useSearchParams()
    const items = useCart(state => state.items)
    const removeAll = useCart(state => state.removeAll)

    const totalPrice = items.reduce((total, item) => total + Number(item.price), 0)

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success('Payment completed.')
            removeAll()
        }

        if (searchParams.get("cancelled")) {
            toast.error("Something went wrong.")
        }
    }, [searchParams, removeAll])

    const onCheckout = async () => {
        const res = await axios.post(`/${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map(item => item.id),
        });
        //we will calculate the totalCost afresh on the backend.
        window.location = res.data.url;
    }

    return (
        <div
            className='mt-16 rounded-lg px-4 bg-gray-50 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'
        >
            <h2 className='text-lg font-medium text-gray-900 '>
                Order Summary
            </h2>
            <div className='mt-6 space-y-4'>
                <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
                    <div className='text-base font-medium text-gray-900 '>
                        Order Total
                    </div>
                    <Currency value={totalPrice.toString()} />
                </div>
            </div>
            <Button onClick={onCheckout} className='w-full mt-6 rounded-full'>
                Checkout
            </Button>
        </div>
    )
}
