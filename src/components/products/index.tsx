'use client'
import React from 'react'
import { Button } from '../ui/button'
import { ShoppingCart } from 'phosphor-react'
import CardProduct from '../cardProduct'
import { IProduct } from '@/store/productStore/types'

type IProducts = {
  product: IProduct
}

export default function Products({ product }: IProducts) {
  return (
    <CardProduct
      nameProduct={product.nameProduct}
      descriptionProduct={product.descriptionProduct}
      priceProduct={product.priceProduct}
      product={product}
    />
  )
}
