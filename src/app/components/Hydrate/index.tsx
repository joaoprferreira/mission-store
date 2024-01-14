'use client'
import MissionLogo from '@/assets/logo-mission.png'

import Image from 'next/image'
import { ReactNode, useEffect, useState } from 'react'

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <>{children}</>
  ) : (
    <div className="flex flex-col gap-5 items-center justify-center h-screen animate-pulse">
      <Image src={MissionLogo} alt="logo da mission" width={100} />
      Carregando...
    </div>
  )
}
