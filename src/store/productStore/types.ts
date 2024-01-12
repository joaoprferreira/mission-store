export interface IProduct {
  productId: string
  nameProduct: string
  priceProduct: number
  descriptionProduct: string
}

export interface CartItem extends IProduct {
  quantity: number
}
