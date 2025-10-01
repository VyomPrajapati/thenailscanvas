export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: 'card' | 'upi' | 'cod';
}

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  img: string;
  qty: number;
}

export interface OrderSummary {
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export const paymentMethods = [
  { value: 'card', label: 'Credit/Debit Card', icon: '💳' },
  { value: 'upi', label: 'UPI Payment', icon: '📱' },
  { value: 'cod', label: 'Cash on Delivery', icon: '💰' }
];

export const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Puducherry'
];

export const checkoutMessages = {
  title: "Checkout",
  subtitle: "Complete your order",
  placeOrder: "Place Order",
  orderSuccess: "Order placed successfully!",
  orderError: "Failed to place order. Please try again."
};

export const formValidation = {
  required: "This field is required",
  email: "Please enter a valid email address",
  phone: "Please enter a valid 10-digit phone number",
  pincode: "Please enter a valid 6-digit pincode"
};
