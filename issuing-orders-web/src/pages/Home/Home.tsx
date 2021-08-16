import { FC, ReactElement } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import diagrama from "../../images/diagrama_banco.png";
import "./Home.scss";

const Home: FC<{}> = (): ReactElement => {
  const history = useHistory();

  const handleOrders = () => {
    history.push("/order");
  };

  return (
    <div>
      <PageTitle title="Emissão de pedidos" />
      <h3>Bem vindo a aplicação web que simula a emissão de pedidos.</h3>
      <p>O usuário desta aplicação poderá ​criar novos pedidos e ​alterar os pedidos existentes.</p>
      <p>As informações são armazenadas no banco de dados de forma persistente.</p>
      <h4>Regras de negócio:</h4>
      <p>* Rentabilidade:</p>
      <ul>
        <li>Os itens do pedido devem ser classificados em três níveis de rentabilidade, de acordo com a diferença entre o preço do item (que é informado pelo usuário) e o preço do produto​ ​(que​ ​é​ ​fixo):</li>
        <li>Rentabilidade ótima: quando o preço usado no pedido é maior que o preço do produto. Ex: se o preço do produto é de R$ 100, a rentabilidade será ótima se o item for​ ​vendido​ ​por​ ​R$​ ​100,01​ ​(inclusive)​ ​ou​ ​mais.</li>
        <li>Rentabilidade boa: quando o preço do item é no máximo 10% menor que o preço do produto. Ex: se o preço do produto é de R$ 100, a rentabilidade será boa se o item for vendido​ ​por​ ​qualquer​ ​preço​ ​entre​ ​R$​ ​90​ ​(inclusive)​ ​e​ ​R$​ ​100​ ​(inclusive).</li>
        <li>Rentabilidade ruim: quando o preço do item é inferior ao preço do produto menos 10%. Ex: se o preço do produto é de R$ 100, a rentabilidade será ruim se o preço for menor​ ​ou​ ​igual​ ​a​ ​R$​ ​89,99.</li>
      </ul>
      <p>* Múltiplo de venda:</p>
      <ul>
        <li>Alguns produtos só podem ser vendidos em quantidades múltiplas de um determinado número. Por exemplo, o produto X-Wing só pode ser vendido em múltiplos de 2, por exemplo, 2, 4, 6, 8, etc. Já o produto Lightsaber só pode ser vendido em múltiplos de 5, ou seja, 5, 10, 15, 20 e assim por diante. Produtos que não possuem múltiplos podem ser vendidos​ ​em​ ​qualquer​ ​quantidade.</li>
      </ul>
      
      <img className="image-diagram" src={diagrama} alt="Diagrama do banco de dados"></img>

      <Button variant="primary" onClick={handleOrders}>
        Pedidos
      </Button>
    </div>
  )
}

export default Home;
