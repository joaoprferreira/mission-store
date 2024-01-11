'use client'
import * as React from 'react'

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
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { api } from '@/lib/axios'
import { AxiosError } from 'axios'

export default function RegisterNewProduct() {
  const { data: session } = useSession({
    required: false,
    onUnauthenticated() {
      redirect('/login?callback=/registerNewProduct')
    },
  })
  const { register, handleSubmit } = useForm<registerFormData>({
    resolver: zodResolver(registerNewProductSchema),
  })

  async function handleRegisterNewProduct(data: registerFormData) {
    await api.post(`/products`, {
      nameProduct: data.nameProduct,
      descriptionProduct: data.descriptionProduct,
      price: data.priceProduct,
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
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button type="submit">Cadastrar</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
