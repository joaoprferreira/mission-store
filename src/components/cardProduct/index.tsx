'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'
import { ShoppingCart, Trash } from 'phosphor-react'
import { Separator } from '@/components/ui/separator'
import useCartStore from '@/store/cartStore/useCartStore'
import { IProduct } from '@/store/productStore/types'
import { formatPrice } from '@/lib/utils'

type TProduct = {
  nameProduct: string
  descriptionProduct: string
  priceProduct: number
  isCart?: boolean
  product: IProduct
}

export default function CardProduct({
  descriptionProduct,
  nameProduct,
  priceProduct,
  isCart,
  product,
}: TProduct) {
  const { addToCart, removeFromCart } = useCartStore()

  return (
    <>
      <Card
        className={
          isCart
            ? `border-none shadow-none rounded-none gap-0 h-[250px]`
            : `w-[300px] h-[300px] flex items-center justify-center`
        }
      >
        <CardContent className="flex align-center gap-2 ">
          <CardTitle className="flex gap-2">
            {isCart ? (
              <CardDescription className="text-xl">Nome:</CardDescription>
            ) : (
              <CardTitle>{nameProduct}</CardTitle>
            )}
          </CardTitle>
        </CardContent>
        <CardContent className="flex align-center gap-2 ">
          <CardTitle className="flex gap-2">
            {isCart ? (
              <CardDescription className="text-xl">Descrição:</CardDescription>
            ) : (
              <CardDescription className="text-sm color-black">
                {descriptionProduct}
              </CardDescription>
            )}
          </CardTitle>
        </CardContent>
        <CardContent className="flex align-center gap-1">
          <CardTitle className="flex gap-2">
            {isCart ? (
              <CardDescription className="text-sm">
                {formatPrice(priceProduct)}
              </CardDescription>
            ) : (
              <CardDescription className="text-sm">
                {formatPrice(priceProduct)}
              </CardDescription>
            )}
          </CardTitle>
        </CardContent>
        {isCart ? (
          <div className="flex items-center gap-5 mx-5">
            <Button onClick={() => removeFromCart(product)}>
              <Trash />
            </Button>

            <Button>-</Button>
            <CardDescription>1</CardDescription>
            <Button>+</Button>
          </div>
        ) : (
          <CardFooter>
            <Button onClick={() => addToCart(product)} className="gap-2">
              Adicionar ao carrinho
              <ShoppingCart />
            </Button>
          </CardFooter>
        )}
      </Card>
      {isCart ? <Separator className=" my-0" /> : ''}
    </>
  )
}
