import {
  ChangeEvent,
  FC,
  ReactElement,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ModalCreateItem from "../../components/ModalCreateItem/ModalCreateItem";
import PageTitle from "../../components/PageTitle/PageTitle";
import TableItems from "../../components/TableItems/TableItems";
import Customer from "../../model/CustomerModel";
import Item from "../../model/ItemModel";
import Order from "../../model/OrderModel";
import api from "../../services/api";
import "./OrderForm.scss";

interface FeedbackUserProps {
  message: string;
  show: boolean;
  variant: string;
}

const OrderForm: FC<{}> = (): ReactElement => {
  const { id } = useParams<{ id: string }>();

  const [showModalItem, setShowModalItem] = useState(false);
  const [showFeedbackUser, setShowFeedbackUser] = useState<FeedbackUserProps>({
    message: "",
    show: false,
    variant: "",
  });

  const [customers, setCustomers] = useState<Customer[]>([]);

  const [orderForm, setOrderForm] = useState<Order>({
    customer_id: 0,
    items: [] as Item[],
  });

  useEffect(() => {
    const loadCustomers = async () => {
      const response = await api.get("/customers");
      setCustomers(response.data);
    };
    loadCustomers();
  }, []);

  useEffect(() => {
    const loadOrder = async () => {
      if (id) {
        const response = await api.get(`/orders/${id}`);
        setOrderForm(response.data);
      }
    };
    loadOrder();
  }, [id]);

  const updateCustomerForm = (e: ChangeEvent<HTMLSelectElement>) => {
    const customerSelected = customers.find(
      (customer) => customer.id === Number.parseInt(e.target.value, 10)
    );
    if (customerSelected) {
      setOrderForm({
        ...orderForm,
        customer_id: customerSelected.id,
      });
    } else {
      setOrderForm({
        customer_id: 0,
        items: [] as Item[],
      });
    }
  };

  const handleAddItem = () => {
    setShowModalItem(true);
  };

  const handleSaveOrder = async (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget as HTMLFormElement;
    const isFormValid = form.checkValidity();

    if (isFormValid) {
      if (orderForm.id) {
        try {
          const response = await api.put(
            `/orders/${orderForm.id}`,
            orderForm
          );
          setOrderForm(response.data);
          setShowFeedbackUser({
            message: "O pedido foi alterado com sucesso!",
            show: true,
            variant: "success",
          });
        } catch (err) {
          setShowFeedbackUser({
            message:
              "Não foi possível alterar o pedido. Tente novamente mais tarde!",
            show: true,
            variant: "danger",
          });
        }
      } else {
        try {
          const response = await api.post("/orders", orderForm);
          setOrderForm(response.data);
          setShowFeedbackUser({
            message: "O pedido foi inserido com sucesso!",
            show: true,
            variant: "success",
          });
        } catch (err) {
          setShowFeedbackUser({
            message:
              "Não foi possível inserir o pedido. Tente novamente mais tarde!",
            show: true,
            variant: "danger",
          });
        }
      }
    }
  };

  const handleDeleteOrder = async (idOrder: number | undefined) => {
    if (idOrder) {
      try {
        await api.delete(`/orders/${idOrder}`);
        setShowFeedbackUser({
          message: "O pedido foi excluído com sucesso!",
          show: true,
          variant: "success",
        });
        setOrderForm({
          customer_id: 0,
          items: [] as Item[],
        });
      } catch (err) {
        setShowFeedbackUser({
          message:
            "Não foi possível excluir o pedido. Tente novamente mais tarde!",
          show: true,
          variant: "danger",
        });
      }
    }
  };

  const handleClose = () => setShowModalItem(false);

  const handleInsert = (item: Item) => {
    const items = orderForm.items || ([] as Item[]);
    items.push(item);
    setOrderForm({
      ...orderForm,
      items,
    });
    setShowModalItem(false);
  };

  return (
    <>
      <PageTitle title={id ? 'Alterar Pedido' : 'Inserir Novo Pedido' } />

      {showFeedbackUser.show && (
        <Alert
          variant={showFeedbackUser.variant}
          dismissible
          onClose={() =>
            setShowFeedbackUser({ ...showFeedbackUser, show: false })
          }
        >
          {showFeedbackUser.message}
        </Alert>
      )}

      <Form onSubmit={handleSaveOrder}>
        <Row>
          <Form.Group as={Col} className="mb-3" md="3">
            <Form.Label>ID</Form.Label>
            <Form.Control type="number" value={orderForm.id || 0} disabled />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" md="9">
            <Form.Label>Cliente</Form.Label>
            <Form.Select
              required
              value={orderForm.customer_id}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                updateCustomerForm(e)
              }
            >
              <option value="">[Selecione]</option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row>
          <Col xs={7}>
            <span className="subtitle">Items do pedido</span>
          </Col>

          <Col xs={5} className="text-end">
            <Button variant="primary" onClick={handleAddItem}>
              Adicionar
            </Button>
          </Col>
        </Row>

        {showModalItem && (
          <ModalCreateItem
            showModal={showModalItem}
            handleCancel={handleClose}
            handleInsert={handleInsert}
          ></ModalCreateItem>
        )}

        <TableItems items={orderForm.items}></TableItems>

        <Row>
          <Col className="mb-3 text-end" md="12">
            {orderForm.id && (
              <Button
                className="me-1"
                variant="danger"
                type="reset"
                onClick={() => handleDeleteOrder(orderForm.id)}
              >
                Excluir
              </Button>
            )}
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default OrderForm;
