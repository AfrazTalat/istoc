import { IPagination } from "./interface"

export type CrudResource<T = any> = {
  list: T[],
  loading: boolean,
  pagination?: IPagination<T>
}
