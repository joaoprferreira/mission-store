import { create } from 'zustand'
import { produce } from 'immer'

import { IProduct } from './types'
import { devtools, persist } from 'zustand/middleware'

interface IProductStoreState {
  products: IProduct[]
}

interface IProductStoreActions {
  addProduct: (product: IProduct) => void
}

type ProductStore = IProductStoreState & IProductStoreActions

const initialState: IProductStoreState = {
  products: [],
}

const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [],
      addProduct: (product) =>
        set(
          produce((state) => {
            state.products.push(product)
          })
        ),
    }),
    { name: 'list-products' }
  )
)

export default useProductStore
