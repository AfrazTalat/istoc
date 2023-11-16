import { defineStore } from 'pinia'
import { CrudResource } from '~/types/common/http'
import { ICategory } from '~/types/resources/common'
import { defaultCrudState } from '~/utilities/http'

export const useCategories = defineStore('categories', () => {
  const categories = ref<CrudResource<ICategory>>(defaultCrudState);
  const crudApi = useCrudApi(categories, 'commons/categories');

  const fetchCategories = (params?: Record<string, any>) => {
    return crudApi.fetch({
      params,
    });
  }

  return { categories, fetchCategories }
})