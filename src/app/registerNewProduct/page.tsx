'use client'
import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
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
import { api } from '@/lib/axios'
import { AxiosError } from 'axios'
import useProductStore from '@/store/productStore/useProductStore'
import useCartStore from '@/store/cartStore/useCartStore'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

export default function RegisterNewProduct() {
  const createNewProduct = useProductStore((state) => state.addProduct)
  const { toast } = useToast()
  const getProducts = useProductStore(({ products }) => products)
  const useCart = useCartStore()

  const { data: session } = useSession({
    required: false,
    onUnauthenticated() {
      redirect('/login?callback=/registerNewProduct')
    },
  })

  const router = useRouter()

  const { register, handleSubmit, reset } = useForm<registerFormData>({
    resolver: zodResolver(registerNewProductSchema),
  })

  async function handleRegisterNewProduct(data: registerFormData) {
    reset()
    createNewProduct({
      nameProduct: data.nameProduct,
      priceProduct: Number(data.priceProduct),
      descriptionProduct: data.descriptionProduct,
      productId: uuidv4(),
    })
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
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Preço</Label>
                <Input
                  prefix="R$:"
                  placeholder="Digite o preço do produto..."
                  {...register('priceProduct')}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Descrição</Label>
                <Input
                  placeholder="Digite uma descrição para o produto..."
                  {...register('descriptionProduct')}
                />
              </div>
            </div>
            <CardFooter className="flex justify-between align-center pt-10">
              <Button variant="outline" onClick={() => router.back()}>
                Cancelar
              </Button>
              <Button
                type="submit"
                onClick={() => {
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
                }}
              >
                Cadastrar
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
