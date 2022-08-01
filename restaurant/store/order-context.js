import React, { createContext } from "react";

const OrderContext = React.createContext({
  items: [],
  totalAmount: [],
  addItem: () => {},
  removeItem: () => {},
});

export default OrderContext;
