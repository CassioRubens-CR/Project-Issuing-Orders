import Product from "./ProductModel";

interface Item {
  product?: Product;
  product_id: number;
  quantity: number;
  unit_price: number;
}

export default Item;