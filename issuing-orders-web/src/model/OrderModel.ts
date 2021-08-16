import Customer from "./CustomerModel";
import Item from "./ItemModel";

interface Order {
  id?: number;
  customer_id: number;
  customer?: Customer;
  items: Item[];
  created_at?: Date;
}

export default Order;