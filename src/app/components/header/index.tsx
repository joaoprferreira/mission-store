'use client'
import React from 'react'
import { Button } from '../../../components/ui/button'
import Image from 'next/image'
import Logo from '@/assets/logo-mission.png'
import { Cart } from '../../../components/cart'
import { ShoppingCartSimple } from 'phosphor-react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  async function handleRegisterNewProducts() {
    await router.push('/registerNewProduct')
  }

  return (
    <main className="flex justify-between align-center">
      <div className="flex items-center justify-center gap-5">
        <Image alt="Logo mission" src={Logo} width={100} height={100} />
        <h1 className="font-extrabold text-lg">Mission Store</h1>
      </div>
      <div className="flex justify-around gap-2">
        <Button
          variant="destructive"
          onClick={() => handleRegisterNewProducts()}
        >
          Cadastrar novo produto
        </Button>
        <Cart>
          <Button>
            <ShoppingCartSimple width={50} height={25} />
          </Button>
        </Cart>
      </div>
    </main>
  )
}
