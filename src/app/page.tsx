'use client'
import Header from '@/app/components/header'
import Products from '@/components/products'
import useProductStore from '@/store/productStore/useProductStore'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Home() {
  const getProducts = useProductStore((state) => state.products)
  const { data: session } = useSession({
    required: true,
  })

  return (
    <main className="flex  max-h-screen flex-col py-5 pl-5 gap-20">
      <Header />
      <div className="grid grid-cols-3 gap-4 overflow-auto h-screen items-center">
        {getProducts.map((item) => (
          <>
            <Products product={item} />
          </>
        ))}
      </div>
    </main>
  )
}
