"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShoppingBag } from 'lucide-react'

import { Button } from './ui/button'
import { useCart } from '@/hooks/use-cart'

export default function NavbarActions() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const router = useRouter()
  const cart = useCart()

  if (!mounted) {
    return null
  }
  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <Button onClick={() => router.push("/cart")} className='rounded-full bg-black px-4 py-2'>
        <ShoppingBag
          size={20}
          color="white"
        />
        <span className='ml-2 text-sm font-medium text-white'>{cart.items.length}</span>
      </Button>
    </div>
  )
}