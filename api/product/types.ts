export interface IProduct {
  _id: string | undefined;
  last_name: string;
  description: string;
  stock: string;
  price: string;
  category: string;
  image: string | undefined;
}

type filterByPrice = "lower" | "higher";

export interface ISearchParams {
  category?: string;
  salersId?: string;
  filterByPrice?: filterByPrice;
  priceRange?: string;
  page?: string;
  limit?: string;
}