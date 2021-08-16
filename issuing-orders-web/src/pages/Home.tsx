import { FC, ReactElement } from "react";
import PageTitle from "../components/PageTitle/PageTitle";

const Home: FC<{}> = (): ReactElement => {

  return (
    <div id="page-home">
      <PageTitle title="Emissão de pedidos" />
      <h2>Bem vindo a aplicação web que simula a emissão de pedidos.</h2>
      <h4>O usuário desta aplicação poderá ​criar novos pedidos e ​alterar os pedidos existentes.</h4>
      <h4>As informações são armazenadas no banco de dados de forma persistente.</h4>
      <h4>Regras de negócio:</h4>
      <h4>* Rentabilidade:</h4>
      <h5>Os itens do pedido devem ser classificados em três níveis de rentabilidade, de acordo com a diferença entre o preço do item (que é informado pelo usuário) e o preço do produto​ ​(que​ ​é​ ​fixo):</h5>
      <h5>Rentabilidade ótima: quando o preço usado no pedido é maior que o preço do produto. Ex: se o preço do produto é de R$ 100, a rentabilidade será ótima se o item for​ ​vendido​ ​por​ ​R$​ ​100,01​ ​(inclusive)​ ​ou​ ​mais.</h5>
      <h5>Rentabilidade boa: quando o preço do item é no máximo 10% menor que o preço do produto. Ex: se o preço do produto é de R$ 100, a rentabilidade será boa se o item for vendido​ ​por​ ​qualquer​ ​preço​ ​entre​ ​R$​ ​90​ ​(inclusive)​ ​e​ ​R$​ ​100​ ​(inclusive).</h5>
      <h5>Rentabilidade ruim: quando o preço do item é inferior ao preço do produto menos 10%. Ex: se o preço do produto é de R$ 100, a rentabilidade será ruim se o preço for menor​ ​ou​ ​igual​ ​a​ ​R$​ ​89,99.</h5>
      <h4>* Múltiplo de venda:</h4>
      <h5>Alguns produtos só podem ser vendidos em quantidades múltiplas de um determinado número. Por exemplo, o produto X-Wing só pode ser vendido em múltiplos de 2, por exemplo, 2, 4, 6, 8, etc. Já o produto Lightsaber só pode ser vendido em múltiplos de 5, ou seja, 5, 10, 15, 20 e assim por diante. Produtos que não possuem múltiplos podem ser vendidos​ ​em​ ​qualquer​ ​quantidade.</h5>
    </div>
  )
}

export default Home;
