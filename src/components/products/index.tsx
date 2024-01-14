'use client'
import React from 'react'
import { Button } from '../ui/button'
import { ShoppingCart } from 'phosphor-react'
import CardProduct from '../cardProduct'
import { CartItem, IProduct } from '@/store/productStore/types'

type IProducts = {
  product: CartItem
}

export default function Products({ product }: IProducts) {
  return (
    <CardProduct
      nameProduct={product.nameProduct}
      descriptionProduct={product.descriptionProduct}
      priceProduct={Number(product?.priceProduct)}
      quantity={product.quantity}
      product={product}
    />
  )
}
