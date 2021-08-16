import React, { FC, ReactElement } from "react";
import { Table } from "react-bootstrap";
import Order from "../../model/OrderModel";
import { formatSimpleDate } from "../../utils/dateUtils";
import "./TableOrders.scss";

interface TableOrderProp {
  handleRowClick: (id: number | undefined) => void;
  orders: Order[];
}

const TableOrders: FC<TableOrderProp> = ({
  handleRowClick,
  orders,
}): ReactElement => {
  return (
    <Table hover responsive striped>
      <thead>
        <tr>
          <th>ID</th>
          <th>Cliente</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {orders.length ? (
          orders.map((order) => (
            <tr
              className="rowClickable"
              key={order.id}
              onClick={() => handleRowClick(order.id)}
            >
              <td>{order.id}</td>
              <td>{order.customer?.name}</td>
              <td>{formatSimpleDate(order.created_at)}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3} className="text-center">
              Não existem pedidos cadastrados
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TableOrders;
