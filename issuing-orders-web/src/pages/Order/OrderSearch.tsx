import React, { FC, ReactElement, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import TableOrders from "../../components/TableOrders/TableOrders";
import Order from "../../model/OrderModel";
import api from "../../services/api";

const OrderSearch: FC<{}> = (): ReactElement => {
  const history = useHistory();

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const loadOrders = async () => {
      const response = await api.get("/orders");
      setOrders(response.data);
    };
    loadOrders();
  }, []);

  const handleNewOrder = () => {
    history.push("/order-form");
  };

  const handleRowClick = (idOrder: number | undefined) => {
    if (idOrder) {
      history.push(`/order-form/${idOrder}`);
    }
  };

  return (
    <>
      <Row>
        <Col xs={9}>
          <PageTitle title="Pedidos Cadastrados" />
        </Col>
        <Col xs={3} className="text-end">
          <Button variant="primary" onClick={handleNewOrder}>
            Novo
          </Button>
        </Col>
      </Row>

      <TableOrders
        handleRowClick={handleRowClick}
        orders={orders}
      ></TableOrders>
    </>
  );
};

export default OrderSearch;
