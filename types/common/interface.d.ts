
export type IPagination<T = any> = {
  current_page: number,
  data?: T,
  first_page_url?: string,
  from: number,
  last_page: number,
  last_page_url?: string,
  links?: IPaginationLink[],
  next_page_url?: string | null,
  path?: string,
  per_page: number,
  prev_page_url?: string | null,
  to: number,
  total: number,
  totalPages?: number,
};

export type IPaginationLink = {
  url?: string | null,
  label: string,
  active: boolean
}

export type IAlert = {
  id?: string,
  title: string,
  message?: string,
  displaySeconds?: number,
  displayForever?: boolean,
  type?: IAlertType,
  fired?: boolean,
}