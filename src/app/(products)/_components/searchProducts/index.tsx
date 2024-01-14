'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchProducts() {
  const [search, setSearchValue] = useState<string>()

  const router = useRouter()

  const handleSearchItemsParams = (value: string) => {
    router.push(`/?query=${encodeURIComponent(value as string)}`)
  }

  return (
    <div className="w-[100%] gap-5 flex items-center justify-center">
      <Input
        className="w-[30%]"
        type="text"
        placeholder="Nome do produto..."
        onChange={(e) => handleSearchItemsParams(e.target.value)}
      />
      <Button>
        <SearchIcon />
      </Button>
    </div>
  )
}
