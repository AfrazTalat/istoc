import { defineStore } from 'pinia'
import { CrudResource } from '~/types/common/http'
import { IProduct } from '~/types/resources/ecommerce';
import { defaultCrudState } from '~/utilities/http'

export const useProducts = defineStore('products', () => {
  const products = ref<CrudResource<IProduct>>(defaultCrudState);
  const crudApi = useCrudApi(products, 'ecommerce/products');

  const fetchProducts = (params: Record<string, any>) => {
    return crudApi.fetch({ params });
  }

  const getProduct = (id: number, params?: Record<string, any>) => {
    return crudApi.get(id, { params });
  }

  return { products, fetchProducts, getProduct }
})