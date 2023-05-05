export interface Seller {
  firstName: string;
  lastName: string;
  businessName?: string;
  businessEmail: string;
  businessPhone: string;
  password: string;
  payments?: any[]; // adjust type to match your specific requirements
  shipping?: any[]; // adjust type to match your specific requirements
  badges?: string[];
  orders?: Order[];
  tokens?: any[]; // adjust type to match your specific requirements
}

export interface Order {
  products: string[];
  timestamp?: Date;
  quantity?: number;
  status?: 'Cancelled' | 'Confirmed' | 'Pending' | 'Deliverd' | 'Shipped';
  parentOrder?: string;
}
