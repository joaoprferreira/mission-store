'use client'
import { useRouter } from 'next/navigation'
import Header from '@/app/(products)/_components/header'
import Products from '@/components/products'
import useProductStore from '@/store/productStore/useProductStore'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import ListProducts from './(products)/_components/listProducts'

export default function Home() {
  const router = useRouter()
  const { data: session } = useSession({
    required: true,
  })

  return (
    <main className="flex  max-h-screen max-w-screen flex-col py-5 pl-5 gap-20 ">
      <Header />
      <ListProducts />
    </main>
  )
}
