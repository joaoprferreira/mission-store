'use client'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import CardProduct from '../cardProduct'
import { Separator } from '../ui/separator'

type TCart = {
  children: React.ReactNode
}

export function Cart({ children }: TCart) {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="flex items-center justify-center h-[80%] ">
        <div className="flex w-[100%] h-[100%] justify-center items-center">
          <div className="flex mx-10 my-10 w-[50%] max-h-[100%]  grid grid-cols-1 overflow-auto p-20 gap-10">
            <CardProduct
              isCart
              nameProduct={`nome do produto`}
              descriptionProduct="descrição do produto"
              priceProduct={100}
            />
            <CardProduct
              isCart
              nameProduct={`nome do produto`}
              descriptionProduct="descrição do produto"
              priceProduct={100}
            />{' '}
            <CardProduct
              isCart
              nameProduct={`nome do produto`}
              descriptionProduct="descrição do produto"
              priceProduct={100}
            />{' '}
            <CardProduct
              isCart
              nameProduct={`nome do produto`}
              descriptionProduct="descrição do produto"
              priceProduct={100}
            />{' '}
            <CardProduct
              isCart
              nameProduct={`nome do produto`}
              descriptionProduct="descrição do produto"
              priceProduct={100}
            />{' '}
            <CardProduct
              isCart
              nameProduct={`nome do produto`}
              descriptionProduct="descrição do produto"
              priceProduct={100}
            />
          </div>

          <div className="flex-col w-[30%] h-[30%] items-center justify-center border rounded-lg">
            <DrawerHeader className="gap-5">
              <div className="flex justify-between">
                <DrawerTitle>Subtotal: </DrawerTitle>
                <DrawerTitle>R$: 150</DrawerTitle>
              </div>
              <div className="flex justify-between">
                <DrawerTitle>Total: </DrawerTitle>
                <DrawerTitle>R$: 150</DrawerTitle>
              </div>
            </DrawerHeader>
            <Separator />
            <div className="w-[100%] h-[50%] flex-col flex items-center justify-center gap-5 my-3">
              <Button size="lg" className="w-[90%]">
                Finalizar
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" size="lg" className="w-[90%]">
                  Cancelar
                </Button>
              </DrawerClose>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
