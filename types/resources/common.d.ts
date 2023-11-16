import { IPreviewableFile } from "../common/global"
import { StringDate } from "../common/io"

export type ICategory = {
  created_at: StringDate,
  description: string
  id: number
  is_enabled: boolean
  featured: boolean
  parent: ICategory
  name: string
  updated_at: StringDate
}

export type IBrand = {
  created_at: StringDate,
  description: string
  id: number
  is_enabled: boolean
  featured: boolean
  logo: IPreviewableFile,
  products_count?: number,
  name: string
  updated_at: StringDate
}