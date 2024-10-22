import { useSelector } from 'react-redux'

import * as S from './styles'
import cesta from '../../assets/cesta.png'

import {
  selectFavouritesQtt,
  selectProductinCart,
  selectTotalValue
} from '../../store/reducers/seletorCarrinho'
import { paraReal } from '../Produto'

const Header = () => {
  const valorTotal = useSelector(selectTotalValue)
  const quantidade = useSelector(selectProductinCart)
  const favorites = useSelector(selectFavouritesQtt)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favorites} favoritos</span>
        <img src={cesta} />
        <span>
          {quantidade} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
