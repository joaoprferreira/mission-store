'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import MissionLogo from '@/assets/logo-mission.png'
import { Form, useForm } from 'react-hook-form'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import { GoogleLogo } from 'phosphor-react'

export default function Login() {
  const { register } = useForm()

  return (
    <div className=" flex items-center justify-center w-[100%] h-screen">
      <Card>
        <CardHeader className="flex items-center justify-center">
          <CardTitle>
            <Image src={MissionLogo} alt="logo da mission" width={100} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="direction-column gap-5 bg-gray grid gap-5 justify-center">
            <Input
              {...register('username')}
              type="text"
              prefix="missionStore.com/"
              placeholder="oi"
              className=""
            />
            <Input
              {...register('password')}
              type="text"
              prefix="missionStore.com/"
              placeholder="oi"
            />
            <Button type="submit" className="flex gap-2">
              Entrar! <ArrowRight />
            </Button>
          </form>
          <Button variant="destructive" onClick={() => signIn('google')}>
            <GoogleLogo width={30} height={20} />
            Entrar com google
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
