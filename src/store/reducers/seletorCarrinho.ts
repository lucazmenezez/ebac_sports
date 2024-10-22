import { Produto as ProductType } from '../../App'
import { RootReducer } from '../index'

export const selectProductinCart = (root: RootReducer) =>
  root.cart.itemsToBuy.length

export const selectTotalValue = (root: RootReducer) =>
  root.cart.itemsToBuy.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

export const selectFavouritesQtt = (root: RootReducer) =>
  root.cart.favorites.length

export const selectIsFavorite = (favorites: number[], id: number) =>
  favorites.some((pid) => pid === id)

export const selectIsInCart = (products: ProductType[], id: number) =>
  products.some((p) => p.id === id)
