import { IProduct } from '../productStore/types'

export interface ICartItem extends IProduct {
  quantity: number
}

export interface ICartStoreState {
  items: ICartItem[]
  addToCart: (product: IProduct) => void
  removeFromCart: (productId: IProduct, isDecreasing: boolean) => void
  clearCart?: () => void
}
