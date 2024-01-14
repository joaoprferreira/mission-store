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
  quantity: number
}

export default function CardProduct({
  descriptionProduct,
  nameProduct,
  priceProduct,
  isCart,
  product,
  quantity,
}: TProduct) {
  const { addToCart, removeFromCart } = useCartStore()

  console.log('Quantity:', quantity)

  return (
    <>
      <Card
        className={
          isCart
            ? `border-none rounded-none gap-0 h-[250px]`
            : `w-[300px] h-[300px] flex items-center justify-center`
        }
      >
        <CardContent className="flex align-center gap-2 ">
          <CardTitle className="flex gap-2">
            {isCart ? (
              <CardDescription className="text-xl">
                Nome: {nameProduct}
              </CardDescription>
            ) : (
              <CardTitle className="flex text-center">
                {nameProduct.toLowerCase()}
              </CardTitle>
            )}
          </CardTitle>
        </CardContent>
        <CardContent className="flex align-center gap-2 ">
          <CardTitle className="flex gap-2">
            {isCart ? (
              <CardDescription className="text-xl">
                Descrição: {descriptionProduct}
              </CardDescription>
            ) : (
              <CardDescription className="text-sm color-black text-center">
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
            <Button onClick={() => removeFromCart(product, false)}>
              <Trash />
            </Button>

            <Button onClick={() => removeFromCart(product, true)}>-</Button>
            <CardDescription>{quantity}</CardDescription>
            <Button onClick={() => addToCart(product)}>+</Button>
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
