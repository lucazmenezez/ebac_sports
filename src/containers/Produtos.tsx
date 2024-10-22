import Produto from '../components/Produto'
import { useGetProductsQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProductsQuery()

  {
    if (isLoading)
      return (
        <S.Loading>
          <h1>« CARREGANDO »</h1>
        </S.Loading>
      )
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
