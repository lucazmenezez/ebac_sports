import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import { Produto as ProdutoType } from '../../App'
import { addToCart, setFavorite } from '../../store/reducers/carrinho'
import {
  selectIsFavorite,
  selectIsInCart
} from '../../store/reducers/seletorCarrinho'
import { RootReducer } from '../../store/index'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const adicionar = () => dispatch(addToCart(produto))
  const favor = () => dispatch(setFavorite(produto.id))
  const isFavorite = useSelector((root: RootReducer) =>
    selectIsFavorite(root.cart.favorites, produto.id)
  )
  const inCart = useSelector((root: RootReducer) =>
    selectIsInCart(root.cart.itemsToBuy, produto.id)
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={favor} type="button">
        {isFavorite ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={adicionar} type="button">
        {inCart ? 'Remover do Carrinho' : 'Adicionar ao carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
