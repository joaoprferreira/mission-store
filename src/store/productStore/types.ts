export interface IProduct {
  productId: string
  nameProduct: string
  priceProduct: number | string
  descriptionProduct: string
  quantity: number
}

export interface CartItem extends IProduct {
  quantity: number
}
