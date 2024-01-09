'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'
import { ShoppingCart, Trash } from 'phosphor-react'
import { Separator } from '@/components/ui/separator'

type TProduct = {
  nameProduct: string
  descriptionProduct: string
  priceProduct: number
  isCart?: boolean
}

export default function CardProduct({
  descriptionProduct,
  nameProduct,
  priceProduct,
  isCart,
}: TProduct) {
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
              ''
            )}
          </CardTitle>
          {nameProduct}
        </CardContent>
        <CardContent className="flex align-center gap-2 ">
          <CardTitle className="flex gap-2">
            {isCart ? (
              <CardDescription className="text-xl">Descrição:</CardDescription>
            ) : (
              ''
            )}
          </CardTitle>
          {descriptionProduct}
        </CardContent>
        <CardContent className="flex align-center gap-1">
          <CardTitle className="flex gap-2">
            {isCart ? (
              <CardDescription className="text-xl">$:</CardDescription>
            ) : (
              ''
            )}
          </CardTitle>
          {priceProduct}
        </CardContent>
        {isCart ? (
          <div className="flex items-center gap-5 mx-5">
            <Button>
              <Trash />
            </Button>

            <Button>-</Button>
            <CardDescription>1</CardDescription>
            <Button>+</Button>
          </div>
        ) : (
          <CardFooter>
            <Button>
              Adicionar ao carrinho!
              <ShoppingCart />
            </Button>
          </CardFooter>
        )}
      </Card>
      {isCart ? <Separator className=" my-0" /> : ''}
    </>
  )
}
