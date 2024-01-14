import Products from '@/components/products'
import { ToastAction } from '@/components/ui/toast'
import { toast } from '@/components/ui/use-toast'
import useCartStore from '@/store/cartStore/useCartStore'
import useProductStore from '@/store/productStore/useProductStore'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import SearchProducts from '../searchProducts'
import { ICartItem } from '@/store/cartStore/types'

export default function ListProducts() {
  const getProducts = useProductStore((state) => state.products)
  const { items } = useCartStore()
  const searchParams = useSearchParams().get('query')

  const filteredProducts = getProducts.filter((product) => {
    const productName = product.nameProduct.toLocaleLowerCase()
    if (!searchParams) return productName
    return productName.startsWith(String(searchParams))
  })

  const products = filteredProducts ? filteredProducts : getProducts

  const prevMyStateRef = useRef<ICartItem[]>([])

  useEffect(() => {
    const currentItems = items
    if (
      prevMyStateRef.current !== undefined &&
      prevMyStateRef.current !== items
    ) {
      const addedItems = currentItems.filter(
        (item) => !prevMyStateRef.current.includes(item)
      )
      if (addedItems.length > prevMyStateRef.current.length) {
        toast({
          className: 'flex bg-green-600	text-white',
          variant: 'default',
          duration: 3000,
          title: 'Produto Adicionado ao carrinho!',
          description: 'Vá até o carrinho',
          action: (
            <ToastAction altText="Try again" className="">
              Sair
            </ToastAction>
          ),
        })
      }
    } else if (currentItems.length < prevMyStateRef.current.length) {
      toast({
        className: 'flex	text-white',
        variant: 'destructive',
        duration: 3000,
        title: 'Produto Adicionado ao carrinho!',
        description: 'Vá até o carrinho',
        action: (
          <ToastAction altText="Try again" className="">
            Sair
          </ToastAction>
        ),
      })
    }
    prevMyStateRef.current = items as any
  }, [items])

  return (
    <>
      <SearchProducts />
      <div className="overflow-auto h-screen">
        {getProducts.length ? (
          <div className="grid grid-cols-3 gap-20  h-screen max-w-[80%] flex mx-auto">
            {products.map((item, index) => (
              <Products key={index} product={item} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center  h-[500px]">
            <h1 className="text-black animate-pulse">
              Cadastre seu primeiro produto!
            </h1>
          </div>
        )}
      </div>
    </>
  )
}
