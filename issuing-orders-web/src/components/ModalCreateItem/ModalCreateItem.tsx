import React, {
  ChangeEvent,
  FC,
  ReactElement,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Item from "../../model/ItemModel";
import Product from "../../model/ProductModel";
import api from "../../services/api";

interface ModalItemProp {
  handleCancel: () => void;
  handleInsert: (item: Item) => void;
  showModal: boolean;
}

const ModalCreateItem: FC<ModalItemProp> = ({
  handleCancel,
  handleInsert,
  showModal,
}): ReactElement => {
  const [profitability, setProfitability] = useState();

  const [products, setProducts] = useState<Product[]>([]);

  const [itemForm, setItemForm] = useState<Item>({
    product_id: 0,
    quantity: 0,
    unit_price: 0,
  });

  useEffect(() => {
    const loadProducts = async () => {
      const response = await api.get("/products");
      setProducts(response.data);
    };
    loadProducts();
  }, []);

  const handleProductChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const productSelected = products.find(
      (product) => product.id === Number.parseInt(e.target.value, 10)
    );
    if (productSelected) {
      setItemForm({
        ...itemForm,
        product_id: productSelected.id,
        product: productSelected,
        quantity: productSelected.multiple,
        unit_price: productSelected.unit_price,
      });
    } else {
      setItemForm({ product_id: 0, quantity: 0, unit_price: 0 });
    }
  };

  const handleQuantityChange = (input: HTMLInputElement) => {
    const quantity = input.value ? Number.parseInt(input.value, 10) : 0;
    setItemForm({ ...itemForm, quantity });

    const productSelected = products.find(
      (product) => product.id === itemForm.product_id
    );

    if (productSelected) {
      const quantityValid = quantity % productSelected.multiple === 0;
      if (!quantityValid) {
        input.setCustomValidity(`Esse produto só pode ser vendido em quantidades múltiplas de ${productSelected.multiple}.`);
      } else {
        input.setCustomValidity('');
      }
    }
  };

  const handleUnitPriceChange = async (input: HTMLInputElement) => {
    const unitPrice = input.value ? Number.parseFloat(input.value) : 0;
    setItemForm({ ...itemForm, unit_price: unitPrice });

    const response = await api.get(
      `/products/${itemForm.product_id}/profitability/${unitPrice}`
    );
    setProfitability(response.data);
    if (response.data === 'Rentabilidade ruim') {
      input.setCustomValidity('Item com rentabilidade ruim. O preço unitário é obrigatório, deve ser maior que zero (0) e a rentabilidade do item deve ser boa ou ótima.');
    } else {
      input.setCustomValidity('');
    }
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget as HTMLFormElement;
    const isFormValid = form.checkValidity();

    if (isFormValid) {
      handleInsert(itemForm);
    }
  };

  return (
    <Modal show={showModal} onHide={handleCancel}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Incluir produto ao pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Preencha os campos abaixo para adicionar o produto ao pedido.
          <Form.Group className="mt-3">
            <Form.Label>Produto</Form.Label>
            <Form.Select
              required
              value={itemForm.product_id}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                handleProductChange(e)
              }
            >
              <option value="">[Selecione]</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          
          {!!itemForm.product_id && itemForm.product_id > 0 && (
            <>
              <Form.Group className="mt-3">
                <Form.Label>Quantidade</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  value={itemForm.quantity}
                  required
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleQuantityChange(e.target)
                  }
                />
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Preço unitário</Form.Label>
                <Form.Control
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={itemForm.unit_price}
                  required
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleUnitPriceChange(e.target)
                  }
                />
                <Form.Text className="text-muted">
                  {profitability}
                </Form.Text>
              </Form.Group>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Inserir produto
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModalCreateItem;
