import { create } from 'zustand'
import { IProduct } from '../productStore/types'
import { persist } from 'zustand/middleware'

interface ICartItem extends IProduct {
  quantity: number
}

interface ICartStoreState {
  items: ICartItem[]
  addToCart: (product: IProduct) => void
  removeFromCart: (productId: IProduct) => void
  clearCart?: () => void
}

const useCartStore = create<ICartStoreState>()(
  persist(
    (set) => ({
      items: [],
      addToCart: (item) =>
        set((state) => {
          const product = state.items.find(
            (p) => p.productId === item.productId
          )
          if (product) {
            const updateCart = state.items.map((p) => {
              if (p.productId === item.productId) {
                return { ...p, quantity: p.quantity + 1 }
              }
              return p
            })
            return { cart: updateCart }
          } else {
            return {
              items: [...state.items, { ...item, quantity: 1 }],
            }
          }
        }),
      removeFromCart: (item) =>
        set((state) => {
          const hasProductInCart = state.items.find(
            (p) => p.productId === item.productId
          )

          if (hasProductInCart && hasProductInCart.quantity! > 1) {
            const updateCart = state.items.map((p) => {
              if (p.productId === item.productId) {
                return { ...p, quantity: p.quantity! - 1 }
              }
              return p
            })
            return { items: updateCart }
          } else {
            const filteredCart = state.items.filter(
              (p) => p.productId !== item.productId
            )
            return { items: filteredCart }
          }
        }),
    }),
    { name: 'cart-storage' }
  )
)

const handleAddCart = (
  state: ICartStoreState,
  product: IProduct
): ICartStoreState => {
  const hasProductCart = state.items.find(
    (item) => item.productId === product.productId
  )

  if (hasProductCart) {
    return {
      ...state,
      items: state.items.map((item) =>
        item.productId === hasProductCart.productId
          ? { ...item, quantity: item.quantity++ }
          : item
      ),
    }
  }

  return { ...state, items: [...state.items, { ...product, quantity: 1 }] }
}

// const handleRemoveCart = (
//   state: ICartStoreState,
//   productId: number
// ): ICartStoreState => {
//   const updateItems = state.items.filter((item) => item.productId !== productId)
//   return { ...state, items: updateItems }
// }

export default useCartStore
