"use client"

import { useEffect, useState } from "react"

const formatter = new Intl.NumberFormat("en-us", {
    style: 'currency',
    currency: 'USD'
})

interface CurrencyProps {
    value: string
}

export default function Currency({ value }: CurrencyProps) {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    if (!mounted) {
        return null
    }
    return (
        <p className="font-semibold">
            {
                formatter.format(Number(value))
            }
        </p>
    )
}
