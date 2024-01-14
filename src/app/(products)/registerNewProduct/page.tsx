'use client'
import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { registerFormData, registerNewProductSchema } from './types'
import { zodResolver } from '@hookform/resolvers/zod'
import { redirect, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import useProductStore from '@/store/productStore/useProductStore'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

export default function RegisterNewProduct() {
  const createNewProduct = useProductStore((state) => state.addProduct)
  const { toast } = useToast()

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login?callback=/registerNewProduct')
    },
  })

  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    watch,
  } = useForm<registerFormData>({
    resolver: zodResolver(registerNewProductSchema),
  })

  async function handleRegisterNewProduct(data: registerFormData) {
    if (isValid) {
      await createNewProduct({
        nameProduct: data.nameProduct,
        priceProduct: data.priceProduct,
        descriptionProduct: data.descriptionProduct,
        quantity: 1,
        productId: uuidv4(),
      })
      reset()

      toast({
        className: 'flex bg-green-600	text-white',
        variant: 'default',
        duration: 1500,
        title: 'Produto criado com sucesso!',
        description: 'Vá até a listagem de produtos',
        action: (
          <ToastAction altText="Try again" className="">
            Sair
          </ToastAction>
        ),
      })
    }
  }

  return (
    <div className="flex items-center justify-center w-[100%] h-screen bg-red">
      <Card>
        <CardHeader className="flex items-center justify-center w-[100%]">
          <CardTitle>Cadastre um novo produto</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleRegisterNewProduct)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nome do produto</Label>
                <Input
                  id="name"
                  placeholder="Digite o nome do produto..."
                  {...register('nameProduct')}
                />
                {errors.nameProduct && (
                  <Label htmlFor="name" className="text-red-500">
                    {errors.nameProduct.message}
                  </Label>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="priceProduct">Preço</Label>
                <Input
                  id="priceProduct"
                  className={`border-${
                    !!errors.priceProduct ? 'rose-500' : 'gray-500'
                  }`}
                  placeholder="Digite o preço do produto..."
                  type="number"
                  {...register('priceProduct', { min: 1, max: 99 })}
                />
                {errors.priceProduct && (
                  <Label htmlFor="priceProduct" className="text-red-500">
                    {errors.priceProduct.message}
                  </Label>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="descriptionProduct">Descrição</Label>
                <Input
                  id="descriptionProduct"
                  placeholder="Digite uma descrição para o produto..."
                  {...register('descriptionProduct')}
                />
                {errors.descriptionProduct && (
                  <Label htmlFor="descriptionProduct" className="text-red-500">
                    {errors.descriptionProduct.message}
                  </Label>
                )}
              </div>
            </div>
            <CardFooter className="flex justify-between align-center pt-10">
              <Button variant="outline" onClick={() => router.back()}>
                Cancelar
              </Button>
              <Button type="submit">Cadastrar</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
