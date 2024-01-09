import { Cart } from '@/components/cart'
import Header from '@/app/components/header'
import Products from '@/components/products'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex  max-h-screen flex-col p-20 gap-20">
      <Header />
      <div className="grid grid-cols-3 gap-4 overflow-auto h-screen items-center">
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
    </main>
  )
}
