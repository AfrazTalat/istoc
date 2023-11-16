import { IPreviewableFile } from "../common/global";
import { StringDate } from "../common/io";

export type IProduct = {
  id: number,
  name: string,
  images?: IPreviewableFile[],
  pdf?: IPreviewableFile,
  description: string,
  youtube_video: string,
  subtitle: string,
  hidden: boolean,
  featured: boolean,
  category?: ICategory,
  brand?: IBrand,
  price: number,
  stock_qty: number,
  trashed_at: StringDate,
  deleted_at: StringDate,
  created_at: StringDate,
  updated_at: StringDate,
}


export type ICartItem = {
  associatedModel: IProduct,
  name: string,
  price: number,
  quantity: number,
}

export type ICart = {
  items: Record<string, IECommerceCartItem>,
  count: number,
  subtotal: number,
  total: number,
}