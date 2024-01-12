import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ICartStoreState } from './types'

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

export default useCartStore
