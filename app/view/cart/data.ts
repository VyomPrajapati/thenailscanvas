export interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  qty: number;
}

export interface CartSummary {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export const calculateCartSummary = (items: CartItem[]): CartSummary => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const shipping = subtotal > 1000 ? 0 : 99; // Free shipping over ₹1000
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;

  return {
    subtotal,
    shipping,
    tax,
    total
  };
};

export const cartMessages = {
  empty: "Your cart is empty. Add some beautiful nails to get started!",
  addSuccess: "Product added to cart successfully!",
  removeSuccess: "Product removed from cart",
  updateSuccess: "Cart updated successfully"
};

export const cartActions = {
  continueShopping: "Continue Shopping",
  viewCart: "View Cart",
  proceedToCheckout: "Proceed to Checkout",
  updateCart: "Update Cart"
};
