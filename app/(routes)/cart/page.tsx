"use client"

import { useEffect, useState } from "react"
import Container from "@/components/container"
import { useCart } from "@/hooks/use-cart"
import CartItem from "./_components/cart-item"
import Summary from "./_components/summary"

export default function Cart() {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => setIsMounted(true), [])
    const cart = useCart()

    if (!isMounted) {
        return null
    }

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 ?
                                <p className="text-neutral-500">No Items added to cart</p>
                                : (
                                    <ul>
                                        {cart.items.map(item => <CartItem key={item.id} data={item} />)}
                                    </ul>
                                )}
                        </div>
                        <Summary />
                    </div>
                </div>
            </Container>
        </div>
    )
}
