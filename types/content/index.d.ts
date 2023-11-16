import { IPreviewableFile } from "../common/global";
import { StringDate } from "../common/io";

export type IArticle = {
  id: number,
  title: string,
  banner?: IPreviewableFile,
  description: string,
  hidden: boolean,
  created_at: StringDate,
  updated_at: StringDate,
}

export type ISlider = {
  id: number,
  title: string,
  visible: boolean,
  image: IPreviewableFile,
  created_at: StringDate,
  updated_at: StringDate,
}

export type IPage = {
  id: number,
  title: string,
  slug: string,
  content: any,
  visible: boolean,
  created_at: StringDate,
  updated_at: StringDate,
}

export type IProject = {
  id: number,
  title: string,
  content: any,
  visible: boolean,
  created_at: StringDate,
  updated_at: StringDate,
  images?: IPreviewableFile[],
}

export type IPartner = {
  created_at: StringDate,
  id: number
  featured: boolean
  logo: IPreviewableFile,
  products_count?: number,
  name: string
  updated_at: StringDate
}

export type IBranch = {
  name: string
  id: number
  enabled: boolean
  code: string,
  email: string,
  phone_number: string,
  location_text: string,
  location_link: string,
  updated_at: StringDate
  created_at: StringDate,
}

export type IDownloadAttachment = {
  id: number,
  title: string,
  description: any,
  visible: boolean,
  file?: IPreviewableFile,
  created_at: StringDate,
  updated_at: StringDate,
}

