import { FC, ReactElement } from "react";
import { Table } from "react-bootstrap";
import Item from "../../model/ItemModel";

interface TableItemProp {
  items: Item[];
}

const TableItems: FC<TableItemProp> = ({ items }): ReactElement => {
  return (
    <Table responsive="md">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Preço Unitário</th>
        </tr>
      </thead>
      <tbody>
        {items.length ? (
          items.map((item) => {
            return (
              <tr key={item.product_id}>
                <td>{item.product?.name}</td>
                <td>{item.quantity}</td>
                <td>{item.unit_price}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={3} className="text-center">
              Nenhum produto foi adicionado ao pedido
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TableItems;
