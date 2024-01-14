import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number | null) => {
  if (price === null || isNaN(price)) {
    return 'R$ 0,00'
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price / 100)
}

export const formatPriceInput = (value: any) => {
  const rawValue = value.replace(/[^\d]/g, '')
  const formattedValue = (rawValue / 100).toFixed(2)
  return formattedValue
}
