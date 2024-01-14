'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import React from 'react'
import { BoxIcon } from 'lucide-react'
import MissionLogo from '@/assets/logo-mission.png'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { GithubLogo, GoogleLogo } from 'phosphor-react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <div className=" flex items-center justify-center w-[100%] h-screen">
      <Card className="gap-10">
        <CardHeader className="flex items-center justify-center gap-2">
          <Image src={MissionLogo} alt="logo da mission" width={100} />
          <CardTitle>
            {session ? 'Seja Bem vindo' : 'Entrar em Mission Store'}
          </CardTitle>
          <CardDescription>
            {session
              ? 'Aperte o botão abaixo para acessar seus produtos'
              : 'Faça login com suas redes sociais abaixo'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CardFooter className="flex flex-col gap-5 items-center justify-center">
            {session ? (
              <Button
                variant="secondary"
                onClick={() => router.push('/')}
                size="lg"
                className="w-[80%] h-[60px] bg-green-500 transform hover:scale-110 hover:text-black transition-transform  animate-pulse text-white"
              >
                <BoxIcon width={30} height={20} />
                Ver meus produtos
              </Button>
            ) : (
              <>
                <Button variant="destructive" onClick={() => signIn('google')}>
                  <GoogleLogo width={30} height={20} />
                  Entrar com google
                </Button>
                <p>Ou</p>
                <Button onClick={() => signIn('github')}>
                  <GithubLogo width={30} height={20} />
                  Entrar com github
                </Button>
              </>
            )}
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  )
}
