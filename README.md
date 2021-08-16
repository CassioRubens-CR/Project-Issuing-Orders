
# Project Issuing Orders

# Desafio FullStack - Aplicação Web de Emissão de Pedidos :computer:

- O usuário desta aplicação poderá ​criar novos pedidos e ​alterar os pedidos existentes.

- As informações são armazenadas no banco de dados de forma persistente.

___

## :satellite: [Acesse aplicação web clicando aqui](https://issuing-orders-web.herokuapp.com/) :computer:

___

## Objetivo do teste

- O usuário desta aplicação poderá ​criar novos pedidos e ​alterar os pedidos existentes. Portanto, é indispensável que estas informações sejam armazenadas de forma persistente.

___

## Contexto

- Um​ ​pedido​ ​é​ ​composto​ ​pelas​ ​seguintes​ ​informações:
- **Cliente:** O usuário deve escolher uma opção entre os clientes pré-cadastrados no sistema (tabela​ ​1).​
- **Itens:​​** ​Cada​ ​item​ ​do​ ​pedido​ ​é​ ​composto​ ​pelas​ ​seguintes​ ​informações:
- Produto: o usuário deve escolher uma opção entre os produtos pré-cadastrados no sistema​ ​(tabela​ ​2).​
- Quantidade:​​ ​a​ ​quantidade​ ​do​ ​produto​ ​deve​ ​ser​ ​um​ ​número​ ​inteiro​ ​maior​ ​que​ ​zero.
- Preço unitário: o sistema deve sugerir o preço unitário do produto, mas deve permitir que o usuário o altere (tanto para mais quanto para menos). O preço deve ter no máximo​ ​2​ ​casas​ ​decimais​ ​e​ ​precisa​ ​ser​ ​maior​ ​que​ ​zero.

### Informações pré-cadastradas

- A tabelas a seguir listam as informações utilizadas no pedido que devem ser pré-cadastradas no sistema.

___

## Regras de negócio

### Rentabilidade

- Os itens do pedido devem ser classificados em três níveis de rentabilidade, de acordo com a diferença entre o preço do item (que é informado pelo usuário) e o preço do produto​ ​(que​ ​é​ ​fixo):

- **Rentabilidade ótima:** quando o preço usado no pedido é maior que o preço do produto. Ex: se o preço do produto é de R$ 100, a rentabilidade será ótima se o item for​ ​vendido​ ​por​ ​R$​ ​100,01​ ​(inclusive)​ ​ou​ ​mais.
- **Rentabilidade boa:** quando o preço do item é no máximo 10% menor que o preço do produto. Ex: se o preço do produto é de R$ 100, a rentabilidade será boa se o item for vendido​ ​por​ ​qualquer​ ​preço​ ​entre​ ​R$​ ​90​ ​(inclusive)​ ​e​ ​R$​ ​100​ ​(inclusive).
- **Rentabilidade ruim:** quando o preço do item é inferior ao preço do produto menos 10%. Ex: se o preço do produto é de R$ 100, a rentabilidade será ruim se o preço for menor​ ​ou​ ​igual​ ​a​ ​R$​ ​89,99.

- Quando o usuário escolher o produto para inserir no pedido, o sistema deve calcular e exibir a rentabilidade na tela. Sempre que o preço for modificado, a rentabilidade deve ser recalculada e reexibida. Itens que ficarem com rentabilidade ruim não podem ser inseridos no pedido.

### Múltiplo de venda

- Alguns produtos só podem ser vendidos em quantidades múltiplas de um determinado número. Por exemplo, o produto X-Wing só pode ser vendido em múltiplos de 2, por exemplo, 2, 4, 6, 8, etc. Já o produto Lightsaber só pode ser vendido em múltiplos de 5, ou seja, 5, 10, 15, 20 e assim por diante. Produtos que não possuem múltiplos podem ser vendidos​ ​em​ ​qualquer​ ​quantidade.

___

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto `(Back-End e Front-End)`:

- JavaScript
- [Nodejs](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Express](https://www.npmjs.com/package/express)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Dontenv](https://www.npmjs.com/package/dotenv)
- [Insomnia](https://insomnia.rest/)
- [Heroku](https://www.heroku.com/)
- [ReactJS](https://reactjs.org)
- [Git](https://git-scm.com)
- [GitHub Pages](https://pages.github.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap](https://getbootstrap.com/)

___

> # Demonstração da aplicação

### :satellite: Publicação do `Back-End e Front-End` em um serviço cloud de hospedagens :computer:

- [Acesse aplicação completa clicando aqui](https://issuing-orders-web.herokuapp.com/)

___

### Autor

### :black_nib: Cássio Rubens 🚀

- [Portfólio](https://cassiorubens-cr.github.io/portfolio/)
- [GitHub](https://github.com/CassioRubens-CR/Project-Issuing-Orders)
- [Linkedin](https://www.linkedin.com/in/cássio-rubens)
