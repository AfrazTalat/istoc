import { defineStore } from 'pinia'
import { CrudResource } from '~/types/common/http'
import { IBrand } from '~/types/resources/common'
import { defaultCrudState } from '~/utilities/http'

export const useBrands = defineStore('brands', () => {
  const brands = ref<CrudResource<IBrand>>(defaultCrudState);
  const crudApi = useCrudApi(brands, 'commons/brands');

  const fetchBrands = () => {
    return crudApi.fetch();
  }

  return { brands, fetchBrands }
})