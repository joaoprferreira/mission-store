import MissionLogo from '@/assets/logo-mission.png'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen animate-pulse">
      <Image src={MissionLogo} alt="logo da mission" width={100} />
      Carregando...
    </div>
  )
}
