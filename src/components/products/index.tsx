'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'
import { ShoppingCart } from 'phosphor-react'
import CardProduct from '../cardProduct'

export default function Products() {
  return (
    <CardProduct
      nameProduct="nome do produto"
      descriptionProduct="descrição do produto"
      priceProduct={100}
    />
  )
}
