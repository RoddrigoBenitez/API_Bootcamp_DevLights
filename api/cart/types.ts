import { IProduct } from "../product/types";
import { IUser } from "../user/types"

export interface ICart{
 user_id: IUser;
 products: {product_id: IProduct; quantity: number}[];
 total_price: number;
}