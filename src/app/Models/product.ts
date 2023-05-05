export interface Product {
  _id: object;
  name: {
    ar: string;
    en: string;
  };
  priceBefore?: number;
  priceAfter: number;
  brand: {
    ar: string;
    en: string;
  };
  quantity: number;
  photos: string[];
  mainPhoto?: string;
  productDetails: {
    ar?: string;
    en?: string;
  };
  isActive?: boolean;
  departmentID: string;
  subDepartmentID: string;
  nestedSubDepartment: string;
  createdAt?: Date;
  updatedAt?: Date;
}
