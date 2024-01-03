import Container from '@/components/container'
import React from 'react'
import Billboard from '@/components/billboard'
import { getBillboards } from '@/actions/get-billboards';
import { getProducts } from '@/actions/get-products';
import ProductList from '@/components/product-list';

export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboards('ac916874-4adf-41f5-98fe-3df2859588f9')
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
      
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}
