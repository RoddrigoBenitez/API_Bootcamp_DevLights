import { IProduct } from "../product/types";
import { IUser } from "../user/types";

export interface IHistorialProduct {
    product_id: string;
    quantity: number;  
    sub_total: number;
    stock: IProduct
  }

export interface IHistorial {
    user_id: IUser;
    products: { product_id: IProduct, quantity: number, sub_total: number }[];
    total_price: Number
}