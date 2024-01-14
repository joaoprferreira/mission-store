'use client'
import React from 'react'
import { Button } from '../../../../components/ui/button'
import Image from 'next/image'
import Logo from '@/assets/logo-mission.png'
import { Cart } from '../../../../components/cart'
import { ShoppingCartSimple } from 'phosphor-react'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import useCartStore from '@/store/cartStore/useCartStore'
import useProductStore from '@/store/productStore/useProductStore'

export default function Header() {
  const getProducts = useProductStore((state) => state.products)
  const { data: session } = useSession()
  const router = useRouter()
  const useCart = useCartStore()

  async function handleRegisterNewProducts() {
    await router.push('/registerNewProduct')
  }

  const hasProdutcs = getProducts.length

  return (
    <main className="flex justify-around items-center">
      <div className="flex items-center justify-center gap-5">
        <Image alt="Logo mission" src={Logo} width={100} height={100} />
        <h1 className="font-extrabold text-lg">Mission Store</h1>
      </div>
      <div className="flex justify-around gap-2">
        {session ? (
          <>
            <Button
              variant="destructive"
              className={`animate-${hasProdutcs ? 'none' : 'pulse'}`}
              onClick={() => handleRegisterNewProducts()}
            >
              Cadastrar novo produto
            </Button>
            <Cart>
              <div className="flex  cursor-pointer relative">
                <Button className="p-5">
                  <span
                    className="
                  bg-teal-600 
                  text-sm 
                  font-bold 
                  rounded-full 
                  h-5 w-5
                  flex items-center justify-center
                  absolute
                  right-5
                  top-1"
                  >
                    {useCart.items?.length}
                  </span>
                  <ShoppingCartSimple width={50} height={25} />
                </Button>
              </div>
            </Cart>
            <Button variant={'destructive'} onClick={() => signOut()}>
              Sair
            </Button>
            <Avatar>
              <AvatarImage src={`${session}`} alt="imagem do usuário" />
            </Avatar>
          </>
        ) : (
          <>
            <Button>Entrar</Button>
          </>
        )}
      </div>
    </main>
  )
}
